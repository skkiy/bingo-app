import {
  Box,
  GridItem,
  SimpleGrid,
  Button,
  Stack,
} from "@chakra-ui/react";
import { RepeatIcon } from '@chakra-ui/icons'
import { Header } from "components/bingo/header";
import { Operation } from "components/bingo/operation";
import { Situation } from "components/bingo/situation";
import { useEffect, useState } from "react";
import * as React from "react";
import { Square } from "components/bingo/square";
import {
  generateValues,
  getInitialOpenedResults,
  getRandomInt,
} from "utils/bingo";

export const BingoSheet: React.VFC = () => {
  const [values, setValues] = useState([])
  const [openedResults, setOpenedResults] = useState(getInitialOpenedResults())
  const [candidates, setCandidates] = useState(Array.from(new Array(75)).map((v, i) => i + 1))
  const [numberHistory, setNumberHistory] = useState<number[]>([])

  const handleReset = () => {
    setValues(generateValues())
    setOpenedResults(getInitialOpenedResults())
    setNumberHistory([])
    setCandidates(Array.from(new Array(75)).map((v, i) => i + 1))
  }

  const handleSetAutoNextNumber = () => {
    const tempHistory = numberHistory.slice()
    const tempCandidates = candidates.slice()
    const index = getRandomInt(0, candidates.length - 1)
    const temp = tempCandidates.splice(index, 1)[0]
    tempHistory.push(temp)
    setCandidates(tempCandidates)
    setNumberHistory(tempHistory)
    updateResults(temp)
  }

  const handleSetNextNumber = (value: number) => {
    const tempHistory = numberHistory.slice()
    const tempCandidates = candidates.slice()
    const index = candidates.findIndex((x) => x == value)
    tempCandidates.splice(index)
    setCandidates(tempCandidates)
    tempHistory.push(value)
    setNumberHistory(tempHistory)
    updateResults(value)
  }

  const updateResults = (value: number) => {
    values.forEach((nums, columnIndex) => {
      const rowIndex = nums.indexOf(value)
      if (rowIndex >= 0) {
        const newOpenedResults = openedResults.slice()
        newOpenedResults[columnIndex][rowIndex] = true
        setOpenedResults(newOpenedResults)
      }
    })
  }

  useEffect(() => {
    setValues(generateValues())
  }, [])

  return (
    <Stack spacing={2}>
      <Box>
        <Button
          onClick={handleReset}
          rightIcon={<RepeatIcon />}
          aria-label={"reload sheet"}
        >
          New Game
        </Button>
      </Box>
      <Box p={1} borderWidth={"1px"} borderRadius={4}>
        <Header />
        <SimpleGrid
          gridAutoFlow={"column"}
          gridTemplateRows={"repeat(5, 1fr)"}
          gridTemplateColumns={"repeat(5, 1fr)"}
        >
          {values.map((nums, columnIndex) => {
            return nums.map((value, rowIndex) => (
              <GridItem p={1} key={value}>
                <Square value={value} isOpened={openedResults[columnIndex][rowIndex]} />
              </GridItem>
            ))
          })}
        </SimpleGrid>
      </Box>
      <Situation openedResults={openedResults} />
      <Operation
        candidates={candidates}
        numberHistory={numberHistory}
        handleSetAutoNextNumber={handleSetAutoNextNumber}
        handleSetNextNumber={handleSetNextNumber}
      />
    </Stack>
  )
}
