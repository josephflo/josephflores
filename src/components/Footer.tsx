import { IconButton, Image, Link, Stack, Text } from "@chakra-ui/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import logo from "../assets/logo.svg";
function Footer() {
  return (
    <Stack
      w={"100%"}
      h={"fit-content"}
      bg={"gray.100"}
      p={{ base: "1rem 3rem", lg: "2rem 7rem 2rem 7rem" }}
      alignItems={"center"}
      justifyContent={"space-between"}
      flexDir={{ base: "column", md: "row" }}
    >
      <Stack alignItems={"center"}>
        <Image
          alt={"My brand logo"}
          src={logo}
          w={{ base: "10vw", md: "6vw", lg: "4.5vw" }}
          h={"auto"}
        />
        <Text>JOSEPH FLORES ALL RIGHTS RESERVED © 2023 </Text>
      </Stack>
      <Stack flexDir={"row"}>
        <Link
          href="https://www.linkedin.com/in/josephflodev/"
          target={"_blank"}
          mt={"0 !important"}
          _hover={{ textDecor: "none" }}
        >
          <IconButton
            icon={<FaLinkedin />}
            p={"1rem"}
            fontSize={"2rem"}
            aria-label="gmail"
            borderRadius={"full"}
            bg={"transparent"}
            color={"black"}
            _hover={{ bg: "transparent" }}
            _focus={{ outline: "none" }}
          />
        </Link>
        <Link
          href="https://github.com/josephflo"
          target={"_blank"}
          mt={"0 !important"}
          _hover={{ textDecor: "none" }}
        >
          <IconButton
            icon={<FaGithub />}
            p={"1rem"}
            fontSize={"2rem"}
            aria-label="gmail"
            borderRadius={"full"}
            bg={"transparent"}
            color={"black"}
            _hover={{ bg: "transparent" }}
            _focus={{ outline: "none" }}
          />
        </Link>
        <Link
          href="mailto:josephflo.dev@gmail.com"
          target={"_blank"}
          mt={"0 !important"}
          _hover={{ textDecor: "none" }}
        >
          <IconButton
            icon={<SiGmail />}
            p={"1rem"}
            fontSize={"2rem"}
            aria-label="gmail"
            borderRadius={"full"}
            bg={"transparent"}
            color={"black"}
            _hover={{ bg: "transparent" }}
            _focus={{ outline: "none" }}
          />
        </Link>
      </Stack>
    </Stack>
  );
}

export default Footer;
