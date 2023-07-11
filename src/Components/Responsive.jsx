import React from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import FlexLayout from "./FlexLayout";
import Dashboard from "./Dashboard";

function Responsive() {
  return (
    <div>
      <Grid templateColumns={"repeat(6, 1fr)"} bg={"grey.100"}>
        <GridItem
          as={"aside"}
          colSpan={{base: 6, lg: 2, xl: 1 }}
          bg={"purple.300"}
          minHeight={{lg: "100vh"}}
          p={"30px"}
        >
          <span>Sidebar</span>
        </GridItem>
        <GridItem as={"main"} 
        colSpan={{base: 6, lg: 4, xl: 5 }} 
        p={"50px"}
        >
          <FlexLayout />
          <Dashboard />
        </GridItem>
      </Grid>
    </div>
  );
}

export default Responsive;
