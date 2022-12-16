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
import ChevronDownIcon from 'react-chevron';
import { useAuth0 } from "@auth0/auth0-react";

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
  const { loginWithRedirect,isAuthenticated, logout,user } = useAuth0();

  return (
    <>
      <Box className='RPnavbar' bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Box> 
          <RouterLink to="/"> 
          <Button>  <img src={image} alt="image" width="150px"/>   </Button>
          </RouterLink>
           
          </Box>
          
          <div>  
          <Menu>
           <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
            Why TMetric
          </MenuButton>
          <MenuList>
          <MenuItem>Download</MenuItem>
          <MenuItem>Create a Copy</MenuItem>
          <MenuItem>Mark as Draft</MenuItem>
          <MenuDivider />
          <MenuItem>Delete</MenuItem>
          <MenuItem>Attend a Workshop</MenuItem>
          </MenuList>

          
          </Menu>

          <Menu>
           <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
            Apps & Integrations
          </MenuButton>
          <MenuList>
          <MenuItem>Download</MenuItem>
          <MenuItem>Create a Copy</MenuItem>
          <MenuItem>Mark as Draft</MenuItem>
          <MenuItem>Delete</MenuItem>
          <MenuItem>Attend a Workshop</MenuItem>
          </MenuList>
          </Menu>

          <RouterLink to="/blog"> 
          <Button> Blog</Button>
          </RouterLink>

          <RouterLink to="/pricing"> 
          <Button> Pricing</Button>
          </RouterLink>

          <RouterLink to="/support"> 
          <Button> Support</Button>
          </RouterLink>
  
          </div>
          
          <Flex alignItems={'center'} gap="15px">
          {/* <FaCartPlus size={"30"}/> */}
          {isAuthenticated && <p>Welcome:- {user.name} </p>}
          {isAuthenticated ? 
            <RouterLink to="/login"> 
          <button className='RPsignupbuttom' onClick={() => logout({ returnTo: window.location.origin })}>
      Log Out
    </button>
          </RouterLink>
          :(
            <RouterLink to="/login"> 
            <button className='RPsignupbuttom' onClick={() => loginWithRedirect()}>Log In</button>
            </RouterLink>
          )}
         
  
          

          {/* <RouterLink to="/register">
          <Button className='RPsignupbuttom'> Sign Up </Button>
          </RouterLink> */}
          
           
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