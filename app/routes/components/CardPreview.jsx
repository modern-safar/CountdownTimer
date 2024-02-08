import { Card, Text } from "@shopify/polaris";

const CardPreview = ({ countdownValue, addHeading, addSubHeading }) => {
  const formatTime = (time) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;

    return `${hours}h ${minutes}m ${seconds}s`;
  };

  return (
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
  );
};

export default CardPreview;
