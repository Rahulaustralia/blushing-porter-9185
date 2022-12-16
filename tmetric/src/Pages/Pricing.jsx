import { ReactNode } from 'react';
import {
  Box,
  Stack,
  HStack,
  Heading,
  Text,
  VStack,
  useColorModeValue,
  List,
  ListItem,
  ListIcon,
  Button,
} from '@chakra-ui/react';
import { FaCheckCircle } from 'react-icons/fa';
import "../styles/Pricing.css"

function PriceWrapper({ children }) {
  return (
    <Box
      mb={4}
      shadow="base"
      borderWidth="1px"
      alignSelf={{ base: 'center', lg: 'flex-start' }}
      borderColor={useColorModeValue('gray.200', 'gray.500')}
      borderRadius={'xl'}>
      {children}
    </Box>
  );
}

export default function Pricing() {
  return (
 <> 
 <div className='RPpricingh'>
  <h1> Pricing </h1>
  <p> All plans include free 30-day trial. No credit card required! </p>
 </div>
    <Box py={12}>
      <VStack spacing={2} textAlign="center">
        {/* <Heading as="h1" fontSize="4xl">
          Plans that fit your need
        </Heading>
        <Text fontSize="lg" color={'gray.500'}>
          Start with 14-day free trial. No credit card needed. Cancel at
          anytime.
        </Text> */}
      </VStack>
      <Stack
        direction={{ base: 'column', md: 'row' }}
        textAlign="center"
        justify="center"
        spacing={{ base: 4, lg: 10 }}
        py={10}>
        <PriceWrapper>
          <Box py={4} px={12}>
            <Text fontWeight="500" fontSize="2xl">
            Business
            </Text>
            <HStack justifyContent="center">
              <Text fontSize="3xl" fontWeight="600">
                $
              </Text>
              <Text fontSize="5xl" fontWeight="900">
                7
              </Text>
              <Text fontSize="3xl" color="gray.500">
                /month
              </Text>
            </HStack>
          </Box>
          <VStack
            bg={useColorModeValue('gray.50', 'gray.700')}
            py={4}
            borderBottomRadius={'xl'}>
            <List spacing={3} textAlign="start" px={12}>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Time tracking
              </ListItem>
             
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Unlimited projects and clients
              </ListItem>
             
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Reporting
              </ListItem>

              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Timer button in 50+ web apps
              </ListItem>

              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Calendar integrations: Google, Outlook
              </ListItem>

              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Billable rates and money tracking
              </ListItem>

              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Budgeting for projects
              </ListItem>

              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Invoicing
              </ListItem>

              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Activity levels for employees
              </ListItem>

              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Apps and sites usage reports
              </ListItem>

              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Screenshots capturing
              </ListItem>

              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Client logins for access to reports
              </ListItem>

              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Paid time off tracking
              </ListItem>

              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Payroll for employees
              </ListItem>

              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Time-sync with Jira and QuickBooks
              </ListItem>
             
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Time-sync with GitLab and Redmine
              </ListItem>

              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Time Off Calendar
              </ListItem>

              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Work Schedule
              </ListItem>

              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Team Dashboard/Personal Dashboard
              </ListItem>
             
            </List>
            {/* <Box w="80%" pt={7}>
              <Button w="full" colorScheme="red" variant="outline">
                Start trial
              </Button>
            </Box> */}
          </VStack>
        </PriceWrapper>

        <PriceWrapper>
          <Box >
            <Box
              
              top="-16px"
              left="50%"
              style={{ transform: 'translate(-50%)' }}>
              {/* <Text
                textTransform="uppercase"
                bg={useColorModeValue('red.300', 'red.700')}
                px={3}
                py={1}
                color={useColorModeValue('gray.900', 'gray.300')}
                fontSize="sm"
                fontWeight="600"
                rounded="xl">
                Most Popular
              </Text> */}
            </Box>
            <Box py={4} px={12}>
              <Text fontWeight="500" fontSize="2xl">
              Professional
              </Text>
              <HStack justifyContent="center">
                <Text fontSize="3xl" fontWeight="600">
                  $
                </Text>
                <Text fontSize="5xl" fontWeight="900">
                  5
                </Text>
                <Text fontSize="3xl" color="gray.500">
                  /month
                </Text>
              </HStack>
            </Box>
            <VStack
              bg={useColorModeValue('gray.50', 'gray.700')}
              py={4}
              borderBottomRadius={'xl'}>
              <List spacing={3} textAlign="start" px={12}>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Time tracking
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Unlimited projects and clients
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Reporting
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Timer button in 50+ web apps
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Calendar integrations: Google, Outlook
                </ListItem>

                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Billable rates and money tracking
                </ListItem>

                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Budgeting for projects
                </ListItem>

                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Invoicing
                </ListItem>

                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Task management
                </ListItem>

                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Activity levels for employees
                </ListItem>

                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Apps and sites usage reports
                </ListItem>

                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Screenshots capturing
                </ListItem>

                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Client logins for access to reports
                </ListItem>

                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Paid time off tracking
                </ListItem>

                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Payroll for employees
                </ListItem>

                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Time tracking permissions
                </ListItem>

                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Time-sync with Jira and QuickBooks
                </ListItem>

                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Time-sync with GitLab and Redmine
                </ListItem>
                Time Off Calendar
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Work Schedule
                </ListItem>

                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Team Dashboard/Personal Dashboard
                </ListItem>

              </List>
              {/* <Box w="80%" pt={7}>
                <Button w="full" colorScheme="red">
                  Start trial
                </Button>
              </Box> */}
            </VStack>
          </Box>
        </PriceWrapper>
        <PriceWrapper>
          <Box py={4} px={12}>
            <Text fontWeight="500" fontSize="2xl">
              Free
            </Text>
            <HStack justifyContent="center">
              <Text fontSize="3xl" fontWeight="600">
                $
              </Text>
              <Text fontSize="5xl" fontWeight="900">
                0
              </Text>
              <Text fontSize="3xl" color="gray.500">
                /month
              </Text>
            </HStack>
          </Box>
          <VStack
            bg={useColorModeValue('gray.50', 'gray.700')}
            py={4}
            borderBottomRadius={'xl'}>
            <List spacing={3} textAlign="start" px={12}>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Time tracking
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Unlimited projects and clients
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Reporting
              </ListItem>

              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Timer button in 50+ web apps
              </ListItem>

              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Calendar integrations: Google, Outlook
              </ListItem>

              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Billable rates and money tracking
              </ListItem>

              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Budgeting for projects
              </ListItem>

              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Invoicing
              </ListItem>

              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Task management
              </ListItem>

              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Activity levels for employees
              </ListItem>

              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Apps and sites usage reports
              </ListItem>

              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Screenshots capturing
              </ListItem>

              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Client logins for access to reports
              </ListItem>

              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Paid time off tracking
              </ListItem>

              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Payroll for employees
              </ListItem>

              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Time-sync with Jira and QuickBooks
              </ListItem>

              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Time-sync with GitLab and Redmine
              </ListItem>

              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Time Off Calendar
              </ListItem>

              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Work Schedule
              </ListItem>

              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Team Dashboard/Personal Dashboard
              </ListItem>

            </List>
            {/* <Box w="80%" pt={7}>
              <Button w="full" colorScheme="red" variant="outline">
                Start trial
              </Button>
            </Box> */}
          </VStack>
        </PriceWrapper>
      </Stack>
    </Box>
    </>
  );
}
