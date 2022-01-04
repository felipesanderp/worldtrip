import { Flex, Image, Text, useBreakpointValue } from "@chakra-ui/react";

interface TravelIcon {
  icon: string;
  text: string;
}

export function TravelIcon({ icon, text }: TravelIcon){
  const isMobile = useBreakpointValue({
    base: false,
    sm: true,
  })

  return (
    <Flex
      direction={["row", "column"]}
      align="center"
      justify="center"
    >
      { isMobile 
        ? <Image src={`/static/icons/${icon}.svg`} w="85px" h="85px" mb="6" alt={`${text}`} /> 
        : <Text color="yellow.400" fontSize="4xl" mr="2">.</Text>
      }
      <Text fontWeight="600" color="gray.600" fontSize={["md", "xl","2xl"]}>{text}</Text>

    </Flex>  
  )
}