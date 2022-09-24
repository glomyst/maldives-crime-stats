import { useState } from "react";
import type { PropsWithChildren } from "react";
import {
  AppShell,
  Header,
  Footer,
  Text,
  MediaQuery,
  Burger,
  useMantineTheme,
  Chip,
} from "@mantine/core";
import { MainNav } from "~/components/MainNav";
import { SecondaryNav } from "~/components/SecondaryNav";

export default function MainLayout({ children }: PropsWithChildren) {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  return (
    <AppShell
      styles={{
        main: {
          background:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      navbar={<MainNav opened={opened} />}
      aside={<SecondaryNav />}
      footer={
        <Footer
          height={60}
          p="md"
          style={{
            display: "flex",
            alignItems: "center",
            textAlign: "center",
            justifyContent: "space-between",
            overflowX: "auto",
            overflowY: "hidden",
          }}
        >
          {[
            "All",
            "2008",
            "2009",
            "2010",
            "2011",
            "2012",
            "2013",
            "2014",
            "2015",
            "2016",
            "2017",
            "2018",
            "2019",
            "2020",
            "2021",
            "2022",
          ].map((data, i) => {
            return (
              <Chip key={i} style={{ margin: "5px" }} value={data}>
                {data}
              </Chip>
            );
          })}
        </Footer>
      }
      header={
        <Header height={70} p="md" style={{ background: "teal" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              height: "100%",
            }}
          >
            <MediaQuery largerThan="sm" styles={{ display: "none" }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="sm"
                color={theme.colors.gray[6]}
                mr="xl"
              />
            </MediaQuery>

            <Text color={"white"}>Maldives Crime Statistics</Text>
          </div>
        </Header>
      }
    >
      {children}
    </AppShell>
  );
}
