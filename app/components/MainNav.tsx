import { Navbar, Paper } from "@mantine/core";
import React from "react";
import { CardItem } from "./CardItem";

type Props = {
  opened: boolean;
};

const navItems = [
  {
    label: "Lost items",
    description: "Lost items and stuff",
    url: "https://www.pngrepo.com/png/277311/512/thief.png",
  },
  {
    label: "Robbery",
    description: "Robberies",
    url: "https://www.pngrepo.com/png/277311/512/thief.png",
  },
  {
    label: "Sexual Offences",
    description: "Sexual offences",
    url: "https://www.pngrepo.com/png/277311/512/thief.png",
  },
  {
    label: "Domestic violence",
    description: "Domestioc violence",
    url: "https://www.pngrepo.com/png/277311/512/thief.png",
  },
  {
    label: "Traffic Accidents",
    description: "Traffic accedents",
    url: "https://www.pngrepo.com/png/277311/512/thief.png",
  },
  {
    label: "Assault",
    description: "Assult",
    url: "https://www.pngrepo.com/png/277311/512/thief.png",
  },
  {
    label: "Theft",
    description: "Theft",
    url: "https://www.pngrepo.com/png/277311/512/thief.png",
  },
  {
    label: "Drugs",
    description: "Brugs",
    url: "https://www.pngrepo.com/png/277311/512/thief.png",
  },
  {
    label: "Embezzlement",
    description: "Embazzelment",
    url: "https://www.pngrepo.com/png/277311/512/thief.png",
  },
  {
    label: "Vandalism",
    description: "Vandelism",
    url: "https://www.pngrepo.com/png/277311/512/thief.png",
  },
  {
    label: "Counterfeit and forgery",
    description: "Counterfit and Forgery",
    url: "https://www.pngrepo.com/png/277311/512/thief.png",
  },
];

export const MainNav = ({ opened }: Props) => {
  return (
    <Navbar
      p="md"
      hiddenBreakpoint="sm"
      hidden={!opened}
      width={{ sm: 200, lg: 300 }}
      style={{ overflow: "auto" }}
    >
      {navItems.map((item, i) => {
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
              title={item.label}
              description={item.description}
              url={item.url}
            />
          </Paper>
        );
      })}
    </Navbar>
  );
};
