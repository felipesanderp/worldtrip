import { Box, Grid, GridItem } from "@chakra-ui/react";

import { TravelIcon } from "./TravelIcon";

export function TravelTypes() {
  return (
    <Box 
      align="center"
      mt="32"
    >
        <Grid
          templateColumns='repeat(5, 1fr)'
          w="100%"
          maxWidth={1280}
          align="center"
          gap="30"
        >
        <GridItem>
          <TravelIcon icon="cocktail" text="vida noturna" />
        </GridItem>

        <GridItem>
          <TravelIcon icon="surf" text="praia" />
        </GridItem>

        <GridItem>
          <TravelIcon icon="building" text="moderno" />
        </GridItem>

        <GridItem>
          <TravelIcon icon="museum" text="clássico" />
        </GridItem>

        <GridItem>
          <TravelIcon icon="earth" text="e mais..." />
        </GridItem>
      </Grid>
    </Box>
  )
}