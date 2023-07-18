import { Box, Icon, Text, styled } from "@chakra-ui/react";
import React from "react";
import {
  BiSolidQuoteAltLeft,
  BiSolidQuoteAltRight,
} from "react-icons/bi";
import { AttentionSeeker, Fade } from "react-awesome-reveal";

export default function Quote() {
  return (
    <section>
      <Fade>
        <Box
          position={"relative"}
          zIndex={"99"}
          className="container align-items-center pb-5 px-3 d-flex justify-content-center"
        >
          <Box
            width={["80%", "70%", "50%"]}
            py={["1rem", "3rem"]}
            className="glass-bg "
          >
            <Box className="container">
              <Box className="">
                <Box className="">
                  <Icon
                    fontSize={["2rem", "3rem"]}
                    color={"#01CAFE"}
                    as={BiSolidQuoteAltLeft}
                  />
                </Box>
                <AttentionSeeker effect="pulse">
                  <Box className="py-1" px={["1rem", "2rem"]}>
                    <Text
                      style={{
                        background:
                          " linear-gradient(to right, #00c9ff, #92fe9d)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                      fontSize={["20px", "30px", "40px"]}
                      fontWeight={"700"}
                    >
                      From Stars to Pixels, a Journey of Exploration...
                    </Text>
                  </Box>
                  <Box
                    px={["1rem", "2rem"]}
                    className="d-flex justify-content-end"
                  >
                    <Text className="unknown">-Unknown</Text>
                  </Box>
                </AttentionSeeker>
                <Box className="d-flex justify-content-end">
                  <Icon
                    fontSize={["2rem", "3rem"]}
                    color={"#9AFDA9"}
                    as={BiSolidQuoteAltRight}
                  />
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Fade>
    </section>
  );
}
