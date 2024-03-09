import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";

const Header = () => {
  return (
    <>
      <Flex alignItems={"center"} m={"2rem"}>
        <Image src={logo} width={"4rem"} />
        <Box pl={"2rem"}>
          <Heading color={"white"} marginBottom={"1rem"}>
            AI YouTube
          </Heading>
          <Text fontSize={"16px"}>A YouTube keyword generator</Text>
        </Box>
      </Flex>
    </>
  );
};

export default Header;
