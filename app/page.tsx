"use client";

import { useState } from "react";
import { Button, ButtonGroup } from "@nextui-org/button";
import { Textarea } from "@nextui-org/input";

export default function Home() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const [isEvaluated, setIsEvaluated] = useState(false);

  const handleButtonClick = (value: any) => {
    if (value === "=") {
      try {
        const evalResult = eval(input); // Use eval with caution

        setResult(evalResult);
        setIsEvaluated(true);
      } catch {
        setResult("Error");
      }
    } else {
      if (isEvaluated) {
        if (!isNaN(value)) {
          // Start new input if the last input was evaluated and the new value is a number
          setInput(value);
        } else {
          // Continue with the result if the new value is an operator
          setInput(result + value);
        }
        setResult("");
        setIsEvaluated(false);
      } else {
        // Append the clicked button's value to the input
        setInput(input + value);
      }
    }
  };

  const handleClear = () => {
    setInput("");
    setResult("");
    setIsEvaluated(false);
  };

  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-lg text-center justify-center">
        <div className="flex flex-wrap justify-center gap-2">
          <Textarea
            isReadOnly
            className="max-w-xs"
            placeholder="0"
            value={result || input || "0"}
            variant="bordered"
          />
          <ButtonGroup>
            <Button variant="bordered" onClick={() => handleButtonClick("7")}>
              7
            </Button>
            <Button variant="bordered" onClick={() => handleButtonClick("8")}>
              8
            </Button>
            <Button variant="bordered" onClick={() => handleButtonClick("9")}>
              9
            </Button>
            <Button variant="bordered" onClick={() => handleButtonClick("/")}>
              /
            </Button>
          </ButtonGroup>
          <ButtonGroup>
            <Button variant="bordered" onClick={() => handleButtonClick("4")}>
              4
            </Button>
            <Button variant="bordered" onClick={() => handleButtonClick("5")}>
              5
            </Button>
            <Button variant="bordered" onClick={() => handleButtonClick("6")}>
              6
            </Button>
            <Button variant="bordered" onClick={() => handleButtonClick("*")}>
              *
            </Button>
          </ButtonGroup>
          <ButtonGroup>
            <Button variant="bordered" onClick={() => handleButtonClick("1")}>
              1
            </Button>
            <Button variant="bordered" onClick={() => handleButtonClick("2")}>
              2
            </Button>
            <Button variant="bordered" onClick={() => handleButtonClick("3")}>
              3
            </Button>
            <Button variant="bordered" onClick={() => handleButtonClick("-")}>
              -
            </Button>
          </ButtonGroup>
          <ButtonGroup>
            <Button variant="bordered" onClick={() => handleButtonClick("0")}>
              0
            </Button>
            <Button variant="bordered" onClick={() => handleButtonClick(".")}>
              .
            </Button>
            <Button variant="bordered" onClick={() => handleButtonClick("=")}>
              =
            </Button>
            <Button variant="bordered" onClick={() => handleButtonClick("+")}>
              +
            </Button>
          </ButtonGroup>
        </div>
        <div className="flex justify-center mt-4">
          <Button variant="bordered" onClick={handleClear}>
            Clear
          </Button>
        </div>
      </div>
    </section>
  );
}
