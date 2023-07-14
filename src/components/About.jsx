import {
  Box,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Flex,
  useColorModeValue,
  Container,
} from "@chakra-ui/react";
import React from "react";
import { ChevronDownIcon } from "@chakra-ui/icons";
export default function About() {
  return (
    <Box>
      <Box>
        <Box className="d-flex justify-content-center">
          <Text fontSize={"70px"}>About</Text>
        </Box>
        <Box>
          <Box className="container">
            <Box className="row d-flex justify-content-center align-items-center">
              <Box className="col-lg-9 col-sm-1 border">
                <Text fontSize={"24px"} textAlign={"center"}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                  qui nemo corporis sapiente adipisci expedita maiores dolorum
                  tempora aliquid rerum corrupti distinctio debitis veritatis
                  laudantium, velit, recusandae quidem aut possimus. Ipsum aut
                  quis distinctio magni eveniet rerum quam id consequuntur,
                  provident earum atque, accusamus qunt.
                </Text>
              </Box>
              <Box className="col-lg-3 col-sm-1 border d-flex justify-content-center">
                <img
                  src="data:image/jpeg;base64,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"
                  alt=""
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box className="border">
        <Box className="container">
          <Box className="row">
            <Box className="col-lg-6 col-sm-1 border" >
              <Flex
                minH={"100vh"}
                align={"center"}
                justify={"center"}
                bg={useColorModeValue("gray.50", "gray.800")}
              >
                <Container>
                  <Accordion
                    allowMultiple
                    width="100%"
                    maxW="lg"
                   
                    rounded="lg"
                  >
                    <AccordionItem>
                      <AccordionButton
                        display="flex"
                        alignItems="center"
                        justifyContent="space-between"
                        p={4}
                        _hover={{ bg: "gray.100", color:"#212121" }}
                      >
                        <Text fontSize="md">What is Chakra UI?</Text>
                        <ChevronDownIcon fontSize="24px" />
                      </AccordionButton>
                      <AccordionPanel pb={4}>
                        <Text>
                          Chakra UI is a simple and modular component library
                          that gives developers the building blocks they need to
                          create web applications.
                        </Text>
                      </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                      <AccordionButton
                        display="flex"
                        alignItems="center"
                        justifyContent="space-between"
                        p={4}
                        _hover={{ bg: "gray.100", color:"#212121" }}
                      >
                        <Text fontSize="md">What advantages to use?</Text>
                        <ChevronDownIcon fontSize="24px" />
                      </AccordionButton>
                      <AccordionPanel pb={4}>
                        <Text>
                          Chakra UI offers a variety of advantages including
                          ease of use, accessibility, and customization options.
                          It also provides a comprehensive set of UI components
                          and is fully compatible with React.
                        </Text>
                      </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                      <AccordionButton
                        display="flex"
                        alignItems="center"
                        justifyContent="space-between"
                        p={4}
                        _hover={{ bg: "gray.100" , color:"#212121"}}
                      >
                        <Text fontSize="md">How to start using Chakra UI?</Text>
                        <ChevronDownIcon fontSize="24px" />
                      </AccordionButton>
                      <AccordionPanel pb={4}>
                        <Text>
                          To get started with Chakra UI, you can install it via
                          npm or yarn, and then import the components you need
                          in your project. The Chakra UI documentation is also a
                          great resource for getting started and learning more
                          about the library.
                        </Text>
                      </AccordionPanel>
                    </AccordionItem>
                  </Accordion>
                </Container>
              </Flex>
            </Box>
            <box className="col-lg-6 col-sm-1"></box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
