import { Box, Button, Image, Text } from "@chakra-ui/react";
import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function Projects() {
  return (
    <Box className="pt-5" position={"relative"} zIndex={"99"}>
      <Box className="d-flex justify-content-center p-4">
        <Text fontSize={"70px"}>Projects</Text>
      </Box>
      <Box className="container p-5">
        <Box className="row">
          <Box padding={"0"} className="col-lg-7 col-sm-12 ">
            <Box>
              <Image src={require("./img/airbnb.png")} />
            </Box>
          </Box>
          <Box border={"1px solid white"} className="col-lg-5 col-sm-12">
            <Box
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"space-evenly"}
              w={"100%"}
              h={"100%"}
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
          </Box>
        </Box>
      </Box>
      <Box className="container p-5">
        <Box className="row">
          <Box padding={"0"} className="col-lg-7 col-sm-12 ">
            <Box>
              <Image src={require("./img/fresh-harvests.png")} />
            </Box>
          </Box>
          <Box border={"1px solid white"} className="col-lg-5 col-sm-12">
            <Box
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"space-evenly"}
              w={"100%"}
              h={"100%"}
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
          </Box>
        </Box>
      </Box>
      <Box className="container p-5">
        <Box className="row">
          <Box padding={"0"} className="col-lg-7 col-sm-12 ">
            <Box>
              <Image src={require("./img/food-fusion.png")} />
            </Box>
          </Box>
          <Box border={"1px solid white"} className="col-lg-5 col-sm-12">
            <Box
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"space-evenly"}
              w={"100%"}
              h={"100%"}
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
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
