'use client'

import { useState } from 'react'
import {
    Input, FormLabel, Avatar, Stack, Center, Radio, RadioGroup, Alert, AlertIcon, Switch, Checkbox, Textarea, Text,
    Progress,
    Box,
    ButtonGroup,
    Button,
    Heading,
    Flex,
    FormControl,
    GridItem,
    Select,
    SimpleGrid,
    InputLeftAddon,
    InputGroup,
    FormHelperText,
    InputRightElement,
} from '@chakra-ui/react'

import { useToast } from '@chakra-ui/react'

const Form1 = () => {
    const user = {
        name: 'Nguyễn Văn B',
        username: 'nguyenvana',
        gender: 'Nam',
        birthday: '01/01/1990',
        age: 33,
        country: 'Việt Nam',
        province: 'Hà Nội',
        address: 'Số 123, Đường ABC, Quận XYZ, Hà Nội',
        avatar: 'https://example.com/avatar.jpg',
    };
    const [image, setImage] = useState('');
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            setImage(reader.result);
        };

        if (file) {
            reader.readAsDataURL(file);
        }
    };

    return (
        <>
            <Box id='personal-information' maxW="30̀%" mx="auto" mt="40px" p="20px" borderWidth="1px" borderRadius="md" className="profile-container">
                <Box as="label" htmlFor="image" >
                    <Avatar size="xl" src={image} />
                    <Input type="file" id="image" accept="image/*" onChange={handleImageChange} display="none" />
                </Box>
                <Heading mb="10px" className="name">{user.name}</Heading>
                <Text mb="20px" className="username">@{user.username}</Text>

                <Stack spacing={4} mb="20px">
                    <FormControl>
                        <FormLabel>Giới tính</FormLabel>
                        <RadioGroup value={user.gender} isReadOnly>
                            <Stack direction="row">
                                <Radio value="Nam">Nam</Radio>
                                <Radio value="Nữ">Nữ</Radio>
                                <Radio value="Khác">Khác</Radio>
                            </Stack>
                        </RadioGroup>
                    </FormControl>

                    <FormControl>
                        <FormLabel>Ngày sinh</FormLabel>
                        <Input type="text" value={user.birthday} isReadOnly />
                    </FormControl>

                    <FormControl>
                        <FormLabel>Tuổi</FormLabel>
                        <Input type="number" value={user.age} isReadOnly />
                    </FormControl>

                    <FormControl>
                        <FormLabel>Quốc gia</FormLabel>
                        <Input type="text" value={user.country} isReadOnly />
                    </FormControl>

                    <FormControl>
                        <FormLabel>Tỉnh thành</FormLabel>
                        <Input type="text" value={user.province} isReadOnly />
                    </FormControl>

                    <FormControl>
                        <FormLabel>Địa chỉ</FormLabel>
                        <Textarea
                            backgroundColor="white"
                            value={user.address}
                        />
                    </FormControl>
                </Stack>
                <Button type="submit" colorScheme="blue">Thay đổi thông tin người dùng</Button>
            </Box>
        </>
    )
}

const Form2 = () => {
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();

        // Kiểm tra mật khẩu hiện tại
        if (currentPassword !== 'currentPassword123') {
            setErrorMessage('Mật khẩu hiện tại không chính xác');
            setSuccessMessage('');
            return;
        }

        // Kiểm tra mật khẩu mới và xác nhận mật khẩu
        if (newPassword !== confirmPassword) {
            setErrorMessage('Mật khẩu mới và xác nhận mật khẩu không khớp');
            setSuccessMessage('');
            return;
        }

        // Thực hiện đổi mật khẩu
        // Gửi request đổi mật khẩu tới server

        setErrorMessage('');
        setSuccessMessage('Đổi mật khẩu thành công');
        setCurrentPassword('');
        setNewPassword('');
        setConfirmPassword('');
    };
    return (
        <>
            <Box id='chang-pwd' maxW="30̀%" mx="auto" mt="40px" p="20px" borderWidth="1px" borderRadius="md" className="profile-container">
                <Heading mb="20px">Đổi mật khẩu</Heading>

                {errorMessage && (
                    <Alert status="error" mb="20px">
                        <AlertIcon />
                        {errorMessage}
                    </Alert>
                )}
                {successMessage && (
                    <Alert status="success" mb="20px">
                        <AlertIcon />
                        {successMessage}
                    </Alert>
                )}
                <form onSubmit={handleSubmit}>
                    <FormControl mb="20px">
                        <FormLabel>Mật khẩu hiện tại</FormLabel>
                        <Input type="password" value={currentPassword} onChange={(e) => setCurrentPassword(e.target.value)} required />
                    </FormControl>

                    <FormControl mb="20px">
                        <FormLabel>Mật khẩu mới</FormLabel>
                        <Input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} required />
                    </FormControl>

                    <FormControl mb="20px">
                        <FormLabel>Xác nhận mật khẩu</FormLabel>
                        <Input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
                    </FormControl>

                    <Button type="submit" colorScheme="blue">Đổi mật khẩu</Button>
                </form>
            </Box>
        </>
    )
}

const Form3 = () => {
    const [emailNotification, setEmailNotification] = useState(false);
    const [smsNotification, setSmsNotification] = useState(false);

    const handleEmailNotificationChange = () => {
        setEmailNotification(!emailNotification);
    };

    const handleSmsNotificationChange = () => {
        setSmsNotification(!smsNotification);
    };
    const handleSaveSettings = () => {
        // Lưu cài đặt thông báo vào cơ sở dữ liệu hoặc thực hiện các hành động khác
        console.log("Cài đặt thông báo đã được lưu");
      };
    return (
        <>
            <Box id="emailandsms" maxW="0̀%" mx="auto" mt="40px" p="20px" borderWidth="1px" borderRadius="md" className="profile-container">
                <Box>
                    <Heading as="h4">Cài đặt thông báo</Heading>
                    <br />
                    <FormControl>
                        <FormLabel>Thông báo qua Email</FormLabel>
                        <Switch isChecked={emailNotification} onChange={handleEmailNotificationChange} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Thông báo qua SMS</FormLabel>
                        <Switch isChecked={smsNotification} onChange={handleSmsNotificationChange} />
                    </FormControl>
                    <br />
                    <Button colorScheme="blue" onClick={handleSaveSettings}>Lưu cài đặt</Button>
                </Box>
            </Box>
        </>
    )
}

export default function Multistep() {
    const toast = useToast();
    const [step, setStep] = useState(1);
    const [progress, setProgress] = useState(33.33);

    const handleFormChange = (newStep) => {
        setStep(newStep);
        setProgress((newStep - 1) * 33.33);
    };

    const handleSubmit = () => {
        toast({
            title: 'Account created.',
            description: "We've created your account for you.",
            status: 'success',
            duration: 3000,
            isClosable: true,
        });
    };


    return (
        <>
            <Box
                width="80%"
                p={6}
                m="5px auto"
                as="form"
            >
                <ButtonGroup  w="100%">
                    <Flex w="100%" justifyContent="center">
                        <Flex>
                            <Button
                                onClick={() => handleFormChange(1)}
                                isDisabled={step ===  1}
                                bg="#4a90e2"
                                color="white"
                                variant="solid"
                                fontSize="20px"
                                w="300px"
                                height="50px"
                                mr="5%"

                            >
                                Thông tin người dùng
                            </Button>
                            <Button
                                onClick={() => handleFormChange(2)}
                                isDisabled={step === 2}
                         
                                bg="#4a90e2"
                                color="white"
                                variant="solid"
                                fontSize="20px"
                                w="300px"
                                height="50px"
                                mr="5%"
                            >
                                Đỗi mật khẩu 
                            </Button>
                            <Button
                                onClick={() => handleFormChange(3)}
                                isDisabled={step === 3}
                                bg="#4a90e2"
                                color="white"
                                variant="solid"
                                fontSize="20px"
                                w="300px"
                                height="50px"
                                mr="5%"
                            >
                                Cài đặt thông báo
                            </Button>
                        </Flex>
                    </Flex>
                    
                </ButtonGroup>
            
                {step === 1 ? <Form1 /> : step === 2 ? <Form2 /> : <Form3 />}

            </Box>
        </>
    );
}
