import { Flex, Text, Heading, Stack, Image, HStack } from "@chakra-ui/react";

export function Banner() {
  return (
    <Flex
      w="100%"
      h="355px"
      bgImage="/static/banner.png"
      bgRepeat="no-repeat"
      bgSize="cover"
      justify="center"
    >
      <HStack w="100%" maxWidth={1250} justify="space-between">
        <Stack>
          <Heading color="gray.200" fontSize="4xl" fontWeight="medium" lineHeight="52px">
            5 Continentes, <br /> infinitas possibilidades.
          </Heading>
          <Text color="gray.400" fontSize="xl" lineHeight="30px">
            Chegou a hora de tirar do papel a viagem que você <br />sempre sonhou. 
          </Text>
        </Stack>
        <Image 
          src="/static/airplane.png"
          alt="Airplane"
          transform="translateY(52px)"
          pt="6"
        />
      </HStack>
    </Flex>
  )
}