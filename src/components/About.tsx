import { Image, Stack, Text, Link, Button } from "@chakra-ui/react";
import profile from "../assets/profile4.png";
import resume from "../assets/CV-JOSEPH-3.pdf";
import SectionTitle from "./SectionTitle";
function About() {
  return (
    <Stack alignItems="center">
      <Stack
        maxW="80%"
        pt={"10vh"}
        mt="0 !important"
        id="about"
        minH={"100vh"}
        h={"fit-content"}
        bg="gray.100"
        alignItems={"center"}
        boxShadow={"lg"}
        pb={{ base: "2rem" }}
        borderRadius="lg"
      >
        <SectionTitle title="ABOUT ME" />

        <Stack
          id="eldelpadding"
          w={"100%"}
          h={"100%"}
          p={{ base: "1rem 3rem", lg: "2rem 7rem 2rem 7rem" }}
          mt="0 !important"
        >
          <Stack flexDir={{ base: "column", lg: "row" }} minH={"100%"}>
            <Stack
              w={{ base: "100%", lg: "30%" }}
              minH={"100%"}
              id="aboutPicCont"
              justifyContent={"center"}
              userSelect={"none"}
              alignItems={"center"}
            >
              <Image
                id="profileimage"
                boxShadow={"2xl"}
                src={profile}
                alt={"A picture of myself"}
                h={{ lg: "100%" }}
                w={{ sm: "80%", lg: "auto" }}
                objectFit={"cover"}
                bg="purple.200"
                borderRadius={"20%"}
              />
            </Stack>
            <Stack
              w={{ base: "100%", lg: "70%" }}
              id="aboutDescCont"
              alignItems={"center"}
              mt={{ base: "2rem !important", lg: "0 !important" }}
              rowGap={"2rem"}
              minH={"100%"}
            >
              <Text
                lineHeight={"2rem"}
                h={"100%"}
                w={{ base: "100%", lg: "70%" }}
                fontSize={{ base: ".9rem", md: "1.2rem" }}
                textAlign={"start"}
              >
                My name is Joseph and I am a <b>Fullstack Web Developer</b>.
                Although I enjoy working on both sides, <b>Frontend</b> and{" "}
                <b>Backend</b>, I feel a bit more comfortable on the{" "}
                <b>Frontend</b> side. I am fascinated by the world of
                programming, I am a proactive person who is always looking to
                learn and grow, both professionally and personally. I feel
                identified with a phrase that I read and share:{" "}
                <i>
                  "Nothing in the world can take the place of perseverance."
                </i>
                <br />I characterize myself for always being responsible, well
                predisposed and committed to my tasks, and easy to adapt to new
                work teams.
              </Text>
              <Stack
                flexDir={"row"}
                w={{ base: "100%", lg: "70%" }}
                justifyContent={"space-evenly"}
                userSelect={"none"}
              >
                <Link
                  _hover={{ textDecor: "none" }}
                  href={resume}
                  target={"_blank"}
                >
                  <Button
                    className="solidbuttonfillbottom"
                    _hover={{ bg: "purple.300" }}
                    bg={"purple.200"}
                    color={"paramount"}
                    _focus={{ outline: "none" }}
                    fontWeight={"bold"}
                    borderRadius={"full"}
                  >
                    View Resume
                  </Button>
                </Link>
                <Link
                  mt={"0 !important"}
                  _hover={{ textDecor: "none" }}
                  href={
                    "https://certificates.soyhenry.com/new-cert?id=76851b0ca5b6d58ad4cf96f82e4632f270570567e7af90890286197368c9787f"
                  }
                  target={"_blank"}
                >
                  <Button
                    className="outlinebuttonfillbottom"
                    borderRadius={"full"}
                    _focus={{ outline: "none" }}
                    fontWeight={"bold"}
                    bg={"transparent"}
                    border={"1px"}
                    borderColor={"purple.300"}
                    color={"paramount"}
                    _hover={{ bg: "purple.100" }}
                  >
                    Certificate Developer
                  </Button>
                </Link>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default About;
