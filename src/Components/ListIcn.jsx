import React from "react";
import { List, ListIcon, ListItem, Grid, GridItem } from "@chakra-ui/react";
import { CalendarIcon, EditIcon, AtSignIcon } from "@chakra-ui/icons";
import FlexLayout from "./FlexLayout";
import Dashboard from "./Dashboard";

function ListIcn() {
  return (
    <div>
      <Grid templateColumns={"repeat(6, 1fr)"} bg={"grey.100"}>
        <GridItem
          as={"aside"}
          colSpan={"1"}
          bg={"purple.300"}
          minHeight={"100vh"}
          p={"30px"}
        >
          <List spacing={3}>
            <div>
              <ListIcon as={CalendarIcon} />
              <ListItem as={"span"}>Dashboard</ListItem>
            </div>
            <div>
              <ListIcon as={EditIcon} />
              <ListItem as={"span"}>New Task</ListItem>
            </div>
            <div>
              <ListIcon as={AtSignIcon} />
              <ListItem as={"span"}>Profile</ListItem>
            </div>
          </List>
        </GridItem>
        <GridItem as={"main"} colSpan={"5"} p={"50px"}>
          <FlexLayout />
          <Dashboard />
        </GridItem>
      </Grid>
    </div>
  );
}

export default ListIcn;
