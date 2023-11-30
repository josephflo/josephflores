import { IconButton, Link, Stack } from "@chakra-ui/react";
import ContactForm from "./ContactForm";
import SectionTitle from "./SectionTitle";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

function Contact() {
  return (
    <Stack id="contact" minH={"100vh"} pt={"10vh"}>
      <SectionTitle title="CONTACT ME" />
      <Stack
        alignItems={"center"}
        justifyContent={"center"}
        minW={"80%"}  
      >
        <Stack
          w={{ base: "100%", lg: "100%" }}
          flexDir={"row"}
          justifyContent={"space-evenly"}
          
        >
          <Link
            href="https://www.linkedin.com/in/josephflodev/"
            target={"_blank"}
            mt={"0 !important"}
            _hover={{ textDecor: "none" }}
          >
            <IconButton
              className="solidbuttonfillbottom"
              p={"1rem"}
              fontSize={"2rem"}
              icon={<FaLinkedin />}
              aria-label="linkedin"
              borderRadius={"full"}
              bg={"purple.200"}
              color={"black"}
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
              className="solidbuttonfillbottom"
              fontSize={"2rem"}
              aria-label="github"
              borderRadius={"full"}
              bg={"purple.200"}
              color={"black"}
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
              className="solidbuttonfillbottom"
              borderRadius={"full"}
              bg={"purple.200"}
              color={"black"}
              _focus={{ outline: "none" }}
            />
          </Link>
        </Stack>
        <ContactForm />
      </Stack>
    </Stack>
  );
}

export default Contact;
