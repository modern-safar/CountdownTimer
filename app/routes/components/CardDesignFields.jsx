import {
  Button,
  Card,
  Divider,
  RadioButton,
  RangeSlider,
  Select,
  TextField,
} from "@shopify/polaris";

const CardDesignFields = ({
  selectorDrop,
  onSelectorChange,
  selectorOption,
  addCardBgColor,
  onBgColorChange,
  addSliderRangeValue,
  onRangeSliderChange,
  indvidualFields,
}) => {
  return (
    <div>
      {/* <Card> */}
      <div className="indvidualFields" style={indvidualFields}>
        <Select
          label="Date range"
          options={selectorOption}
          onChange={onSelectorChange}
          value={selectorDrop}
        />
      </div>
      <Divider />
      <div className="indvidualFields" style={indvidualFields}>
        <h1>Card</h1>
        <div>
          <RadioButton
            label="Single color background"
            checked={addCardBgColor === "plainColor"}
            id="plainColor"
            name="accounts"
            onChange={onBgColorChange}
          />
          <RadioButton
            label="Gradient background"
            id="gradientColor"
            name="accounts"
            checked={addCardBgColor === "gradientColor"}
            onChange={onBgColorChange}
          />
          <RangeSlider
            label="Opacity percentage"
            value={addSliderRangeValue}
            onChange={onRangeSliderChange}
            output
          />
        </div>
      </div>
      <div className="indvidualFields" style={indvidualFields}>
        <Button fullWidth>Continue to Design</Button>
      </div>
      {/* </Card> */}
    </div>
  );
};

export default CardDesignFields;
