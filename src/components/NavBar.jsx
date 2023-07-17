import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  Stack,
  Image,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { Link, animateScroll as scroll } from "react-scroll";
import { NavLink } from "react-router-dom";

export default function Simple() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box px={4} className="navbar">
        <Flex h={16} alignItems={"center"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack
            spacing={8}
            className="d-flex justify-content-evenly"
            alignItems={"center"}
          >
            <Box w={"8%"}>
              <Image
                alt={"Logo Image"}
                fit={"cover"}
                align={"center"}
                w={"100%"}
                h={"100%"}
                src={require("./img/logo.png")}
                style={{ objectFit: "cover" }}
              />
            </Box>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              <NavLink>
                <Link to="Home" smooth={true} duration={500}>
                  Home
                </Link>
              </NavLink>
              <NavLink>
                <Link to="About" smooth={true} duration={500}>
                  About
                </Link>
              </NavLink>
              <NavLink>
                <Link to="Projects" smooth={true} duration={500}>
                  Projects
                </Link>
              </NavLink>
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
            <Box>
              <Box className="p-3">
                <button className="button1">Resume</button>
              </Box>
            </Box>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              <NavLink>
                <Link to="Home" smooth={true} duration={500}>
                  Home
                </Link>
              </NavLink>
              <NavLink>
                <Link to="About" smooth={true} duration={500}>
                  About
                </Link>
              </NavLink>
              <NavLink>
                <Link to="Projects" smooth={true} duration={500}>
                  Projects
                </Link>
              </NavLink>
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
