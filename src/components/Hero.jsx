import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
  Icon,
  IconButton,
  createIcon,
  IconProps,
  useColorModeValue,
} from "@chakra-ui/react";
import Typewriter from "typewriter-effect";
import ParticlesJ from "./ParticlesJ";

export default function Hero() {
  return (
    <Box position={"relative"} zIndex={"99"}>
      <Container
        maxW={"100vw"}
        overflow={"hidden"}
        className="hero-section pt-2"
      >
        <Stack
          align={"center"}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}
          direction={{ base: "column", md: "row" }}
          p={"2.5rem"}
        >
          <Stack flex={1} spacing={{ base: 5, md: 5 }}>
            <Text className="pt-3" style={{ fontSize: "50px", fontWeight: "800" }}>Hey, I'm</Text>

            <span
              style={{
                fontSize: "50px",
                fontWeight: "850",

                background: "  linear-gradient(to right, #00f260, #0575e6)",

                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {" "}
              Prerit Sharma
            </span>

            <Text style={{ fontSize: "50px", fontWeight: "850" }}>
              <Typewriter
                options={{
                  strings: ["A React Developer.", "An Astrophile.","A Frontend Developer."],
                  autoStart: true,
                  loop: true,
                }}
              />
            </Text>

            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={{ base: "column", sm: "row" }}
              className="button-stack"
            >
              <button class="button">Hover me</button>
              <button class="button">Hover me</button>
            </Stack>
          </Stack>
          <Flex
            flex={1}
            justify={"center"}
            align={"center"}
            position={"relative"}
            w={"full"}
           
          >
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
                src={require("./img/image_MvmaZO9o_1689488463561_raw.jpg")}
                style={{ objectFit: "cover" }}
              />
            </Box>
          </Flex>
        </Stack>
      </Container>
    </Box>
  );
}


