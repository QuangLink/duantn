import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  useToast,
} from "@chakra-ui/react";
import { NavLink, useNavigate } from "react-router-dom";
import { login } from "../../Redux/Auth/auth.action";

function SignInForm() {
  
  const [loginCreds, setLoginCreds] = useState({});
  const dispatch = useDispatch();
  const toast = useToast();
  const { isAuth, username } = useSelector((store) => store.AuthManager);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginCreds(prevLoginCreds => ({
      ...prevLoginCreds,
      [name]: value,
    }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(loginCreds));
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
    <div className="form-container sign-in-container">
      <form onSubmit={handleSubmit}>
        <h1>Đăng nhập</h1>
        <div className="social-container">
          <a href="#" className="social">
            <i className="fab fa-facebook-f" />
          </a>
          <a href="#" className="social">
            <i className="fab fa-google-plus-g" />
          </a>
          <a href="#" className="social">
            <i className="fab fa-linkedin-in" />
          </a>
        </div>
        <span>hoặc sử dụng tài khoản</span>
        <input
          type="email"
          placeholder="Email"
          name="email"
       
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
        />
        <a href="#">Quên mật khẩu ?</a>
        <button  className="action-btn">Đăng nhập</button>
      </form>
    </div>
   
  );

}

export default SignInForm;
