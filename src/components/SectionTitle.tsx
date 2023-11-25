import { Heading } from "@chakra-ui/react";

function SectionTitle({ title }: { title: string }) {
    return (
        <Heading
            as={"h2"}
            fontFamily={"raleway"}
            fontWeight={"bold"}
            fontSize={"2rem"}
            mb={"3rem !important"}
            
        >
            {title}
        </Heading>
    );
}

export default SectionTitle;
