import { Card, Layout, Text, TextField } from "@shopify/polaris";
import { useEffect, useState } from "react";

const CountDownTimer = () => {
  const [countdownValue, setCountdownValue] = useState(0);
  const [addHeading, setAddHeading] = useState("Hurry Up");
  const [addSubHeading, setAddSubHeading] = useState("Sale Is On");

  useEffect(() => {
    if (countdownValue > 0) {
      const intervalId = setInterval(() => {
        setCountdownValue((prevValue) => prevValue - 1);
      }, 1000);

      return () => {
        clearInterval(intervalId);
      };
    }
  }, [countdownValue]);

  const formatTime = (time) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;

    return `${hours}h ${minutes}m ${seconds}s`;
  };

  const parseInputTime = (inputValue) => {
    const timeArray = inputValue.split(" ");
    const hours = parseInt(timeArray[0]) || 0;
    const minutes = parseInt(timeArray[1]) || 0;
    const seconds = parseInt(timeArray[2]) || 0;

    return hours * 3600 + minutes * 60 + seconds;
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

  return (
    <div>
      <Card>
        <h1>Countdown Timer</h1>
        <TextField
          label="Set Countdown (hours minutes seconds)"
          value={formatTime(countdownValue)}
          onChange={handleCountdownChange}
        />
        <TextField
          label="Heading"
          value={addHeading}
          onChange={handleHeadingChange}
        />
        <TextField
          label="SubHeading"
          value={addSubHeading}
          onChange={handleSubHeadingChange}
        />
      </Card>

      <Card>
        <div className="countdownContainer">
          <div className="countdownInnerCan">
            <Text className="countdownHeading" variant="headingLg" as="h2">
              {addHeading}
            </Text>
            <Text className="countdownSubHeading" variant="bodyMd" as="p">
              {addSubHeading}
            </Text>
            <Text variant="heading3xl" as="h2" className="countdownTimer">
              {formatTime(countdownValue)}
            </Text>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default CountDownTimer;
