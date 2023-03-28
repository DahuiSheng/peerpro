import { Button, Textarea } from "@chakra-ui/react";
import { useState } from "react";


const ProgrammingAssistant = () => {
    const [code, setCode] = useState("");
    const [instructions, setInstructions] = useState("");

    const generateInstructions = async() => {
        // ChatGPT APIを使用して、プログラムの手順を生成する
        // setInstructionsで手順を設定する
    }

    const generateCode = async() => {
        // ChatGPT APIを使用して、コードを生成する
        // setCodeでコードを設定する
    };

    return (
        <>
            <Textarea value={instructions} onChange={(e) => setInstructions(e.target.value)} placeholder="Enter your problem statement" />
            <Button onClick={generateInstructions}>Generate Instructions</Button>
            <Textarea value={code} onChange={(e) => setCode(e.target.value)} placeholder="Enter your code" />
            <Button onClick={generateCode}>Generate Code</Button>
            </>
    )
}