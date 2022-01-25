import { Button, HStack, NumberInput, NumberInputField, Stack, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import * as React from "react";

interface OperationProps {
  candidates: number[]
  numberHistory: number[]
  handleSetAutoNextNumber: () => void
  handleSetNextNumber: (number) => void
}

export const Operation: React.VFC<OperationProps> = ({
  candidates,
  numberHistory,
  handleSetAutoNextNumber,
  handleSetNextNumber,
}) => {
  const [nextValue, setNextValue] = useState<number>(0)

  useEffect(() => {
    if (isNaN(nextValue)) {
      setNextValue(0)
    }
  }, [nextValue])

  useEffect(() => {
    setNextValue(0)
  }, [numberHistory.length])

  return (
    <Stack spacing={2}>
      <HStack spacing={4} alignItems={"center"}>
        <Text w={32}>現在の数字：{numberHistory.length > 0 && numberHistory.slice(-1)[0]}</Text>
        <Button
          disabled={candidates.length == 0}
          onClick={handleSetAutoNextNumber}
        >
          次へ
        </Button>
      </HStack>
      <HStack>
        <NumberInput
          value={nextValue}
          min={0}
          max={75}
          onChange={(_, valueAsNumber) => {
            if (valueAsNumber < 1 || valueAsNumber > 75) {
              setNextValue(0)
              return
            }
            setNextValue(valueAsNumber)
          }}>
          <NumberInputField />
        </NumberInput>
        <Button
          disabled={nextValue == 0}
          onClick={() => handleSetNextNumber(nextValue)}
        >
          追加
        </Button>
      </HStack>
    </Stack>
  )
}
