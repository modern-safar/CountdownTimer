import { Card, Layout, Page } from "@shopify/polaris";
import CreateButton from "./components/CreateButton";
import Content from "./components/Content";
import FullWidthButton from "./components/FullWidthButton";
import CardContent from "./components/CardContents";
import CardImage from "./components/CardImage";
import CountDownTimer from "./components/CountDownTimer";

export default function AdditionalPage() {
  return (
    <Page>
      <ui-title-bar title="Components" />
      <Layout>
        <Layout.Section variant="oneThird">
          <Card>
            <center>
              <Content />
              <CreateButton />
            </center>
          </Card>
        </Layout.Section>
        <Layout.Section variant="oneThird">
          <Card>
            <center>
              <CardImage />
              <CardContent />
              <FullWidthButton />
            </center>
          </Card>
        </Layout.Section>
        <Layout.Section variant="oneThird">
          <center>
            <CountDownTimer />
          </center>
        </Layout.Section>
      </Layout>
    </Page>
  );
}
