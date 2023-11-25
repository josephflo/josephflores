import { Image, Stack } from "@chakra-ui/react";
import ProjectCard from "./ProjectCard";
import SectionTitle from "./SectionTitle";
import background from "../assets/stripes.png";

function Projects() {
    const projects = ([
        {
            "id": "3",
            "name": "NFTicket",
            "description": "Project developed in group. Marketplace for buying events tickets as NFTs, through the creation of smart contracts and interacting with the blockchain. Allows you to create your own event and sell your own tickets through a connection with MetaMask.",
            "techstack": [
                "NextJS",
                "Redux",
                "Typescript",
                "Prisma",
                "web3.js",
                "Solidity",
                "Chakra-ui"
            ],
            "deploy": "https://nftickets.netlify.app/",
            "code": "https://github.com/martinsione/ticketek-web3",
            "img": "https://wbskev9st1.execute-api.us-east-1.amazonaws.com/dev/bucketportfolio/projects/nfticket.jpg"
        },
        {
            "id": "2",
            "name": "Pokemon Wiki",
            "description": "Single Page Application using React for the Front End and Redux as state management. The SPA consumes data from an API (pokeapi.co) through a Back End developed in NodeJS using Express, adding new features to the original API.",
            "techstack": [
                "React",
                "Redux",
                "CSSModule",
                "NodeJS",
                "ExpressJS",
                "Sequelize",
                "PostgreSQL"
            ],
            "deploy": "https://pokemon-the-wiki.vercel.app/",
            "code": "https://github.com/francoa7/PI-Pokemon-main",
            "img": "https://wbskev9st1.execute-api.us-east-1.amazonaws.com/dev/bucketportfolio/projects/pokemon.jpg"
        },
        {
            "id": "1",
            "name": "Weathering",
            "description": "Simple SPA that shows your current location weather and also allows you to look for the climate at different cities, bringing the information from an external API (https://openweathermap.org/api), searching them by names.",
            "techstack": [
                "React",
                "Redux",
                "Chakra-ui"
            ],
            "deploy": "https://weathering-app.vercel.app/",
            "code": "https://github.com/francoa7/weathering",
            "img": "https://wbskev9st1.execute-api.us-east-1.amazonaws.com/dev/bucketportfolio/projects/weathering.jpg"
        },
        {
            "id": "4",
            "name": "Imager App",
            "description": "This simple service allows users to create an account and upload images that are saved in the AWS S3 buckets. It compresses files before uploading to optimize performance. Each user has their images saved privately",
            "techstack": [
                "Typescript",
                "React",
                "Redux",
                "Chakra-ui",
                "AWS API Gateway",
                "AWS S3"
            ],
            "deploy": "https://theimagerapp.vercel.app/",
            "code": "https://github.com/francoa7/imager",
            "img": "https://wbskev9st1.execute-api.us-east-1.amazonaws.com/dev/bucketportfolio/projects/imager.jpg"
        }
    ]);
   
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
            <Image
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
            />
        </Stack>
    );
}

export default Projects;
