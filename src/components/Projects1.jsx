import { Box, Button, Text, background } from "@chakra-ui/react";
import React from "react";

export default function Projects() {
  return (
    <Box className="pt-5">
       <Box className="d-flex justify-content-center p-4">
          <Text fontSize={"70px"}>Projects</Text>
        </Box>
      <Box className="container p-5">
        <Box className="row">
          <Box className="col-lg-5 col-sm-12 border p-2">
            <Box>
              <Box>
                <Text className="box-text" fontSize={"30px"} fontWeight={"700"}>
                  Lorem ips
                </Text>
              </Box>
              <Box className="border">Tech stack</Box>
              <Box>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam,
                dolorum.
              </Box>
              <Box>
                <Button>Live</Button>
              </Box>
            </Box>
          </Box>
          <Box className="col-lg-7 col-sm-12">
            <Box>
              <img
                src="https://www.danielcranney.com/_next/image?url=%2Fprojects%2Fsmylo.png&w=1920&q=75"
                alt=""
              />
            </Box>
          </Box>
        </Box>
      </Box>
      <Box className="container border p-3">
        <Box className="row">
          <Box className="col-lg-7 col-sm-12">
            <Box>
              <img
                src="https://www.danielcranney.com/_next/image?url=%2Fprojects%2Fsmylo.png&w=1920&q=75"
                alt=""
              />
            </Box>
          </Box>
          <Box className="col-lg-5 col-sm-12 border p-2">
            <Box>
              <Box>
                <Text className="box-text" fontSize={"30px"} fontWeight={"700"}>
                  Lorem ips
                </Text>
              </Box>
              <Box className="border">Tech stack</Box>
              <Box>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam,
                dolorum.
              </Box>
              <Box>
                <Button>Live</Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box className="container border p-3">
        <Box className="row">
          <Box className="col-lg-5 col-sm-12 border p-2">
            <Box>
              <Box>
                <Text className="box-text" fontSize={"30px"} fontWeight={"700"}>
                  Lorem ips
                </Text>
              </Box>
              <Box className="border">Tech stack</Box>
              <Box>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam,
                dolorum.
              </Box>
              <Box>
                <Button>Live</Button>
              </Box>
            </Box>
          </Box>
          <Box className="col-lg-7 col-sm-12">
            <Box>
              <img
                src="https://www.danielcranney.com/_next/image?url=%2Fprojects%2Fsmylo.png&w=1920&q=75"
                alt=""
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
