import {
  Aside,
  Grid,
  MediaQuery,
  Paper,
  SegmentedControl,
  Text,
} from "@mantine/core";
import { useState } from "react";
import { Circle, CircleCheck } from "tabler-icons-react";
import { stations } from "~/util/data";

type Props = {};

export const SecondaryNav = ({}: Props) => {
  const [type, setType] = useState("Atolls");
  return (
    <>
      <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
        <Aside
          p="md"
          hiddenBreakpoint="sm"
          width={{ sm: 200, lg: 300 }}
          style={{ overflow: "auto" }}
        >
          <Paper style={{ padding: "5px 20px", marginBottom: "10px" }}>
            <SegmentedControl
              fullWidth
              data={[
                { label: "Atolls", value: "Atolls" },
                { label: "Stations", value: "Stations" },
              ]}
              onChange={(value) => setType(value)}
            />
          </Paper>

          {type === "Atolls" &&
            stations.atolls.data.map((data, i) => {
              return (
                <Paper
                  key={i}
                  shadow={i === 0 ? "xs" : ""}
                  withBorder
                  style={{
                    padding: "5px 20px",
                    marginBottom: "10px",
                    background: i === 0 ? "teal" : "none",
                  }}
                >
                  <Grid>
                    <Grid.Col span={10}>
                      <Text size={"sm"} color={i === 0 ? "white" : "teal"}>
                        {data?.attributes?.englishname}
                      </Text>
                    </Grid.Col>

                    <Grid.Col span={2}>
                      {i !== 0 && <Circle color="teal" strokeWidth={1} />}
                      {i === 0 && <CircleCheck color="white" />}
                    </Grid.Col>
                  </Grid>
                </Paper>
              );
            })}

          {type === "Stations" &&
            stations.stations.data.map((data, i) => {
              return (
                <Paper
                  key={i}
                  shadow={i === 0 ? "xs" : ""}
                  withBorder
                  style={{
                    padding: "5px 20px",
                    marginBottom: "10px",
                    background: i === 0 ? "teal" : "none",
                  }}
                >
                  <Grid>
                    <Grid.Col span={10}>
                      <Text size={"sm"} color={i === 0 ? "white" : "teal"}>
                        {data?.attributes?.englishname}
                      </Text>
                    </Grid.Col>

                    <Grid.Col
                      span={2}
                      style={{
                        display: "flex",
                      }}
                    >
                      <div style={{ textAlign: "right" }}>
                        {i !== 0 && <Circle color="teal" strokeWidth={1} />}
                        {i === 0 && <CircleCheck color="white" />}
                      </div>
                    </Grid.Col>
                  </Grid>
                </Paper>
              );
            })}
        </Aside>
      </MediaQuery>
    </>
  );
};
