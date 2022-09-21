import { Aside, Group, MediaQuery, Paper } from "@mantine/core";
import React from "react";
import { Circle, CircleCheck } from "tabler-icons-react";

type Props = {};

export const SecondaryNav = ({}: Props) => {
  return (
    <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
      <Aside p="md" hiddenBreakpoint="sm" width={{ sm: 200, lg: 300 }}>
        {["N. Atoll Police", "B. Atoll Police", "R. Atoll Police"].map(
          (data, i) => {
            return (
              <Paper
                key={i}
                shadow={i === 0 ? "xs" : ""}
                withBorder
                style={{ padding: "5px 20px", marginBottom: "10px" }}
              >
                <Group position="apart">
                  <span>{data}</span>

                  {i !== 0 && <Circle color="teal" strokeWidth={1} />}
                  {i === 0 && <CircleCheck color="teal" />}
                </Group>
              </Paper>
            );
          }
        )}
      </Aside>
    </MediaQuery>
  );
};
