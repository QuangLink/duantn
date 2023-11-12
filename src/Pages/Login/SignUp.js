import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Link,
  Stack,
  Text,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { login, loginGoogle } from "../../Redux/Auth/auth.action";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase";
import { UserAuth } from "../../context/AuthContext";
function SignUpForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const toast = useToast();
  const { isAuth } = useSelector((store) => store.AuthManager);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { googleSignIn, user } = UserAuth(); // Lấy thông tin người dùng từ Firebase
  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn(); // Bắt đầu quá trình đăng nhập bằng Google
      // Không cần gọi dispatch(loginGoogle(user)) ở đây

      // Đợi đến khi người dùng được xác thực và thông tin người dùng sẵn sàng
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        if (currentUser) {
          // Sau khi nhận được thông tin người dùng, thực hiện đăng nhập
          dispatch(loginGoogle(currentUser));
          // Hủy đăng ký theo dõi để ngừng lắng nghe thay đổi trạng thái
          unsubscribe();
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username || !email || !password) {
      toast({
        title: "Hãy điền đầy đủ thông tin",
        description: "Hãy kiểm tra lại",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
      return;
    }

    if (isValidEmail(email)) {
      try {
        const payload = {
          username,
          email,
          password,
        };

        const response = await axios.post(
          "https://duantn-backend.onrender.com/users/register",
          payload,
        );

        if (response.data && response.data.error) {
          toast({
            title: "Lỗi đăng ký",
            description: response.data.error,
            status: "error",
            duration: 2000,
            isClosable: true,
          });
        } else {
          toast({
            title: "Tạo tài khoản thành công",
            description:
              "Chào mừng đến với JaguarStore, bạn đã có thể đăng nhập",
            status: "success",
            duration: 2000,
            isClosable: true,
          });

          setUserName("");
          setEmail("");
          setPassword("");

          setTimeout(() => {
            navigate("/login");
          }, 2200);
        }
      } catch (error) {
        console.error("Error: ", error);
        toast({
          title: "Lỗi đăng ký",
          description: "Có lỗi xảy ra khi đăng ký tài khoản.",
          status: "error",
          duration: 2000,
          isClosable: true,
        });
      }
    } else {
      toast({
        title: "Email không hợp lệ",
        description: "Vui lòng nhập đúng định dạng email",
        status: "error",
        duration: 1000,
        isClosable: true,
      });
    }
  };

  const isValidEmail = (email) => {
    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailPattern.test(email);
  };
  useEffect(() => {
    if (isAuth) {
      navigate("/");
      toast({
        title: "Login Success",
        description: `Welcome ${username}`,
        status: "success",
        duration: 8000,
        isClosable: true,
      });
    }
  }, [isAuth, username, navigate, toast]);

  return (
    <div className="form-container sign-up-container">
      <form>
        <h1>Tạo tài khoản</h1>
        <div className="social-container">
          <a href="#" onClick={handleGoogleSignIn} className="social">
            <i className="fab fa-google-plus-g" />
          </a>
        </div>
        <span>Hoặc đăng ký bằng email</span>
        <input
          type="text"
          placeholder="Nhập tên người dùng"
          value={username}
          onChange={(e) => setUserName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Nhập địa chỉ email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <InputGroup>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Nhập mật khẩu của bạn"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <InputRightElement h={"full"}>
            <Button
              variant={"ghost"}
              onClick={() => setShowPassword((showPassword) => !showPassword)}
            >
              {showPassword ? <ViewIcon /> : <ViewOffIcon />}
            </Button>
          </InputRightElement>
        </InputGroup>
        <button className="action-btn" onClick={handleSubmit}>
          Đăng ký
        </button>
      </form>
    </div>
  );
}

export default SignUpForm;
