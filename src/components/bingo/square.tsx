import { Button, Popover, PopoverArrow, PopoverBody, PopoverContent, PopoverTrigger, Text } from "@chakra-ui/react";
import * as React from "react";

interface SquareProps {
  value: number
  isOpened: boolean
}

export const Square: React.VFC<SquareProps> = ({ value, isOpened }) => {
  return (
    <Popover>
      <PopoverTrigger>
        <Button
          bg={isOpened ? "aquamarine" : "whitesmoke"}
          h={16}
          w={16}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Text fontSize={24}>{value == 0 ? "FREE" : value}</Text>
        </Button>
      </PopoverTrigger>
      <PopoverContent w={16}>
        <PopoverArrow />
        <PopoverBody
          justifyContent={"center"}
          display={"flex"}
        >
          {isOpened ? "有効" : "無効"}
        </PopoverBody>
      </PopoverContent>
    </Popover>
  )
}