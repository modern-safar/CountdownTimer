import { Button, Card, Grid, Icon, Layout, Text } from "@shopify/polaris";
import { ArrowLeftIcon } from "@shopify/polaris-icons";

const TimerTypeCard = ({ onBackButtonClick, TimerCardInputs }) => {
  const imageStyle = {
    width: "auto",
    height: "175px",
    objectFit: "cover",
  };

  return (
    <div>
      <Layout>
        <Layout.Section>
          <Grid>
            <Grid.Cell columnSpan={{ xs: 2, sm: 2, md: 1, lg: 1, xl: 1 }}>
              <Button onClick={onBackButtonClick}>
                <Icon source={ArrowLeftIcon} tone="base" />
              </Button>
            </Grid.Cell>
            <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 6, xl: 6 }}>
              <Text variant="headingLg" as="h5">
                Choose timer type
              </Text>
            </Grid.Cell>
          </Grid>
        </Layout.Section>
      </Layout>
      <Layout>
        {TimerCardInputs.map((inputs, index) => (
          <Layout.Section key={index} variant="oneThird">
            <Card>
              <div>
                <img
                  src={inputs.cardImage}
                  alt="Black choker necklace"
                  style={imageStyle}
                />
              </div>
              <div>
                <Text variant="headingLg" as="h2">
                  {inputs.cardHeading}
                </Text>
                <Text variant="bodySm" as="p">
                  {inputs.cardSubHeading}
                </Text>
              </div>
              <div>
                <Button fullWidth>{inputs.cardButtonTxt}</Button>
              </div>
            </Card>
          </Layout.Section>
        ))}
      </Layout>
    </div>
  );
};

export default TimerTypeCard;
