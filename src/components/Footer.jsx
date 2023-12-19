import { Box, Container, Stack, Text } from "@chakra-ui/react";
import { AiFillGithub, AiFillMail, AiFillPhone } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { Slide } from "react-awesome-reveal";
export default function Footer() {
  return (
    <section>
      <Box className="footer1" id="Contact">
        <Container as={Stack} maxW={"6xl"} py={10}>
          <Box className="row">
            <Box className="col-lg-6 d-flex justify-content-center align-items-center flex-column">
              <Slide triggerOnce>
                <Box
                  minH={"25rem"}
                  minW={"20rem"}
                  className="glass-bg py-3 px-5 d-flex justify-content-center flex-column"
                >
                  <Box className="d-flex justify-content-center  " w={"100%"}>
                    <Text fontSize={["30px", "40px"]} fontWeight={"600"}>
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
                  minH={"25rem"}
                  minW={"20rem"}
                  w={"fit-content"}
                  className="container glass-bg py-3 px-1 d-flex justify-content-evenly align-items-start flex-column"
                >
                  <Box className="d-flex align-items-center px-2">
                    <AiFillGithub fontSize={"40px"} className="mx-2" />
                    <Text fontSize={"20px"} fontWeight={"500"}>
                      prerits590
                    </Text>
                  </Box>
                  <Box className="d-flex align-items-center px-2">
                    <AiFillPhone fontSize={"40px"} className="mx-2" />
                    <Text fontSize={"20px"} fontWeight={"500"}>
                      8979384648
                    </Text>
                  </Box>
                  <Box className="d-flex align-items-center px-2">
                    <AiFillMail fontSize={"40px"} className="mx-2" />
                    <Text fontSize={"20px"} fontWeight={"500"}>
                      prerits590@gmail.com
                    </Text>
                  </Box>
                  <Box className="d-flex align-items-center px-2">
                    <FaLinkedin fontSize={"40px"} className="mx-2" />
                    <Text fontSize={"20px"} fontWeight={"500"}>
                      prerits590
                    </Text>
                  </Box>
                </Box>
              </Slide>
            </Box>
          </Box>
        </Container>

        <Box borderTop={"1px solid gray"} className="p-3">
          <Container className="d-flex justify-content-center align-items-center">
            <Text>© 2023 Prerit Sharma. All rights reserved</Text>
          </Container>
        </Box>
      </Box>
    </section>
  );
}
