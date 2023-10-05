import {useDisclosure, Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, Text, ModalFooter, Input, Flex, useToast } from '@chakra-ui/react'
import React, { useContext, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const Checkout = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const address=useRef({})
    const toast = useToast()
    const {firstName,setfirstName,lastName,setlastName,mobile,setMobile,flat,setflat,state,setstate,street,setstreet,city,setcity,}=useContext(AppContext)
    const handleAddress=()=>{
      setfirstName(address.current.firstName.value);
      setlastName(address.current.lastName.value);
      setflat(address.current.flat.value);
      setstate(address.current.state.value);
      setstreet(address.current.street.value);
      setcity(address.current.city.value);
      setMobile(address.current.mobile.value);
    }
    const clearAddress = () => {
      setfirstName('');
      setlastName('');
      setflat('');
      setstate('');
      setstreet('');
      setcity('');
      setMobile('');
    };
    
    const navigate=useNavigate()
    return (
      <div style={{backgroundColor:"#f1eeee", textAlign: "center" }}>
      <Box width="90%" margin="auto" backgroundColor="white" boxShadow='base'>
      <Accordion defaultIndex={[0]} allowMultiple>
    <AccordionItem>
      <h2>
        <AccordionButton>
          <Box flex='1' textAlign='center'>
            <Text fontSize='3xl'>Địa chỉ giao hàng</Text>
          </Box>
            
          <AccordionIcon />
        </AccordionButton>
      </h2>
  
      <AccordionPanel pb={4} style={{margin: '20px 150px', border: '2px solid #ccc', padding: '20px', borderRadius: '20px'}}>

        {(flat==="")&&<Box>Không tìm thấy địa chỉ nào</Box>}
        {(flat !== "") && (
          <Box style={{display: 'flex',flexDirection: 'column',alignItems: 'center'}}>
            <Flex width="300px" justifyContent="space-between">
              <Text fontWeight="bold" fontStyle="italic">Tên:</Text>
              <Text>{firstName} {lastName}</Text>
            </Flex>
            <Flex width="300px" justifyContent="space-between">
              <Text fontWeight="bold" fontStyle="italic">Địa chỉ:</Text>
              <Text>{flat}</Text>
            </Flex>
            <Flex width="300px" justifyContent="space-between">
              <Text fontWeight="bold" fontStyle="italic">Đường:</Text>
              <Text>{street}</Text>
            </Flex>
            <Flex width="300px" justifyContent="space-between">
              <Text fontWeight="bold" fontStyle="italic">Thành phố:</Text>
              <Text>{city}</Text>
            </Flex>
            <Flex width="300px" justifyContent="space-between">
              <Text fontWeight="bold" fontStyle="italic">Tỉnh:</Text>
              <Text>{state}</Text>
            </Flex>
            <Flex width="300px" justifyContent="space-between">
              <Text fontWeight="bold" fontStyle="italic">Số điện thoại:</Text>
              <Text>{mobile}</Text>
            </Flex>
          </Box>
        )}
        
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Địa chỉ giao hàng</ModalHeader>
            <ModalCloseButton />
            <ModalBody >
              <Flex flexDirection="column" gap="1rem">
                <Input placeholder='Họ*' ref={(e)=>address.current["firstName"]=e} />

                <Input placeholder='Tên*' ref={(e)=>address.current["lastName"]=e} />
             
                <Input placeholder='Địa chỉ cụ thể (Tòa nhà)*' ref={(e)=>address.current["flat"]=e}/>
                
                <Input placeholder='Đường*' ref={(e)=>address.current["street"]=e}/>
              
                <Input placeholder='Thành phố*' ref={(e)=>address.current["city"]=e}/>
           
                <Input placeholder='Tỉnh*' ref={(e)=>address.current["state"]=e}/>
            
                <Input placeholder='Số điện thoại*' ref={(e)=>address.current["mobile"]=e}/>
                </Flex>
                
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button variant='ghost' onClick={()=>{
                handleAddress();
            if(flat!==""&&state!==""&&city!==""&&street!=="")
            {          toast({
            title: 'Địa chỉ được thêm thành công.',
            description: "Chúng tôi sẽ sử dụng thông tin để liên hệ.",
            status: 'success',
            duration: 9000,
            isClosable: true,
          }) 
          // navigate("/checkout")
          }
          // else
          // setfirst(true)
          }}>SUBMIT</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </AccordionPanel>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', margin: '20px' }}>
        {(flat==="")&&<Button onClick={onOpen} colorScheme='blue' variant='outline'>Nhập địa chỉ giao hàng mới</Button>}
        {(flat !== "") && (
          <Button onClick={onOpen} colorScheme='blue' variant='outline'>
            Sửa địa chỉ
          </Button>
        )}
        {(flat !== "") && (
          <Button onClick={() => navigate("/payments")} colorScheme='blue' variant='outline'>
            Chọn phương thức thanh toán
          </Button>
        )}
        {(flat !== "") && (
          <Button onClick={clearAddress} colorScheme="red" variant="outline">
            Xóa
          </Button>
        )}
        </div>
      
    </AccordionItem>
  </Accordion>
  </Box>
  </div>
    )
  }
  
  export default Checkout