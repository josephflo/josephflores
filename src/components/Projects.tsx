import { Stack } from "@chakra-ui/react";
import ProjectCard from "./ProjectCard";
import SectionTitle from "./SectionTitle";
// import background from "../assets/stripes.png";
import { projects } from "../data";

function Projects() {
    
   
    return (
        <Stack
            minH={"100vh"}
            pb={"2rem"}
            id="projects"
            pt={"10vh"}
            position={"relative"}
        >
            <SectionTitle title="MY PROJECTS" />
            <Stack
                p={{ base: "2rem 3rem", lg: "2rem 7rem 2rem 7rem" }}
                flexDir={"row"}
                justifyContent={"center"}
                columnGap={"3rem"}
                rowGap={"5rem"}
                wrap={"wrap"}
            >
                {projects.length &&
                    projects
                        .map((project) => (
                            <ProjectCard
                                key={`${project.id}${project.name}`}
                                data={project}
                            />
                        ))}
            </Stack>
            {/* <Image
                alt={"Background image"}
                src={background}
                w={{ base: "auto", lg: "fit-content" }}
                h={{ base: "fit-content", lg: "auto" }}
                position={"fixed"}
                top={"-250px"}
                left={"-500px"}
                zIndex={-1}
            />
            <Image
                alt={"Background image"}
                src={background}
                w={{ base: "auto", lg: "fit-content" }}
                h={{ base: "fit-content", lg: "auto" }}
                position={"fixed"}
                bottom={{ base: -40, lg: -10 }}
                right={{ base: -20, lg: -10 }}
                zIndex={-1}
            /> */}
        </Stack>
    );
}

export default Projects;
