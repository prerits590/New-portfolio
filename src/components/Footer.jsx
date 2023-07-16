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

export default function Footer() {
  return (
    <Box className="footer1">
      <Container as={Stack} maxW={"6xl"} py={10}>
        <Box className="row">
          <Box className="col-lg-6 d-flex justify-content-center align-items-center flex-column">
            <Box className="glass-bg py-3 px-5 d-flex justify-content-center flex-column">
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
          </Box>
          <Box className="col-lg-6 d-flex justify-content-center">
            <Box
              h={"100%"}
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
                <AiFillPhone  fontSize={"40px"} className="mx-2" />
                <Text
                  fontSize={"20px"}
                 
                  fontWeight={"500"}
                >
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
          </Box>
        </Box>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.700")}
      >
        <Container
          as={Stack}
          maxW={"6xl"}
          py={4}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={{ md: "space-between" }}
          align={{ md: "center" }}
        >
          <Text>© 2023 Prerit Sharma. All rights reserved</Text>
          <Stack direction={"row"} spacing={6}></Stack>
        </Container>
      </Box>
    </Box>
  );
}
