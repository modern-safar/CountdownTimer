import { Text } from "@shopify/polaris";

const Content = () => {
  return (
    <div style={{ textAlign: "center", margin: "20px 0" }}>
      <h1 id="cardText">hello</h1>
      <Text variant="headingLg" as="p" id="cardText">
        Online store dashboard
      </Text>

      <Text
        variant="bodyMd"
        as="p"
        style={{ textAlign: "center", margin: "20px 0" }}
      >
        Online store dashboard
      </Text>
    </div>
  );
};
export default Content;
