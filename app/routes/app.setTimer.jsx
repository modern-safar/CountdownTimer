import { useCallback, useState } from "react";
import CardContentFields from "./components/CardContentFields";
import TimerName from "./components/TimerName";
import CardPreview from "./components/CardPreview";
import CardDesignFields from "./components/CardDesignFields";
import CardPlacementFields from "./components/CardPlacementFields";
import { Page } from "@shopify/polaris";
import stylesURL from "~/styles/customStyles.css";
export const links = () => {
  return [{ rel: "stylesheet", href: stylesURL }];
};
const SetTimer = () => {
  const [countdownValue, setCountdownValue] = useState(0);
  const [countdownNameValue, setCountdownNameValue] = useState("Timer Name");
  const [addHeading, setAddHeading] = useState("Hurry Up");
  const [addSubHeading, setAddSubHeading] = useState("Sale Is On");
  const [selected, setSelected] = useState("today");
  const [timerTypeCange, setTimerTypeCange] = useState("disabled");
  const [timerStartChange, setTimerStartChange] = useState("disabled1");
  const [cardBgColorChange, setCardBgColorChange] = useState("plainColor");
  const [cardPositionPlacementChange, setCardPositionPlacementChange] =
    useState("allProducts");
  const [rangeValue, setRangeValue] = useState(32);

  const handleRangeSliderChange = (value) => {
    useCallback(setRangeValue(value), []);
  };

  const indvidualFields = {
    margin: "14px 0",
  };
  const handleCountdownNameChange = (value) => {
    setCountdownNameValue(value);
  };

  const handleCountdownChange = (value) => {
    setCountdownValue(parseInputTime(value));
  };

  const handleHeadingChange = (value) => {
    setAddHeading(value);
  };

  const handleSubHeadingChange = (value) => {
    setAddSubHeading(value);
  };

  const handleSelectChange = useCallback((value) => {
    setSelected(value);
  }, []);

  const parseInputTime = (inputValue) => {
    const timeArray = inputValue.split(" ");
    const hours = parseInt(timeArray[0]) || 0;
    const minutes = parseInt(timeArray[1]) || 0;
    const seconds = parseInt(timeArray[2]) || 0;

    return hours * 3600 + minutes * 60 + seconds;
  };

  const options = [
    { label: "No Call To Action", value: "noCallToAction" },
    { label: "Button", value: "button" },
    { label: "Make Either Bar Clickable", value: "barClickable" },
  ];

  const handleChangeTimerType = useCallback((_, newValue) => {
    setTimerTypeCange(newValue);
  }, []);
  const handleChangeTimerStart = useCallback((_, newValue) => {
    setTimerStartChange(newValue);
  }, []);
  const handleCardBgColor = useCallback((_, newValue) => {
    setCardBgColorChange(newValue);
  }, []);
  const handleCardPlacement = useCallback((_, newValue) => {
    setCardPositionPlacementChange(newValue);
  }, []);
  const tabs = [
    {
      id: "all-customers-1",
      content: "Content",
      accessibilityLabel: "All customers",
      panelID: "all-customers-content-1",
      cardTextfields: (
        <CardContentFields
          indvidualFields={indvidualFields}
          selectorDrop={selected}
          countdownValue={countdownValue}
          addHeading={addHeading}
          addSubHeading={addSubHeading}
          addCountdownName={countdownNameValue}
          addTimerType={timerTypeCange}
          addTimerStart={timerStartChange}
          selectorOption={options}
          onSelectorChange={handleSelectChange}
          onCountdownChange={handleCountdownChange}
          onHeadingChange={handleHeadingChange}
          onSubHeadingChange={handleSubHeadingChange}
          onCountdownNameChange={handleCountdownNameChange}
          onRadioTimerTypeChange={handleChangeTimerType}
          onRadioTimerStartChange={handleChangeTimerStart}
        />
      ),
      cardPreview: (
        <CardPreview
          indvidualFields={indvidualFields}
          countdownValue={countdownValue}
          addHeading={addHeading}
          addSubHeading={addSubHeading}
        />
      ),
    },
    {
      id: "accepts-marketing-1",
      content: "Design",
      panelID: "accepts-marketing-content-1",
      cardTextfields: (
        <CardDesignFields
          indvidualFields={indvidualFields}
          selectorDrop={selected}
          selectorOption={options}
          addCardBgColor={cardBgColorChange}
          onSelectorChange={handleSelectChange}
          onBgColorChange={handleCardBgColor}
          onRangeSliderChange={handleRangeSliderChange}
          addSliderRangeValue={rangeValue}
        />
      ),
      cardPreview: (
        <CardPreview
          countdownValue={countdownValue}
          addHeading={addHeading}
          addSubHeading={addSubHeading}
        />
      ),
    },
    {
      id: "repeat-customers-1",
      content: "Placement",
      panelID: "repeat-customers-content-1",
      cardTextfields: (
        <CardPlacementFields
          indvidualFields={indvidualFields}
          handleCardPlacement={handleCardPlacement}
          addPlacementvalue={cardPositionPlacementChange}
        />
      ),
      cardPreview: (
        <CardPreview
          countdownValue={countdownValue}
          addHeading={addHeading}
          addSubHeading={addSubHeading}
        />
      ),
    },
  ];

  return (
    <Page fullWidth>
      <div className="a1try">
        <TimerName tabData={tabs} addCountdownName={countdownNameValue} />
      </div>
    </Page>
  );
};

export default SetTimer;
