// import { ReactNode } from 'react';
// import {
//   Box,
//   Stack,
//   HStack,
//   Heading,
//   Text,
//   VStack,
//   useColorModeValue,
//   List,
//   ListItem,
//   ListIcon,
//   Button,
// } from '@chakra-ui/react';
// import { FaCheckCircle } from 'react-icons/fa';
// import "../styles/Pricing.css"
// import Footer from '../Components/Footer';

// function PriceWrapper({ children }) {
//   return (
//     <Box
//       mb={4}
//       shadow="base"
//       borderWidth="1px"
//       alignSelf={{ base: 'center', lg: 'flex-start' }}
//       borderColor={useColorModeValue('gray.200', 'gray.500')}
//       borderRadius={'xl'}>
//       {children}
//     </Box>
//   );
// }

// export default function Pricing() {
//   return (
//  <> 
//  <div className='RPpricingh'>
//   <h1> Pricing </h1>
//   <p> All plans include free 30-day trial. No credit card required! </p>
//  </div>
 
//     <Box py={12}>
//       <VStack spacing={2} textAlign="center">
//         {/* <Heading as="h1" fontSize="4xl">
//           Plans that fit your need
//         </Heading>
//         <Text fontSize="lg" color={'gray.500'}>
//           Start with 14-day free trial. No credit card needed. Cancel at
//           anytime.
//         </Text> */}
//       </VStack>
//       <Stack
//         direction={{ base: 'column', md: 'row' }}
//         textAlign="center"
//         justify="center"
//         spacing={{ base: 4, lg: 10 }}
//         py={10}>
//         <PriceWrapper>
//           <Box py={4} px={12}>
//             <Text fontWeight="500" fontSize="2xl">
//             Business
//             </Text>
//             <HStack justifyContent="center">
//               <Text fontSize="3xl" fontWeight="600">
//                 $
//               </Text>
//               <Text fontSize="5xl" fontWeight="900">
//                 7
//               </Text>
//               <Text fontSize="3xl" color="gray.500">
//                 /month
//               </Text>
//             </HStack>
//           </Box>
//           <VStack
//             bg={useColorModeValue('gray.50', 'gray.700')}
//             py={4}
//             borderBottomRadius={'xl'}>
//             <List spacing={3} textAlign="start" px={12}>
//               <ListItem>
//                 <ListIcon as={FaCheckCircle} color="green.500" />
//                 Time tracking
//               </ListItem>
             
//               <ListItem>
//                 <ListIcon as={FaCheckCircle} color="green.500" />
//                 Unlimited projects and clients
//               </ListItem>
             
//               <ListItem>
//                 <ListIcon as={FaCheckCircle} color="green.500" />
//                 Reporting
//               </ListItem>

//               <ListItem>
//                 <ListIcon as={FaCheckCircle} color="green.500" />
//                 Timer button in 50+ web apps
//               </ListItem>

//               <ListItem>
//                 <ListIcon as={FaCheckCircle} color="green.500" />
//                 Calendar integrations: Google, Outlook
//               </ListItem>

//               <ListItem>
//                 <ListIcon as={FaCheckCircle} color="green.500" />
//                 Billable rates and money tracking
//               </ListItem>

//               <ListItem>
//                 <ListIcon as={FaCheckCircle} color="green.500" />
//                 Budgeting for projects
//               </ListItem>

//               <ListItem>
//                 <ListIcon as={FaCheckCircle} color="green.500" />
//                 Invoicing
//               </ListItem>

//               <ListItem>
//                 <ListIcon as={FaCheckCircle} color="green.500" />
//                 Activity levels for employees
//               </ListItem>

//               <ListItem>
//                 <ListIcon as={FaCheckCircle} color="green.500" />
//                 Apps and sites usage reports
//               </ListItem>

//               <ListItem>
//                 <ListIcon as={FaCheckCircle} color="green.500" />
//                 Screenshots capturing
//               </ListItem>

//               <ListItem>
//                 <ListIcon as={FaCheckCircle} color="green.500" />
//                 Client logins for access to reports
//               </ListItem>

//               <ListItem>
//                 <ListIcon as={FaCheckCircle} color="green.500" />
//                 Paid time off tracking
//               </ListItem>

//               <ListItem>
//                 <ListIcon as={FaCheckCircle} color="green.500" />
//                 Payroll for employees
//               </ListItem>

//               <ListItem>
//                 <ListIcon as={FaCheckCircle} color="green.500" />
//                 Time-sync with Jira and QuickBooks
//               </ListItem>
             
//               <ListItem>
//                 <ListIcon as={FaCheckCircle} color="green.500" />
//                 Time-sync with GitLab and Redmine
//               </ListItem>

//               <ListItem>
//                 <ListIcon as={FaCheckCircle} color="green.500" />
//                 Time Off Calendar
//               </ListItem>

//               <ListItem>
//                 <ListIcon as={FaCheckCircle} color="green.500" />
//                 Work Schedule
//               </ListItem>

//               <ListItem>
//                 <ListIcon as={FaCheckCircle} color="green.500" />
//                 Team Dashboard/Personal Dashboard
//               </ListItem>
             
//             </List>
//             {/* <Box w="80%" pt={7}>
//               <Button w="full" colorScheme="red" variant="outline">
//                 Start trial
//               </Button>
//             </Box> */}
//           </VStack>
//         </PriceWrapper>

//         <PriceWrapper>
//           <Box >
//             <Box
              
//               top="-16px"
//               left="50%"
//               style={{ transform: 'translate(-50%)' }}>
//               {/* <Text
//                 textTransform="uppercase"
//                 bg={useColorModeValue('red.300', 'red.700')}
//                 px={3}
//                 py={1}
//                 color={useColorModeValue('gray.900', 'gray.300')}
//                 fontSize="sm"
//                 fontWeight="600"
//                 rounded="xl">
//                 Most Popular
//               </Text> */}
//             </Box>
//             <Box py={4} px={12}>
//               <Text fontWeight="500" fontSize="2xl">
//               Professional
//               </Text>
//               <HStack justifyContent="center">
//                 <Text fontSize="3xl" fontWeight="600">
//                   $
//                 </Text>
//                 <Text fontSize="5xl" fontWeight="900">
//                   5
//                 </Text>
//                 <Text fontSize="3xl" color="gray.500">
//                   /month
//                 </Text>
//               </HStack>
//             </Box>
//             <VStack
//               bg={useColorModeValue('gray.50', 'gray.700')}
//               py={4}
//               borderBottomRadius={'xl'}>
//               <List spacing={3} textAlign="start" px={12}>
//                 <ListItem>
//                   <ListIcon as={FaCheckCircle} color="green.500" />
//                   Time tracking
//                 </ListItem>
//                 <ListItem>
//                   <ListIcon as={FaCheckCircle} color="green.500" />
//                   Unlimited projects and clients
//                 </ListItem>
//                 <ListItem>
//                   <ListIcon as={FaCheckCircle} color="green.500" />
//                   Reporting
//                 </ListItem>
//                 <ListItem>
//                   <ListIcon as={FaCheckCircle} color="green.500" />
//                   Timer button in 50+ web apps
//                 </ListItem>
//                 <ListItem>
//                   <ListIcon as={FaCheckCircle} color="green.500" />
//                   Calendar integrations: Google, Outlook
//                 </ListItem>

//                 <ListItem>
//                   <ListIcon as={FaCheckCircle} color="green.500" />
//                   Billable rates and money tracking
//                 </ListItem>

//                 <ListItem>
//                   <ListIcon as={FaCheckCircle} color="green.500" />
//                   Budgeting for projects
//                 </ListItem>

//                 <ListItem>
//                   <ListIcon as={FaCheckCircle} color="green.500" />
//                   Invoicing
//                 </ListItem>

//                 <ListItem>
//                   <ListIcon as={FaCheckCircle} color="green.500" />
//                   Task management
//                 </ListItem>

//                 <ListItem>
//                   <ListIcon as={FaCheckCircle} color="green.500" />
//                   Activity levels for employees
//                 </ListItem>

//                 <ListItem>
//                   <ListIcon as={FaCheckCircle} color="green.500" />
//                   Apps and sites usage reports
//                 </ListItem>

//                 <ListItem>
//                   <ListIcon as={FaCheckCircle} color="green.500" />
//                   Screenshots capturing
//                 </ListItem>

//                 <ListItem>
//                   <ListIcon as={FaCheckCircle} color="green.500" />
//                   Client logins for access to reports
//                 </ListItem>

//                 <ListItem>
//                   <ListIcon as={FaCheckCircle} color="green.500" />
//                   Paid time off tracking
//                 </ListItem>

//                 <ListItem>
//                   <ListIcon as={FaCheckCircle} color="green.500" />
//                   Payroll for employees
//                 </ListItem>

//                 <ListItem>
//                   <ListIcon as={FaCheckCircle} color="green.500" />
//                   Time tracking permissions
//                 </ListItem>

//                 <ListItem>
//                   <ListIcon as={FaCheckCircle} color="green.500" />
//                   Time-sync with Jira and QuickBooks
//                 </ListItem>

//                 <ListItem>
//                   <ListIcon as={FaCheckCircle} color="green.500" />
//                   Time-sync with GitLab and Redmine
//                 </ListItem>
//                 Time Off Calendar
//                 <ListItem>
//                   <ListIcon as={FaCheckCircle} color="green.500" />
//                   Work Schedule
//                 </ListItem>

//                 <ListItem>
//                   <ListIcon as={FaCheckCircle} color="green.500" />
//                   Team Dashboard/Personal Dashboard
//                 </ListItem>

//               </List>
//               {/* <Box w="80%" pt={7}>
//                 <Button w="full" colorScheme="red">
//                   Start trial
//                 </Button>
//               </Box> */}
//             </VStack>
//           </Box>
//         </PriceWrapper>
//         <PriceWrapper>
//           <Box py={4} px={12}>
//             <Text fontWeight="500" fontSize="2xl">
//               Free
//             </Text>
//             <HStack justifyContent="center">
//               <Text fontSize="3xl" fontWeight="600">
//                 $
//               </Text>
//               <Text fontSize="5xl" fontWeight="900">
//                 0
//               </Text>
//               <Text fontSize="3xl" color="gray.500">
//                 /month
//               </Text>
//             </HStack>
//           </Box>
//           <VStack
//             bg={useColorModeValue('gray.50', 'gray.700')}
//             py={4}
//             borderBottomRadius={'xl'}>
//             <List spacing={3} textAlign="start" px={12}>
//               <ListItem>
//                 <ListIcon as={FaCheckCircle} color="green.500" />
//                 Time tracking
//               </ListItem>
//               <ListItem>
//                 <ListIcon as={FaCheckCircle} color="green.500" />
//                 Unlimited projects and clients
//               </ListItem>
//               <ListItem>
//                 <ListIcon as={FaCheckCircle} color="green.500" />
//                 Reporting
//               </ListItem>

//               <ListItem>
//                 <ListIcon as={FaCheckCircle} color="green.500" />
//                 Timer button in 50+ web apps
//               </ListItem>

//               <ListItem>
//                 <ListIcon as={FaCheckCircle} color="green.500" />
//                 Calendar integrations: Google, Outlook
//               </ListItem>

//               <ListItem>
//                 <ListIcon as={FaCheckCircle} color="green.500" />
//                 Billable rates and money tracking
//               </ListItem>

//               <ListItem>
//                 <ListIcon as={FaCheckCircle} color="green.500" />
//                 Budgeting for projects
//               </ListItem>

//               <ListItem>
//                 <ListIcon as={FaCheckCircle} color="green.500" />
//                 Invoicing
//               </ListItem>

//               <ListItem>
//                 <ListIcon as={FaCheckCircle} color="green.500" />
//                 Task management
//               </ListItem>

//               <ListItem>
//                 <ListIcon as={FaCheckCircle} color="green.500" />
//                 Activity levels for employees
//               </ListItem>

//               <ListItem>
//                 <ListIcon as={FaCheckCircle} color="green.500" />
//                 Apps and sites usage reports
//               </ListItem>

//               <ListItem>
//                 <ListIcon as={FaCheckCircle} color="green.500" />
//                 Screenshots capturing
//               </ListItem>

//               <ListItem>
//                 <ListIcon as={FaCheckCircle} color="green.500" />
//                 Client logins for access to reports
//               </ListItem>

//               <ListItem>
//                 <ListIcon as={FaCheckCircle} color="green.500" />
//                 Paid time off tracking
//               </ListItem>

//               <ListItem>
//                 <ListIcon as={FaCheckCircle} color="green.500" />
//                 Payroll for employees
//               </ListItem>

//               <ListItem>
//                 <ListIcon as={FaCheckCircle} color="green.500" />
//                 Time-sync with Jira and QuickBooks
//               </ListItem>

//               <ListItem>
//                 <ListIcon as={FaCheckCircle} color="green.500" />
//                 Time-sync with GitLab and Redmine
//               </ListItem>

//               <ListItem>
//                 <ListIcon as={FaCheckCircle} color="green.500" />
//                 Time Off Calendar
//               </ListItem>

//               <ListItem>
//                 <ListIcon as={FaCheckCircle} color="green.500" />
//                 Work Schedule
//               </ListItem>

//               <ListItem>
//                 <ListIcon as={FaCheckCircle} color="green.500" />
//                 Team Dashboard/Personal Dashboard
//               </ListItem>

//             </List>
//             {/* <Box w="80%" pt={7}>
//               <Button w="full" colorScheme="red" variant="outline">
//                 Start trial
//               </Button>
//             </Box> */}
//           </VStack>
//         </PriceWrapper>
//       </Stack>
//     </Box>
//      <Footer />
//     </>
//   );
// }


import React from "react";
import { useState } from "react";
import "../styles/Pricing.css";
import { TiTick } from "react-icons/ti";
import { ImCross } from "react-icons/im";

import  Footer  from "../Components/Footer";
import { v4 as uuid } from "uuid";
import { Link } from "react-router-dom";
const data = [
  {
    title: "Time tracking",
  },
  {
    title: "Unlimited projects and clients",
  },
  {
    title: "Timer button in 50+ web apps",
  },
  {
    title: "Calendar integrations: Google, Outlook",
  },
  {
    title: "Billable rates and money tracking",
  },
  {
    title: "Budgeting for projects",
  },
  {
    title: "Invoicing",
  },
  {
    title: "Task management",
  },
  {
    title: "Activity levels for employees",
  },
  {
    title: "Apps and sites usage reports",
  },
  {
    title: "Screenshots capturing",
  },
  {
    title: "Paid time off tracking",
  },
  {
    title: "Payroll for employees",
  },
  {
    title: "Time tracking permissions",
  },
  {
    title: "Time-sync with Jira and QuickBooks",
  },
  {
    title: "Time Off Calendar",
  },
  {
    title: "Work Schedule",
  },
  {
    title: "Work Schedule",
  },
];

const Pricing = () => {
  const [teamSize, setTeamSize] = useState(1);

  return (
    <>
      
      <div>
        <div className="price-header">
          <h1> Pricing</h1>
          <p>All plans include free 30-day trial. No credit card required!</p>
        </div>
        <div>
          <div className="toggler">
            <div className="input-div">
              <span
                style={{
                  fontWeight: "500",
                  marginRight: "10px",
                  fontSize: "20px",
                }}
              >
                Team Size
              </span>
              <input
                className="Rpinp1"
                type="number"
                value={teamSize || 1}
                onChange={({ target }) =>
                  setTeamSize(
                    target.value > 200
                      ? 200
                      : target.value < 1
                      ? 1
                      : target.value
                  )
                }
                min="1"
                max="200"
              />
            </div>
            <div className="range-div">
              <input
                className="iline"
                type="range"
                value={teamSize}
                min="1"
                max="200"
                name=""
                onChange={(e) => setTeamSize(e.target.value)}
                id=""
              />
            </div>
          </div>

          <div className="carddiv">
            <div className="B-part">
              <h1>Business</h1>
              <div className="tchange">
                <Link to="#">
                  <span className="Rpspan1">$</span>
                  {7 * teamSize}{" "}
                  <span
                    style={{
                      color: "grey",
                      fontSize: "20px",
                      fontWeight: "600",
                    }}
                  >
                    /month
                  </span>
                </Link>
              </div>

              {data.map((cat) => {
                return (
                  <div className="feature-item" key={uuid()}>
                    <TiTick className="TickIcon" />
                    {cat.title}
                  </div>
                );
              })}
            </div>
            <div className="B-part">
              <h1>Professional</h1>
              <div className="tchange">
                <Link to="#">
                  <span className="Rpspan1">$</span>
                  {5 * teamSize}{" "}
                  <span
                    style={{
                      color: "grey",
                      fontSize: "20px",
                      fontWeight: "600",
                    }}
                  >
                    /month
                  </span>
                </Link>
              </div>
              {data.map((cat, i) => {
                if (i < 9) {
                  return (
                    <div className="feature-item" key={uuid()}>
                      <TiTick className="TickIcon" />
                      {cat.title}
                    </div>
                  );
                } else {
                  return (
                    <div className="feature-2" key={uuid()}>
                      <ImCross className="cros" />
                      {cat.title}
                    </div>
                  );
                }
              })}
            </div>

            <div className="B-part">
              <h1>Free</h1>
              <div className="tchange">
                <Link to="#">
                  <span className="Rpspan1">$</span>
                  {0 * teamSize}
                  <span
                    style={{
                      color: "grey",
                      fontSize: "20px",
                      fontWeight: "600",
                    }}
                  >
                    /month
                  </span>
                </Link>
              </div>
              {data.map((cat, i) => {
                if (i < 3) {
                  return (
                    <div className="feature-item" key={uuid()}>
                      <TiTick className="TickIcon" />
                      {cat.title}
                    </div>
                  );
                } else {
                  return (
                    <div className="feature-2" key={uuid()}>
                      <ImCross className="cros" />
                      {cat.title}
                    </div>
                  );
                }
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="btn2">
        <button className="btn1">Get Started</button>
        <p style={{ marginTop: "30px", marginLeft: "10px" }}>
          Fully Functional 30-Day Trial
        </p>
      </div>
      <br></br>
      <p style={{ textAlign: "center" }}>
        Checkout out{" "}
        <span style={{ color: "#3070f0" }}>detailed plan comparison</span>{" "}
      </p>
      <hr style={{ marginTop: "20px" }}></hr>

      <div className="Q-part">
        <h1
          style={{ textAlign: "center", marginTop: "30px", fontSize: "35px" }}
        >
          How to Buy ?
        </h1>

        <div style={{ width: "50%", margin: "auto" }}>
          <div>
            <div style={{ marginTop: "30px" }}>
              <Link to="#" style={{ color: "#3070f0" }}>
                <span>
                  <button
                    style={{
                      background: "#e7edfc",
                      color: "#2e4497",
                      fontSize: "25px",
                      width: "50px",
                      height: "50px",
                      marginRight: "40px",
                      fontWeight: "600",
                      borderRadius: "12px",
                      border: "none",
                    }}
                  >
                    1
                  </button>
                </span>
                Log in
              </Link>
              <span> </span>to your TMetric account. If you don't have one,
              <span> </span>
              <Link to="#" style={{ color: "#3070f0" }}>
                sign up
              </Link>
              <span> </span>now.
            </div>
          </div>

          <div style={{ marginTop: "30px" }}>
            <button
              style={{
                background: "#e7edfc",
                color: "#2e4497",
                fontSize: "25px",
                width: "50px",
                height: "50px",
                marginRight: "40px",
                fontWeight: "600",
                borderRadius: "12px",
                border: "none",
              }}
            >
              2
            </button>
            <Link to="#">On the main menu, click</Link>
            <span style={{ fontWeight: "700" }}> Workspace</span> and select{" "}
            <span style={{ fontWeight: "750" }}>Subscription. </span>
          </div>

          <div style={{ marginTop: "30px" }}>
            <button
              style={{
                background: "#e7edfc",
                color: "#2e4497",
                fontSize: "25px",
                width: "50px",
                height: "50px",
                marginRight: "40px",
                fontWeight: "600",
                borderRadius: "12px",
                border: "none",
              }}
            >
              3
            </button>
            <Link to="#">On the subscription page click </Link>
            <span style={{ fontWeight: "700" }}>Upgrade Now.</span>
          </div>

          <div style={{ marginTop: "30px" }}>
            <button
              style={{
                background: "#e7edfc",
                color: "#2e4497",
                fontSize: "25px",
                width: "50px",
                height: "50px",
                marginRight: "40px",
                fontWeight: "600",
                borderRadius: "12px",
                border: "none",
              }}
            >
              4
            </button>
            <Link to="#">
              Enter your team size, select subscription plan, and click{" "}
            </Link>
            <span style={{ fontWeight: "700" }}> Proceed To Checkout.</span>
          </div>
          <div style={{ marginTop: "30px" }}>
            <button
              style={{
                background: "#e7edfc",
                color: "#2e4497",
                fontSize: "25px",
                width: "50px",
                height: "50px",
                marginRight: "40px",
                fontWeight: "600",
                borderRadius: "12px",
                border: "none",
              }}
            >
              5
            </button>
            <Link to="#">
              On the shopping cart page enter your Billing Information and
              select Payment Options.
            </Link>
          </div>

          <div style={{ marginTop: "30px" }}>
            <button
              style={{
                background: "#e7edfc",
                color: "#2e4497",
                fontSize: "25px",
                width: "50px",
                height: "50px",
                marginRight: "40px",
                fontWeight: "600",
                borderRadius: "12px",
                border: "none",
              }}
            >
              6
            </button>
            <Link to="#"> Click </Link>
            <span style={{ fontWeight: "700" }}>Continue </span>to place an
            order.
          </div>
        </div>
        <hr style={{ marginTop: "30px" }}></hr>
      </div>

      <div className="Q-part">
        <h1
          style={{ textAlign: "center", marginTop: "30px", fontSize: "35px" }}
        >
          Other Question
        </h1>

        <div style={{ width: "60%", marginLeft: "25%" }}>
          <div>
            <div style={{ marginTop: "30px" }}>
              <Link to="#" style={{ fontWeight: "600" }}>
                <span>
                  <button
                    style={{
                      background: "#fef6e2",
                      color: "#9b6919",
                      fontSize: "20px",
                      width: "50px",
                      height: "50px",
                      marginRight: "40px",
                      fontWeight: "600",
                      borderRadius: "12px",
                      border: "none",
                    }}
                  >
                    Q
                  </button>
                </span>
                Have a large team?
              </Link>
            </div>
          </div>

          <div style={{ marginTop: "30px" }}>
            <button
              style={{
                background: "#e3f8e7",
                color: "#127924",
                fontSize: "20px",
                width: "50px",
                height: "50px",
                marginRight: "40px",
                fontWeight: "600",
                borderRadius: "12px",
                border: "none",
              }}
            >
              A
            </button>
            <Link to="#">
              You can save money with our volume discount for teams of 40+
              users. Learn more on{" "}
            </Link>
            <span style={{ color: "#5ea0f5" }}> FAQ.</span>
          </div>

          <div style={{ marginTop: "30px" }}>
            <Link to="#" style={{ fontWeight: "600" }}>
              <span>
                <button
                  style={{
                    background: "#fef6e2",
                    color: "#9b6919",
                    fontSize: "20px",
                    width: "50px",
                    height: "50px",
                    marginRight: "40px",
                    fontWeight: "600",
                    borderRadius: "12px",
                    border: "none",
                  }}
                >
                  Q
                </button>
              </span>
              Running a non-profit organization?
            </Link>
          </div>

          <div style={{ marginTop: "30px" }}>
            <button
              style={{
                background: "#e3f8e7",
                color: "#127924",
                fontSize: "20px",
                width: "50px",
                height: "50px",
                marginRight: "40px",
                fontWeight: "600",
                borderRadius: "12px",
                border: "none",
              }}
            >
              A
            </button>
            <Link to="#">
              We offer special{" "}
              <span style={{ color: "#5ea0f5" }}>
                pricing options for non-profit
              </span>{" "}
              and education organizations. To apply, please{" "}
              <span style={{ color: "#5ea0f5" }}> contact</span> team
            </Link>
            .
          </div>

          <div style={{ marginTop: "30px" }}>
            <Link to="#" style={{ fontWeight: "600" }}>
              <span>
                <button
                  style={{
                    background: "#fef6e2",
                    color: "#9b6919",
                    fontSize: "20px",
                    width: "50px",
                    height: "50px",
                    marginRight: "40px",
                    fontWeight: "600",
                    borderRadius: "12px",
                    border: "none",
                  }}
                >
                  Q
                </button>
              </span>
              Have other sales questions?
            </Link>
          </div>

          <div style={{ marginTop: "30px" }}>
            <button
              style={{
                background: "#e3f8e7",
                color: "#127924",
                fontSize: "20px",
                width: "50px",
                height: "50px",
                marginRight: "40px",
                fontWeight: "600",
                borderRadius: "12px",
                border: "none",
              }}
            >
              A
            </button>
            <Link to="#">Please contact our sales department at </Link>
            <span style={{ color: "#5ea0f5" }}>sales@tmetric.com</span>
          </div>
        </div>
        <hr style={{ marginTop: "30px" }}></hr>
      </div>

      <div className="l-div">
        <h1 style={{ fontSize: "40px" }}>Make time work for you!</h1>
        <div className="btn2">
          <button className="btn1">Start Free Trial</button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Pricing;
