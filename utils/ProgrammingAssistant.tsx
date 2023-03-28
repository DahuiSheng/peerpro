import { useState } from "react";
import { Button, Input, Textarea } from "@chakra-ui/react";
import axios from "axios";

const ProgrammingAssistant = () => {
  const [code, setCode] = useState("");
  const [instructions, setInstructions] = useState("");
  const [problemStatement, setProblemStatement] = useState("");

  const generateInstructions = async () => {
    try {
      const response = await axios.post(
        "https://api.openai.com/v1/completions",
        {
          prompt: "Please provide a problem statement: " + problemStatement,
          max_tokens: 1024,
          temperature: 0.7,
          n: 1,
          stop: ["###"]
        },
        {
          headers: {
            Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
            "Content-Type": "application/json"
          }
        }
      );

      const { choices } = response.data;
      const { text } = choices[0];
      setInstructions(text);
    } catch (error) {
      console.log(error);
    }
  };

  const generateCode = async () => {
    try {
      const response = await axios.post(
        "https://api.openai.com/v1/completions",
        {
          prompt: `Please provide code for this problem statement: ${problemStatement}\nInstructions: ${instructions}\nCode:`,
          max_tokens: 1024,
          temperature: 0.7,
          n: 1,
          stop: ["###"]
        },
        {
          headers: {
            Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
            "Content-Type": "application/json"
          }
        }
      );

      const { choices } = response.data;
      const { text } = choices[0];
      setCode(text);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Textarea
        value={problemStatement}
        onChange={(e) => setProblemStatement(e.target.value)}
        placeholder="Enter your problem statement"
      />
      <Button onClick={generateInstructions}>Generate Instructions</Button>
      <Textarea
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder="Enter your code"
      />
      <Button onClick={generateCode}>Generate Code</Button>
    </>
  );
};

export default ProgrammingAssistant;
