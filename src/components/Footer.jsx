import { ReactNode } from "react";
import {
  Box,
  Container,
  Stack,
  SimpleGrid,
  Text,
  Link,
  VisuallyHidden,
  chakra,
  useColorModeValue,
} from "@chakra-ui/react";
import {
  AiFillGift,
  AiFillGithub,
  AiFillMail,
  AiFillPhone,
} from "react-icons/ai";
import { Fade, Slide } from "react-awesome-reveal";
export default function Footer() {
  return (
    <section>
      <Box className="footer1" id="Contact">
        <Container as={Stack} maxW={"6xl"} py={10}>
          <Box className="row">
            <Box className="col-lg-6 d-flex justify-content-center align-items-center flex-column">
              <Slide triggerOnce>
                <Box
                  height={"25rem"}
                  className="glass-bg py-3 px-5 d-flex justify-content-center flex-column"
                >
                  <Box className="d-flex justify-content-center  " w={"100%"}>
                    <Text fontSize={"42px"} fontWeight={"600"}>
                      Get in Touch
                    </Text>
                  </Box>
                  <Box className="card1 p-0 d-flex">
                    <form className="form">
                      <Box className="group">
                        <input placeholder="Name" type="text" required="" />
                      </Box>
                      <Box className="group">
                        <input
                          placeholder="Email"
                          type="email"
                          id="email"
                          name="email"
                          required=""
                        />
                      </Box>
                      <Box className="group">
                        <textarea
                          id="comment"
                          name="comment"
                          rows="3"
                          required=""
                          placeholder="Message..."
                        ></textarea>
                      </Box>
                      <Box className="justify-content-center d-flex pb-2">
                        <button className="button1" type="submit">
                          Submit
                        </button>
                      </Box>
                    </form>
                  </Box>
                </Box>
              </Slide>
            </Box>
            <Box className="col-lg-6 d-flex justify-content-center py-5">
              <Slide triggerOnce direction="right">
                <Box
                  h={"25rem"}
                  w={"fit-content"}
                  className="border glass-bg p-5 d-flex justify-content-evenly align-items-start flex-column"
                >
                  <Box className="d-flex align-items-center">
                    <AiFillGithub fontSize={"40px"} className="mx-2" />
                    <Text fontSize={"20px"} fontWeight={"500"}>
                      prerits590
                    </Text>
                  </Box>
                  <Box className="d-flex align-items-center">
                    <AiFillPhone fontSize={"40px"} className="mx-2" />
                    <Text fontSize={"20px"} fontWeight={"500"}>
                      8979384648
                    </Text>
                  </Box>
                  <Box className="d-flex align-items-center">
                    <AiFillMail fontSize={"40px"} className="mx-2" />
                    <Text fontSize={"20px"} fontWeight={"500"}>
                      prerits590@gmail.com
                    </Text>
                  </Box>
                </Box>
              </Slide>
            </Box>
          </Box>
        </Container>

        <Box
          borderTopWidth={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          className="p-4"
        >
          <Container className="d-flex justify-content-center">
            <Text>© 2023 Prerit Sharma. All rights reserved</Text>
          </Container>
        </Box>
      </Box>
    </section>
  );
}
