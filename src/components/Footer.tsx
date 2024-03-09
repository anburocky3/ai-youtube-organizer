import { Box, Flex, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";

const Footer = () => {
  return (
    <Box mt={50}>
      <Flex justifyContent={"center"} alignItems={"center"}>
        <Image src={logo} marginRight={1} width="1rem" />
        <Text>Powered by</Text>
        <Text fontWeight={"bold"} ml="1">
          OpenAI
        </Text>
      </Flex>
    </Box>
  );
};

export default Footer;
