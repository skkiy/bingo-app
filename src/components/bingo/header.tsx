import { Flex, Text } from "@chakra-ui/react";
import * as React from "react";

export const Header = () => {
  return (
    <Flex>
      <Flex mx={1} h={16} w={16} alignItems={"center"} justifyContent={"center"}>
        <Text fontSize={24}>B</Text>
      </Flex>
      <Flex mx={1} h={16} w={16} alignItems={"center"} justifyContent={"center"}>
        <Text fontSize={24}>I</Text>
      </Flex>
      <Flex mx={1} h={16} w={16} alignItems={"center"} justifyContent={"center"}>
        <Text fontSize={24}>N</Text>
      </Flex>
      <Flex mx={1} h={16} w={16} alignItems={"center"} justifyContent={"center"}>
        <Text fontSize={24}>G</Text>
      </Flex>
      <Flex mx={1} h={16} w={16} alignItems={"center"} justifyContent={"center"}>
        <Text fontSize={24}>O</Text>
      </Flex>
    </Flex>
  )
}