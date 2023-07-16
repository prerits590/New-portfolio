import { Box, Text } from "@chakra-ui/react";
import React from "react";

export default function Skills() {
  return (
    <Box position={"relative"} zIndex={"99"}>
      <Box className="py-3">
        <Box className="d-flex justify-content-center">
          <Text fontSize={"70px"}>Skills</Text>
        </Box>
        <Box className="d-flex justify-content-center p-2">
          <Text fontSize={"35px"}>Languages & Frameworks</Text>
        </Box>

        <Box className="container d-flex justify-content-center pt-3">
          <Box className="row borde">
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
        </Box>

        <Box className="container d-flex justify-content-center pt-4">
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
        </Box>
      </Box>
      <Box className="pt-5">
        <Box className="d-flex justify-content-center py-3">
          <Text fontSize={"35px"}>Technologies & Libraries</Text>
        </Box>

        <Box className="container d-flex justify-content-center pt-4">
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
        </Box>
      </Box>
    </Box>
  );
}
