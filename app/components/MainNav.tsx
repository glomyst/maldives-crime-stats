import { Navbar, Paper } from "@mantine/core";
import React from "react";
import { CardItem } from "./CardItem";

type Props = {
  opened: boolean;
};

export const MainNav = ({ opened }: Props) => {
  return (
    <Navbar
      p="md"
      hiddenBreakpoint="sm"
      hidden={!opened}
      width={{ sm: 200, lg: 300 }}
    >
      {[0, 1, 2].map((data, i) => {
        return (
          <Paper
            key={i}
            shadow={i === 1 ? "xs" : ""}
            withBorder
            style={{
              padding: "5px",
              marginBottom: "10px",
              background: i === 1 ? "ghostwhite" : "none",
            }}
          >
            <CardItem
              title="Embzelment"
              description="Stealing and stuff"
              url="https://www.pngrepo.com/png/277311/512/thief.png"
            />
          </Paper>
        );
      })}
    </Navbar>
  );
};
