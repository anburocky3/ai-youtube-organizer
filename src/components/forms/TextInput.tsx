import { Button, Textarea, useToast } from "@chakra-ui/react";
import { useState } from "react";

interface TextInputProps {
  extractKeywords: (arg0: string) => void;
}

const TextInput = ({ extractKeywords }: TextInputProps) => {
  const [text, setText] = useState("");

  const toast = useToast();

  const onSubmit = () => {
    if (text === "") {
      toast({
        title: "Text field is empty",
        description: "Please entere some text to extract keywords",
        status: "error",
        duration: 5000,
      });
    } else {
      console.log(text);
      extractKeywords(text);
    }
  };

  return (
    <>
      <Textarea
        bg="green.100"
        padding={4}
        marginTop={6}
        height={200}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter description to extract information"
      ></Textarea>

      <Button colorScheme="green" onClick={onSubmit} m="4">
        Extract keywords
      </Button>
    </>
  );
};

export default TextInput;
