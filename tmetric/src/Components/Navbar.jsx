import { ReactNode } from 'react';
import {
  Box,
  Text,
  Flex,
  Avatar,
  Link,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import {FaCartPlus} from "react-icons/fa"
import {Link as RouterLink} from "react-router-dom";
import image from "../Images/logo.png"
import "../styles/Navbar.css"

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={'#'}>
    {children}
  </Link>
);

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box className='RPnavbar' bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Box> <img src={image} alt="image" 
           width="150px"
          /> </Box>
          <RouterLink to="/"> 
          <Button> Home</Button>
          </RouterLink>
          
          <RouterLink to="/blog"> 
          <Button> Blog</Button>
          </RouterLink>

          <RouterLink to="/pricing"> 
          <Button> Pricing</Button>
          </RouterLink>

          <RouterLink to="/support"> 
          <Button> Support</Button>
          </RouterLink>
  
          
          <Flex alignItems={'center'}>
          <FaCartPlus size={"30"}/>

          <RouterLink to="/login"> 
          <Button> Login</Button>
          </RouterLink>

          <RouterLink to="/register">
          <Button> Register </Button>
          </RouterLink>
          
           
            <Stack direction={'row'} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}