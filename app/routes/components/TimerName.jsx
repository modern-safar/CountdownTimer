import {
  LegacyCard,
  Tabs,
  Badge,
  ButtonGroup,
  FullscreenBar,
  Button,
  Text,
  BlockStack,
  Card,
  InlineGrid,
  Box,
} from "@shopify/polaris";
import { useState, useCallback } from "react";

function TimerName({ tabData, addCountdownName }) {
  const [selected, setSelected] = useState(0);

  const handleTabChange = useCallback(
    (selectedTabIndex) => setSelected(selectedTabIndex),
    [],
  );

  return (
    <div>
      <div>
        {/* <FullscreenBar> */}
        <div
          style={{
            display: "flex",
            flexGrow: 1,
            justifyContent: "space-between",
            alignItems: "center",
            paddingLeft: "1rem",
            paddingRight: "1rem",
          }}
        >
          <Text variation="strong">{addCountdownName}</Text>
          <div style={{ marginLeft: "0.5rem", flexGrow: 1 }}>
            <Badge status="info">Draft</Badge>
          </div>

          <ButtonGroup>
            {/* <Button>Secondary Action</Button> */}
            <Button variant="primary" tone="success">
              Publish
            </Button>
          </ButtonGroup>
        </div>
        {/* </FullscreenBar> */}
      </div>
      <Tabs tabs={tabData} selected={selected} onSelect={handleTabChange}>
        <div id={tabData[selected].panelID}>
          <LegacyCard.Section title={tabData[selected].content}>
            <InlineGrid columns={{ xs: "1fr", md: "2fr 5fr" }} gap="400">
              <Box
                as="section"
                paddingInlineStart={{ xs: 400, sm: 0 }}
                paddingInlineEnd={{ xs: 400, sm: 0 }}
              >
                <BlockStack gap="400">
                  <Card roundedAbove="sm">
                    <div>{tabData[selected].cardTextfields}</div>
                  </Card>
                </BlockStack>
              </Box>

              <BlockStack gap="400">
                <div>{tabData[selected].cardPreview}</div>
              </BlockStack>
            </InlineGrid>
          </LegacyCard.Section>
        </div>
      </Tabs>
    </div>
  );
}

export default TimerName;
