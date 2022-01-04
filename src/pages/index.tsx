import { Flex, Stack } from "@chakra-ui/react";

import { Banner } from "../components/Banner";
import { Header } from "../components/Header";

export default function Home() {
  return (
    <Stack>
      <Header />

      <Banner />
    </Stack>
  )
}
