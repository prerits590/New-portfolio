import { Box, Button, Image, Text } from "@chakra-ui/react";
import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import { Fade, Slide } from "react-awesome-reveal";
export default function Projects() {
  return (
    <section>
      <Box
        className="mt-5 px-4 container glass-bg"
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
        <Box className="container p-5">
          <Box className="row">
            <Box padding={"0"} className="col-lg-7 col-sm-12 ">
              <Slide triggerOnce>
                <Box height={"20rem"} className="project-img overflow-hidden">
                  <Image
                    w={"100%"}
                    h={"100%"}
                    src={require("./img/airbnb.png")}
                  />
                </Box>
              </Slide>
            </Box>
            <Box padding={"0"} className="col-lg-5 col-sm-12">
              <Slide triggerOnce direction="right">
                <Box
                  display={"flex"}
                  flexDirection={"column"}
                  justifyContent={"space-evenly"}
                  w={"100%"}
                  h={"20rem"}
                  border={"1px solid white"}
                  className="p-3 glass-bg1"
                >
                  <Box>
                    <span
                      className="box-text"
                      style={{
                        background:
                          " linear-gradient(to right, #0cebeb, #20e3b2, #29ffc6)",

                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        fontSize: "20px",
                        fontWeight: "700",
                      }}
                    >
                      Featured Project
                    </span>
                  </Box>
                  <Box>
                    <Text
                      className="box-text1"
                      fontSize={"30px"}
                      fontWeight={"700"}
                    >
                      Airbnb Clone
                    </Text>
                  </Box>
                  <Box className=" icon-boxx">
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
                    <Box className="">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Totam, dolorum.
                    </Box>
                    <Box className="py-3">
                      <Button>
                        Live <FiArrowUpRight className="mx-1" />
                      </Button>
                    </Box>
                  </Box>
                </Box>
              </Slide>
            </Box>
          </Box>
        </Box>
        <Box className="container p-5">
          <Box className="row">
            <Box padding={"0"} className="col-lg-7 col-sm-12 ">
              <Slide triggerOnce>
                <Box height={"20rem"} className="project-img overflow-hidden">
                  <Image
                    w={"100%"}
                    h={"100%"}
                    src={require("./img/fresh-harvests.png")}
                  />
                </Box>
              </Slide>
            </Box>
            <Box padding={"0"} className="col-lg-5 col-sm-12">
              <Slide triggerOnce direction="right">
                <Box
                  display={"flex"}
                  flexDirection={"column"}
                  justifyContent={"space-evenly"}
                  w={"100%"}
                  h={"20rem"}
                  border={"1px solid white"}
                  className="p-3 glass-bg1"
                >
                  <Box>
                    <span
                      className="box-text"
                      style={{
                        background:
                          " linear-gradient(to right, #0cebeb, #20e3b2, #29ffc6)",

                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        fontSize: "20px",
                        fontWeight: "700",
                      }}
                    >
                      Featured Project
                    </span>
                  </Box>
                  <Box>
                    <Text
                      className="box-text1"
                      fontSize={"30px"}
                      fontWeight={"700"}
                    >
                      Fresh Harvests
                    </Text>
                  </Box>
                  <Box className=" icon-boxx">
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
                    <Box className="">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Totam, dolorum.
                    </Box>
                    <Box className="py-3">
                      <Button
                        as={Link}
                        to={"https://frolicking-meerkat-f3e8f5.netlify.app/"}
                        className="live-btn"
                      >
                        Live <FiArrowUpRight className="mx-1" />
                      </Button>
                    </Box>
                  </Box>
                </Box>
              </Slide>
            </Box>
          </Box>
        </Box>
        <Box className="container p-5">
          <Box className="row">
            <Box padding={"0"} className="col-lg-7 col-sm-12 ">
              <Slide triggerOnce>
                <Box height={"20rem"} className="project-img overflow-hidden">
                  <Image
                    w={"100%"}
                    h={"100%"}
                    src={require("./img/food-fusion.png")}
                  />
                </Box>
              </Slide>
            </Box>
            <Box padding={"0"} className="col-lg-5 col-sm-12">
              <Slide triggerOnce direction="right">
                <Box
                  display={"flex"}
                  flexDirection={"column"}
                  justifyContent={"space-evenly"}
                  w={"100%"}
                  h={"20rem"}
                  border={"1px solid white"}
                  className="p-3 glass-bg1"
                >
                  <Box>
                    <span
                      className="box-text"
                      style={{
                        background:
                          " linear-gradient(to right, #0cebeb, #20e3b2, #29ffc6)",

                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        fontSize: "20px",
                        fontWeight: "700",
                      }}
                    >
                      Featured Project
                    </span>
                  </Box>
                  <Box>
                    <Text
                      className="box-text1"
                      fontSize={"30px"}
                      fontWeight={"700"}
                    >
                      Food Fusion
                    </Text>
                  </Box>
                  <Box className=" icon-boxx">
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
                    <Box className="">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Totam, dolorum.
                    </Box>
                    <Box className="py-3">
                      <Button
                        as={Link}
                        to={
                          "https://64725ee06b5fe23834931b1b--exquisite-khapse-16af8c.netlify.app/"
                        }
                        className="live-btn"
                      >
                        Live <FiArrowUpRight className="mx-1" />
                      </Button>
                    </Box>
                  </Box>
                </Box>
              </Slide>
            </Box>
          </Box>
        </Box>
      </Box>
    </section>
  );
}
