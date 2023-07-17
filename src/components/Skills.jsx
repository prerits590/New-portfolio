import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { Fade, Slide } from "react-awesome-reveal";

export default function Skills() {
  return (
    <section>
      <Box position={"relative"} className="pb-5" zIndex={"99"}>
        <Box className="py-3">
          <Slide triggerOnce>
            <Box className="d-flex justify-content-center section-heading-box">
              <Text className="section-heading" fontSize={"70px"}>
                Skills
              </Text>
            </Box>
          </Slide>
          <Slide direction="right" triggerOnce>
            <Box className="d-flex justify-content-center pt-4 pb-2 section-heading-box">
              <Text className="section-heading" fontSize={"35px"}>
                Languages & Frameworks
              </Text>
            </Box>
          </Slide>
          <Box className="container d-flex justify-content-center pt-3">
            <Fade>
              <Box className="row">
                <Box className="col-lg-3 d-flex justify-content-center  col-sm-6 pt-4">
                  <Box className="card">
                    <Box className="card-content">
                      <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                        alt=""
                      />

                      <Text className="pb-3" color={"white"}>
                        React.js
                      </Text>
                    </Box>
                  </Box>
                </Box>
                <Box className="col-lg-3 d-flex justify-content-center col-sm-6 pt-4">
                  <Box className="card">
                    <Box className="card-content">
                      <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                        alt=""
                      />

                      <Text className="pb-3" color={"white"}>
                        Node.js
                      </Text>
                    </Box>
                  </Box>
                </Box>
                <Box className="col-lg-3 d-flex justify-content-center  col-sm-6 pt-4">
                  <Box className="card">
                    <Box className="card-content">
                      <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg"
                        alt=""
                      />

                      <Text className="pb-3" color={"white"}>
                        Javascript
                      </Text>
                    </Box>
                  </Box>
                </Box>
                <Box className="col-lg-3 d-flex justify-content-center col-sm-6 pt-4">
                  <Box className="card">
                    <Box className="card-content">
                      <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                        alt=""
                      />

                      <Text className="pb-3" color={"white"}>
                        CSS
                      </Text>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Fade>
          </Box>

          <Box className="container d-flex justify-content-center pt-4">
            <Fade triggerOnce delay={"20"}>
              <Box className="row d-flex justify-content-center">
                <Box className="col-lg-3 d-flex justify-content-center col-sm-6 pt-4">
                  <Box className="card">
                    <Box className="card-content">
                      <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                        alt=""
                      />
                      <Text className="pb-3 px-1" color={"white"}>
                        HTML
                      </Text>
                    </Box>
                  </Box>
                </Box>
                <Box className="col-lg-3 d-flex justify-content-center col-sm-6 pt-4">
                  <Box className="card">
                    <Box className="card-content">
                      <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
                        alt=""
                      />
                      <Text className="pb-3 px-1" color={"white"}>
                        Tailwind CSS
                      </Text>
                    </Box>
                  </Box>
                </Box>
                <Box className="col-lg-3 d-flex justify-content-center col-sm-6 pt-4">
                  <Box className="card">
                    <Box className="card-content">
                      <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
                        alt=""
                      />
                      <Text className="pb-3" color={"white"}>
                        Bootstrap
                      </Text>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Fade>
          </Box>
        </Box>
        <Box className="pt-5">
          <Slide triggerOnce>
            <Box className="d-flex justify-content-center py-3 section-heading-box">
              <Text className="section-heading" fontSize={"35px"}>
                Technologies & Libraries
              </Text>
            </Box>
          </Slide>
          <Box className="container d-flex justify-content-center pt-4">
            <Fade triggerOnce>
              <Box className="row d-flex justify-content-center">
                <Box className="col-lg-3 d-flex justify-content-center col-sm-6 pt-3 ">
                  <Box className="card">
                    <Box className="card-content">
                      <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
                        alt=""
                      />

                      <Text className="pb-3" color={"white"}>
                        Git
                      </Text>
                    </Box>
                  </Box>
                </Box>
                <Box className="col-lg-3 d-flex justify-content-center col-sm-6 pt-3">
                  <Box className="card">
                    <Box className="card-content">
                      <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg"
                        alt=""
                      />

                      <Text className="pb-3" color={"white"}>
                        NPM
                      </Text>
                    </Box>
                  </Box>
                </Box>
                <Box className="col-lg-3 d-flex justify-content-center col-sm-6 pt-3">
                  <Box className="card">
                    <Box className="card-content">
                      <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg"
                        alt=""
                      />

                      <Text className="pb-3" color={"white"}>
                        Firebase
                      </Text>
                    </Box>
                  </Box>
                </Box>
                <Box className="col-lg-3 d-flex justify-content-center col-sm-6 pt-3">
                  <Box className="card">
                    <Box className="card-content">
                      <img
                        src="https://avatars.githubusercontent.com/u/54212428?s=280&v=4"
                        alt=""
                      />

                      <Text className="pb-3" color={"white"}>
                        Chakra UI
                      </Text>
                    </Box>
                  </Box>
                </Box>
                <Box className="col-lg-3 d-flex justify-content-center col-sm-6 pt-3">
                  <Box className="card">
                    <Box className="card-content">
                      <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg"
                        alt=""
                      />
                      <Text className="pb-3" color={"white"}>
                        Material UI
                      </Text>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Fade>
          </Box>
        </Box>
      </Box>
    </section>
  );
}
