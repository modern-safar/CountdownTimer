import {
  Button,
  Divider,
  Grid,
  Icon,
  InlineStack,
  Layout,
  LegacyCard,
  Text,
} from "@shopify/polaris";

const CountdownTimers = ({ onCreateButtonClick }) => {
  return (
    <div>
      <Grid
        columns={{ xs: 1, sm: 4, md: 4, lg: 6, xl: 6 }}
        areas={{
          xs: ["product", "sales", "orders"],
          sm: ["product product product product", "sales sales orders orders"],
          md: ["sales product product orders"],
          lg: ["product product product product sales orders"],
          xl: ["product product sales sales orders orders"],
        }}
      >
        <Grid.Cell area="product">
          <Text variant="headingLg" as="h5">
            Countdown timers
          </Text>
        </Grid.Cell>
        <Grid.Cell area="sales"></Grid.Cell>
        <Grid.Cell area="orders">
          <Button
            width="106px"
            variant="primary"
            tone="success"
            onClick={onCreateButtonClick}
          >
            Create New Timer
          </Button>
        </Grid.Cell>
      </Grid>
      <Divider />
      <div className="creat-countDown-wrap">
        <Layout>
          <Layout.Section>
            <LegacyCard sectioned>
              <p>
                You're currently on Free Plan. (0 / 1000 monthly views). One
                visitor can have multiple views per session
              </p>
            </LegacyCard>
          </Layout.Section>
          <Layout.Section>
            <LegacyCard sectioned>
              <center>
                <div className="clock-timer-img">
                  <Icon source='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"> <g> <path fill="none" d="M0 0h24v24H0z"/> <path d="M17.618 5.968l1.453-1.453 1.414 1.414-1.453 1.453a9 9 0 1 1-1.414-1.414zM12 20a7 7 0 1 0 0-14 7 7 0 0 0 0 14zM11 8h2v6h-2V8zM8 1h8v2H8V1z"/> </g> </svg>' />
                </div>
                <p>Add tags to your order.</p>
                <Button
                  width="106px"
                  variant="primary"
                  tone="success"
                  onClick={onCreateButtonClick}
                >
                  Create New Timer
                </Button>
              </center>
            </LegacyCard>
          </Layout.Section>
        </Layout>
      </div>
    </div>
  );
};
export default CountdownTimers;
