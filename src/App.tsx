import { Box, Container } from "@chakra-ui/react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import TextInput from "./components/forms/TextInput";
import { useState } from "react";

function App() {
  const [keywords, setKeywords] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const extractKeywords = async (text: string) => {
    setLoading(true);
    setIsOpen(true);

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_OPEN_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo-instruct",
        prompt: `Extract keywords from this text. Make the first letter of each word uppercase and separate with commas \n\n ${text}`,
        max_tokens: 60,
        frequency_penalty: 0.8,
        temperature: 0.5,
      }),
    };

    const response = await fetch(import.meta.env.VITE_OPEN_API_URL, options);

    const json = await response.json();
    console.log(json);

    const data = json.choices[0].text.trim();

    setKeywords(data);
    setLoading(false);

    console.log(text);
  };

  return (
    <Box bgGradient="linear(to-l, #7928CA, #FF0080)" height={"100vh"}>
      <Container maxW={"3xl"} centerContent>
        <Header />
        {/* <Card>
          <CardHeader>
            <Text
              bgGradient="linear(to-l, #7928CA, #FF0080)"
              bgClip="text"
              fontSize="3xl"
              fontWeight="semibold"
            >
              YouTube Keyword Generator
            </Text>
          </CardHeader>

          <CardBody>
            <Textarea placeholder="Enter your YouTube Description" />
            <Button colorScheme="pink" mt="20px">
              Generate Keywords
            </Button>
          </CardBody>
        </Card> */}
        <TextInput extractKeywords={extractKeywords} />
        <Footer />
      </Container>
    </Box>
  );
}

export default App;
