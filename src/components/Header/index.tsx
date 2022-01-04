import { Flex, Image } from "@chakra-ui/react";

export function Header() {
  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={1480}
      h="100"
      mx="auto"
      justify="center"
      align="center"
    >
      <Image src="/static/logo.svg" alt="World Trip"/>
    </Flex>
  )
}