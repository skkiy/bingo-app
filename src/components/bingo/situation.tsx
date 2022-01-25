import { Box, Text } from "@chakra-ui/react";
import * as React from "react";
import { calcBingoCounts, calcReachCounts } from "utils/bingo";

interface SituationProps {
  openedResults: boolean[][]
}

export const Situation: React.VFC<SituationProps> = ({ openedResults }) => (
  <Box>
    <Box>
      <Text fontSize={20}>{calcBingoCounts(openedResults)}ビンゴ</Text>
    </Box>
    <Box>
      <Text fontSize={20}>{calcReachCounts(openedResults)}リーチ</Text>
    </Box>
  </Box>
)
