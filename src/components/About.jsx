import {
  Box,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Flex,
  Container,
  Image,
} from "@chakra-ui/react";
import React from "react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { FaPersonChalkboard } from "react-icons/fa6";
import { Fade, Slide } from "react-awesome-reveal";
export default function About() {
  return (
    <section>
      <Box className="px-3 pt-5 my-5 d-flex justify-content-center flex-column" id="About">
        <Box
          className="container px-4 py-4 glass-bg"
          position={"relative"}
          zIndex={"9"}
        >
          <Fade triggerOnce>
            <Box className="d-flex justify-content-center p-4 section-heading-box">
              <Text className="section-heading" fontSize={["50px","70px"]}>
                About
              </Text>
            </Box>
          </Fade>
          <Fade>
            <Box className="pb-3 ">
              <Box className="container mt-2 pt-3 pb-4 ">
                <Box className="row d-flex justify-content-center align-items-center ">
                  <Box className="col-lg-9 col-sm-12">
                    <Text fontSize={["18px","24px"]} textAlign={"center"}>
                    A passionate Full Stack Web  Developer with strong problem-solving abilities, proficient in React Js, Mongo DB, Express Js and Next Js, keen to learn new technologies and frameworks. Looking forward to start career in a reputed firm driven by technology.
                    </Text>
                  </Box>

                  <Box
                    className="col-lg-3 col-sm-12 d-flex justify-content-center pt-4"
                    overflow={"hidden"}
                  >
                    <Box width={"100%"} className="d-flex justify-content-center">
                    <Image
                    w={["50%","50%","80%"]}
                      style={{
                        objectFit: "contain",
                       
                        borderRadius: "20px",
                      }}
                      src={require("./img/pic.png")}
                      
                    />
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Fade>
        </Box>

        <Box className="py-5" position={"relative"} zIndex={"9"}>
          <Box className="container">
            <Box className="row">
              <Box className="col-lg-6 col-sm-12 p-3">
                <Slide direction="left" triggerOnce>
                  <Box h={"100%"} className="glass-bg d-flex justify-content-center align-items-center" minW={"15rem"}  minH="22.3rem">
                    <Flex
                    height={"100%"}
                      align={"center"}
                      justify={"center"}
                      p={["1rem","2rem"]}
                    >
                      <Container>
                        <Accordion
                          allowMultiple
                          width="100%"
                          maxW="lg"
                          rounded="lg"
                        >
                          <AccordionItem >
                            <AccordionButton
                              display="flex"
                              alignItems="center"
                              justifyContent="space-between"
                              p={4}
                              className="accordian-item"
                              _hover={{ bg: "gray.100", color: "black" }}
                            >
                              <Text className="accordian-text" fontSize="md">Where am i from?</Text>
                              <ChevronDownIcon fontSize="24px" />
                            </AccordionButton>
                            <AccordionPanel pb={4}>
                              <Text textAlign={"left"}>
                                I was born and brought up in
                                Haridwar,Uttrakhand.
                              </Text>
                            </AccordionPanel>
                          </AccordionItem>
                          <AccordionItem>
                            <AccordionButton
                              display="flex"
                              alignItems="center"
                              justifyContent="space-between"
                              p={4}
                              _hover={{ bg: "gray.100", color: "black" }}
                              className="accordian-item"
                            >
                              <Text  className="accordian-text" fontSize="md" textAlign={"left"}>
                                What's my favorite programming language?
                              </Text>
                              <ChevronDownIcon fontSize="24px" />
                            </AccordionButton>
                            <AccordionPanel pb={4}>
                              <Text>
                                My favorite programming language is JavaScript.I
                                love how JavaScript allows me to build
                                interactive and dynamic web applications while
                                also having the ability to expand into other
                                areas like server-side development and mobile
                                app development using frameworks like Node.js
                                and React Native.
                              </Text>
                            </AccordionPanel>
                          </AccordionItem>
                          <AccordionItem>
                            <AccordionButton
                              display="flex"
                              alignItems="center"
                              justifyContent="space-between"
                              p={4}
                              _hover={{ bg: "gray.100", color: "black" }}
                              className="accordian-item"
                            >
                              <Text
                                fontSize="md"
                                textAlign={"left"}
                                className="accordian-text"
                              >
                                Where do i see myself in 5 years?
                              </Text>
                              <ChevronDownIcon fontSize="24px" />
                            </AccordionButton>
                            <AccordionPanel pb={4}>
                              <Text>
                                I see myself as a highly skilled and experienced
                                IT Professional at leadership role in a
                                organization. My long term goal still be to
                                continue grow and develop Progessional.
                              </Text>
                            </AccordionPanel>
                          </AccordionItem>
                        </Accordion>
                      </Container>
                    </Flex>
                  </Box>
                </Slide>
              </Box>
              <Box
                position={"relative"}
                zIndex={"9"}
                className="col-lg-6 col-sm-12 p-3"
              >
                <Slide direction="right" triggerOnce>
                  <Box minHeight={"22.3rem"} minW={"15rem"} className="row glass-bg">
                    <Box className="col-lg-6 col-md-12 d-flex justify-content-center align-items-center">
                      <Box className="p-2 ">
                        <FaPersonChalkboard fontSize={"500%"} />
                      </Box>
                      <Box className="p-2">
                        <Text fontSize={"25px"} fontWeight={"700"}>
                          <span
                            className="box-text"
                            style={{
                              background:
                                " linear-gradient(to right, #0cebeb, #20e3b2, #29ffc6)",

                              WebkitBackgroundClip: "text",
                              WebkitTextFillColor: "transparent",
                              fontSize: "25px",
                              fontWeight: "800",
                            }}
                          >
                            500+
                          </span>{" "}
                          Hours of Coding
                        </Text>
                      </Box>
                    </Box>
                    <Box className="col-lg-6 col-md-12 d-flex justify-content-center align-items-center">
                      <Box className="p-2 ">
                        <FaPersonChalkboard fontSize={"500%"} />
                      </Box>
                      <Box className="p-2">
                        <Text fontSize={"25px"} fontWeight={"700"}>
                          <span
                            className="box-text"
                            style={{
                              background:
                                " linear-gradient(to right, #0cebeb, #20e3b2, #29ffc6)",

                              WebkitBackgroundClip: "text",
                              WebkitTextFillColor: "transparent",
                              fontSize: "25px",
                              fontWeight: "800",
                            }}
                          >
                            3+
                          </span>{" "}
                         Projects
                        </Text>
                      </Box>
                    </Box>
                  </Box>
                </Slide>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </section>
  );
}
