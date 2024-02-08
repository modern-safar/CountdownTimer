import {
  Button,
  Card,
  Divider,
  RadioButton,
  Select,
  TextField,
} from "@shopify/polaris";

const CardContentFields = ({
  countdownValue,
  addHeading,
  addSubHeading,
  onCountdownChange,
  onHeadingChange,
  onSubHeadingChange,
  onCountdownNameChange,
  addCountdownName,
  addTimerType,
  onRadioTimerTypeChange,
  onRadioTimerStartChange,
  addTimerStart,
  indvidualFields,
}) => {
  // Function to format time from seconds to "hours minutes seconds" format
  const formatTime = (time) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;

    return `${hours}h ${minutes}m ${seconds}s`;
  };

  return (
    <div className="bigblue">
      {/* <Card> */}
      <div className="indvidualFields" style={indvidualFields}>
        <TextField
          label="Countdown Name"
          value={addCountdownName}
          onChange={onCountdownNameChange}
        />
        <h1>Only visible to you. For your own internal reference.</h1>
      </div>

      <div className="indvidualFields" style={indvidualFields}>
        <TextField
          label="Heading"
          value={addHeading}
          onChange={onHeadingChange}
        />
      </div>
      <div className="indvidualFields" style={indvidualFields}>
        <TextField
          label="SubHeading"
          value={addSubHeading}
          onChange={onSubHeadingChange}
        />
      </div>
      <div className="indvidualFields" style={indvidualFields}>
        <TextField
          label="Timer labels"
          value={formatTime(countdownValue)}
          onChange={onCountdownChange}
        />
      </div>
      <Divider />
      <div className="indvidualFields" style={indvidualFields}>
        <h1>Timer Type</h1>
        <div>
          <RadioButton
            label="Countdown to a date"
            helpText="Timer that ends at the specific date."
            checked={addTimerType === "disabled"}
            id="disabled"
            name="accounts"
            onChange={onRadioTimerTypeChange}
          />
          <RadioButton
            label="Fixed minutes"
            helpText="Individual fixed minutes countdown for each buyer session."
            id="optional"
            name="accounts"
            checked={addTimerType === "optional"}
            onChange={onRadioTimerTypeChange}
          />
        </div>
      </div>
      <div className="indvidualFields" style={indvidualFields}>
        <h1>Timer starts</h1>
        {addTimerType === "disabled" && (
          <div className="countdownToDate">
            <RadioButton
              label="Right Now"
              checked={addTimerStart === "disabled1"}
              id="disabled1"
              name="scheduleType"
              onChange={onRadioTimerStartChange}
            />
            <RadioButton
              label="Schedule to start later"
              helpText="Schedule the countdown to start at a later date."
              checked={addTimerStart === "optional1"}
              id="optional1"
              name="scheduleType"
              onChange={onRadioTimerStartChange}
            />
            {addTimerStart === "disabled1" && (
              <div>
                <TextField
                  label="Fixed Minutes"
                  value={addHeading}
                  onChange={onHeadingChange}
                />
                <TextField
                  label="Fixed Minutes"
                  value={addHeading}
                  onChange={onHeadingChange}
                />
              </div>
            )}
            {addTimerStart === "optional1" && <p>World</p>}
          </div>
        )}

        {addTimerType === "optional" && (
          <div className="fixedMinutes">
            <TextField
              label="Fixed Minutes"
              value={addHeading}
              onChange={onHeadingChange}
            />
            <TextField
              label="Fixed SubHeading"
              value={addSubHeading}
              onChange={onSubHeadingChange}
            />
          </div>
        )}
      </div>
      <Divider />
      <div className="indvidualFields" style={indvidualFields}>
        <Button fullWidth>Continue to Design</Button>
      </div>
      {/* </Card> */}
    </div>
  );
};

export default CardContentFields;
