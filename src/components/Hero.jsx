import { Container, Stack, Flex, Box, Text, Image } from "@chakra-ui/react";
import Typewriter from "typewriter-effect";
import { Slide } from "react-awesome-reveal";
import { Link as ScrollLink } from "react-scroll";

export default function Hero() {
  return (
    <section>
      <Box position={"relative"} zIndex={"99"} id="Home">
        <Container
          maxW={"100vw"}
          minHeight={"100vh"}
          overflow={"hidden"}
          className="hero-section pb-5"
        >
          <Stack
            align={"center"}
            spacing={{ base: 8, md: 10 }}
            py={{ base: 20, md: 28 }}
            direction={{ base: "column", md: "row" }}
            p={"2.5rem"}
            height="100%"
          >
            <Stack flex={1} spacing={{ base: 5, md: 5 }}>
              <Slide direction="left" triggerOnce>
                <Box className="">
                  <Text
                    className="pt-3"
                    fontSize={["40px", "40px", "45px"]}
                    fontWeight={"800"}
                    // style={{ fontSize: "50px", fontWeight: "800" }}
                  >
                    Hey, I'm
                  </Text>

                  <span
                    style={{
                      fontSize: "45px",
                      fontWeight: "850",

                      background:
                        "  linear-gradient(to right, #00f260, #0575e6)",

                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    {" "}
                    Prerit Sharma
                  </span>

                  <Text fontSize={["40px", "40px", "45px"]} fontWeight={"800"}>
                    <Typewriter
                      options={{
                        strings: [
                          "A React Developer.",
                          "An Astrophile.",
                          "A Frontend Developer.",
                        ],
                        autoStart: true,
                        loop: true,
                      }}
                    />
                  </Text>

                  <Stack
                    spacing={{ base: 4, sm: 6 }}
                    direction={{ base: "column", sm: "row" }}
                    className="button-stack py-4"
                  >
                    <button className="button">Resume</button>

                    <ScrollLink
                      to="Contact"
                      smooth={true}
                      duration={600}
                      className="button1 contact-me"
                      delay={100}
                    >
                      Contact Me
                    </ScrollLink>
                  </Stack>
                </Box>
              </Slide>
            </Stack>
            <Flex
              flex={1}
              justify={"center"}
              align={"center"}
              position={"relative"}
              w={"full"}
            >
              <Slide direction="right" triggerOnce>
                <Box className="d-flex justify-content-center">
                  <Box
                    position={"relative"}
                    height={"60%"}
                    width={"80%"}
                    overflow={"hidden"}
                    marginLeft={"1rem"}
                    borderRadius={"20px"}
                    className="hero-img-box"
                  >
                    <Image
                      alt={"Hero Image"}
                      fit={"cover"}
                      align={"center"}
                      w={"100%"}
                      h={"100%"}
                      src={require("./img/hero-img.jpg")}
                      style={{ objectFit: "cover" }}
                    />
                  </Box>
                </Box>
              </Slide>
            </Flex>
          </Stack>
        </Container>
      </Box>
    </section>
  );
}
