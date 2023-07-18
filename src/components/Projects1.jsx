import { Box, Button, Icon, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { Fade, } from "react-awesome-reveal";
import { AiFillGithub } from "react-icons/ai";
import { BiLinkExternal } from "react-icons/bi";
export default function Projects() {
  return (
    <section>
      <Box className="container">
        <Box
          className="mt-5 glass-bg"
          position={"relative"}
          zIndex={"99"}
          id="Projects"
        >
          <Fade triggerOnce>
            <Box className="d-flex pt-5 justify-content-center p-4 section-heading-box">
              <Text className="section-heading" fontSize={"70px"}>
                Projects
              </Text>
            </Box>
          </Fade>
          <Box className="container px-5 py-3">
            <Box className="row">
              <Box padding={"0px"} className=" col-lg-7  col-sm-12">
                <Box>
                  <Image
                    h={"100%"}
                    objectFit={"cover"}
                    src={require("./img/airbnb.png")}
                  />
                </Box>
              </Box>
              <Box padding={"0"} className="col-lg-5 col-sm-12">
                <Box
                  display={"flex"}
                  flexDirection={"column"}
                  border={"1px solid gray"}
                  justifyContent={"space-evenly"}
                  h={"100%"}
                  className="p-2 align-items-evenly"
                >
                  <Box className="">
                    <Text
                      position={"relative"}
                      _after={{
                        content: '""',
                        position: "absolute",
                        width: ["10%", "20%", "30%"],
                        height: ["2px", "5px", "8px"],
                        left: "0",
                        bottom: ["-3px", "-10px"],
                        background:
                          " linear-gradient(to right, #0cebeb, #20e3b2, #29ffc6)",
                      }}
                      className="box-te"
                      fontSize={["10px", "15px", "30px"]}
                      fontWeight={"700"}
                    >
                      Airbnb Clone
                    </Text>
                  </Box>
                  <Box className=" icon-boxx d-flex align-items-center">
                    <Box className=" icon-box-container">
                      <Box className="icon-box">
                        <img
                          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                          alt=""
                        />
                      </Box>
                      <Box className="icon-box">
                        <img
                          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg"
                          alt=""
                        />
                      </Box>
                      <Box className="icon-box">
                        <img
                          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                          alt=""
                        />
                      </Box>

                      <Box className="icon-box">
                        <img
                          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                          alt=""
                        />
                      </Box>
                      <Box className="icon-box">
                        <img
                          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                          alt=""
                        />
                      </Box>
                      <Box className="icon-box">
                        <img
                          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
                          alt=""
                        />
                      </Box>
                      <Box className="icon-box">
                        <img
                          src="https://avatars.githubusercontent.com/u/54212428?s=280&v=4"
                          alt=""
                        />
                      </Box>
                    </Box>
                  </Box>

                  <Box className="">
                    <Text fontSize={["10px", "15px"]}>
                      A solo project built on React with UI similar to origin
                      website with custom Sign up/Log in, Admin panel to
                      add/remove property using Firebase.
                    </Text>
                  </Box>
                  <Box className="pt-1 d-flex">
                    <Box
                      w={"fit-content"}
                      h={"fit-content"}
                      marginRight={"10px"}
                    >
                      <Button
                        as={Link}
                        to={"https://github.com/prerits590/airbnb-clone.git"}
                        className="py-1"
                        h={"fit-content"}
                      >
                        <Icon fontSize={["1rem", "1.5rem"]} as={AiFillGithub} />
                      </Button>
                    </Box>
                    <Box w={"fit-content"} className="">
                      <Button
                        as={Link}
                        to={"https://airbnb-clone-one-bay.vercel.app/"}
                        className="py-1"
                        h={"fit-content"}
                      >
                        <Icon
                          fontSize={["1rem", "1.5rem"]}
                          as={BiLinkExternal}
                        />
                      </Button>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box className="container px-5 py-3">
            <Box className="row">
              <Box padding={"0px"} className=" col-lg-7  col-sm-12">
                <Box>
                  <Image
                    h={"100%"}
                    objectFit={"cover"}
                    src={require("./img/fresh-harvests.png")}
                  />
                </Box>
              </Box>
              <Box padding={"0"} className="col-lg-5 col-sm-12">
                <Box
                  display={"flex"}
                  flexDirection={"column"}
                  border={"1px solid gray"}
                  justifyContent={"space-evenly"}
                  h={"100%"}
                  className="p-2 align-items-evenly"
                >
                  <Box className="">
                    <Text
                      position={"relative"}
                      _after={{
                        content: '""',
                        position: "absolute",
                        width: ["10%", "20%", "30%"],
                        height: ["2px", "5px", "8px"],
                        left: "0",
                        bottom: ["-3px", "-10px"],
                        background:
                          " linear-gradient(to right, #0cebeb, #20e3b2, #29ffc6)",
                      }}
                      className="box-te"
                      fontSize={["10px", "15px", "30px"]}
                      fontWeight={"700"}
                    >
                      Fresh Harvests
                    </Text>
                  </Box>
                  <Box className=" icon-boxx d-flex align-items-center">
                    <Box className=" icon-box-container">
                      <Box className="icon-box">
                        <img
                          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                          alt=""
                        />
                      </Box>

                      <Box className="icon-box">
                        <img
                          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                          alt=""
                        />
                      </Box>
                      <Box className="icon-box">
                        <img
                          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                          alt=""
                        />
                      </Box>
                      <Box className="icon-box">
                        <img
                          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
                          alt=""
                        />
                      </Box>
                    </Box>
                  </Box>

                  <Box className="">
                    <Text fontSize={["10px", "15px"]}>
                      A solo project built using Bootstrap with add to cart
                      functionality using JSON Server.
                    </Text>
                  </Box>
                  <Box className="pt-1 d-flex">
                    <Box
                      w={"fit-content"}
                      h={"fit-content"}
                      marginRight={"10px"}
                    >
                      <Button
                        as={Link}
                        to={"https://github.com/prerits590/fresh-harvests.git"}
                        className="py-1"
                        h={"fit-content"}
                      >
                        <Icon fontSize={["1rem", "1.5rem"]} as={AiFillGithub} />
                      </Button>
                    </Box>
                    <Box w={"fit-content"} className="">
                      <Button
                        as={Link}
                        to={"https://frolicking-meerkat-f3e8f5.netlify.app/"}
                        className="py-1"
                        h={"fit-content"}
                      >
                        <Icon
                          fontSize={["1rem", "1.5rem"]}
                          as={BiLinkExternal}
                        />
                      </Button>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box className="container px-5 py-3">
            <Box className="row">
              <Box padding={"0px"} className=" col-lg-7  col-sm-12">
                <Box>
                  <Image
                    h={"100%"}
                    objectFit={"cover"}
                    src={require("./img/food-fusion.png")}
                  />
                </Box>
              </Box>
              <Box padding={"0"} className="col-lg-5 col-sm-12">
                <Box
                  display={"flex"}
                  flexDirection={"column"}
                  border={"1px solid gray"}
                  justifyContent={"space-evenly"}
                  h={"100%"}
                  className="p-2 align-items-evenly"
                >
                  <Box className="">
                    <Text
                      position={"relative"}
                      _after={{
                        content: '""',
                        position: "absolute",
                        width: ["10%", "20%", "30%"],
                        height: ["2px", "5px", "8px"],
                        left: "0",
                        bottom: ["-3px", "-10px"],
                        background:
                          " linear-gradient(to right, #0cebeb, #20e3b2, #29ffc6)",
                      }}
                      className="box-te"
                      fontSize={["10px", "15px", "30px"]}
                      fontWeight={"700"}
                    >
                      Food Fusion
                    </Text>
                  </Box>
                  <Box className=" icon-boxx d-flex align-items-center">
                    <Box className=" icon-box-container">
                      <Box className="icon-box">
                        <img
                          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                          alt=""
                        />
                      </Box>
                      <Box className="icon-box">
                        <img
                          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                          alt=""
                        />
                      </Box>
                      <Box className="icon-box">
                        <img
                          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                          alt=""
                        />
                      </Box>
                      <Box className="icon-box">
                        <img
                          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
                          alt=""
                        />
                      </Box>
                    </Box>
                  </Box>

                  <Box className="">
                    <Text fontSize={["10px", "15px"]}>
                      A solo project built using Bootstrap.
                    </Text>
                  </Box>
                  <Box className="pt-1 d-flex">
                    <Box
                      w={"fit-content"}
                      h={"fit-content"}
                      marginRight={"10px"}
                    >
                      <Button
                        as={Link}
                        to={"https://github.com/prerits590/food-fusion.git"}
                        className="py-1"
                        h={"fit-content"}
                      >
                        <Icon fontSize={["1rem", "1.5rem"]} as={AiFillGithub} />
                      </Button>
                    </Box>
                    <Box w={"fit-content"} className="">
                      <Button
                        as={Link}
                        to={
                          "https://64725ee06b5fe23834931b1b--exquisite-khapse-16af8c.netlify.app/"
                        }
                        className="py-1"
                        h={"fit-content"}
                      >
                        <Icon
                          fontSize={["1rem", "1.5rem"]}
                          as={BiLinkExternal}
                        />
                      </Button>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </section>
  );
}
