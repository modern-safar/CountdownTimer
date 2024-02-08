import { Card, Divider, RadioButton } from "@shopify/polaris";

const CardPlacementFields = ({
  indvidualFields,
  addPlacementvalue,
  handleCardPlacement,
}) => {
  return (
    <div>
      {/* <Card> */}
      <div className="indvidualFields" style={indvidualFields}>
        <h1>Select Products</h1>
        <RadioButton
          label="All products"
          helpText="Customers will only be able to check out as guests."
          checked={addPlacementvalue === "allProducts"}
          id="allProducts"
          name="accounts"
          onChange={handleCardPlacement}
        />
        <RadioButton
          label="Specific products"
          helpText="Customers will be able to check out with a customer account or as a guest."
          id="specificProducts"
          name="accounts"
          checked={addPlacementvalue === "specificProducts"}
          onChange={handleCardPlacement}
        />
        <RadioButton
          label="All products with specific tags"
          helpText="Customers will only be able to check out as guests."
          checked={addPlacementvalue === "allProductsWithSpecficTags"}
          id="allProductsWithSpecficTags"
          name="accounts"
          onChange={handleCardPlacement}
        />
        <RadioButton
          label="Custom position"
          helpText="Add timer anywhere using app blocks or code snippet provided below."
          id="customPosition"
          name="accounts"
          checked={addPlacementvalue === "customPosition"}
          onChange={handleCardPlacement}
        />
      </div>
      <Divider />
      <div className="indvidualFields" style={indvidualFields}>
        <h1>Timer ID</h1>
        <h2>Save or Publish to show timer ID</h2>
        <p>
          Countdown timer app block can be added, removed, repositioned, and
          customized through the theme editor using timer ID.
        </p>
      </div>

      {/* </Card> */}
    </div>
  );
};

export default CardPlacementFields;
