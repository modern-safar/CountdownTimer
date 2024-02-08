import { Page } from "@shopify/polaris";
import TimerTypeCard from "./components/TimerTypeCard";
import CountdownTimers from "./components/CountdownTimers";
import { useState } from "react";
import stylesURL from "~/styles/customStyles.css";
export const links = () => {
  return [{ rel: "stylesheet", href: stylesURL }];
};

const PriceingPlans = () => {
  const [showTimerTypeCard, setShowTimerTypeCard] = useState(false);

  const handleCreateButtonClick = () => {
    setShowTimerTypeCard(true);
  };

  const handleBackButtonClick = () => {
    setShowTimerTypeCard(false);
  };

  const TimerCardInputs = [
    {
      cardImage:
        "https://cdn.shopify.com/s/files/1/0586/6687/7018/files/product_page.svg?v=1707199756",
      cardHeading: "Product page",
      cardSubHeading: "Block in product page below add to cart button.",
      cardButtonTxt: "Select This Timer Type",
    },
    {
      cardImage:
        "https://cdn.shopify.com/s/files/1/0586/6687/7018/files/bar.svg?v=1707199929",
      cardHeading: "Top/bottom bar",
      cardSubHeading:
        "Fixed or sticky bar on the top or the bottom of any page.",
      cardButtonTxt: "Select This Timer Type",
    },
    {
      cardImage:
        "https://cdn.shopify.com/s/files/1/0586/6687/7018/files/landing_page.svg?v=1707199973",
      cardHeading: "Landing page",
      cardSubHeading: "Block in home, collection, password, or any other page.",
      cardButtonTxt: "Select This Timer Type",
    },
    {
      cardImage:
        "https://cdn.shopify.com/s/files/1/0586/6687/7018/files/cart_page.svg?v=1707200017",
      cardHeading: "Cart page",
      cardSubHeading: "Block in cart page below checkout button.",
      cardButtonTxt: "Select This Timer Type",
    },
    {
      cardImage:
        "https://cdn.shopify.com/s/files/1/0586/6687/7018/files/request_feature.svg?v=1707200080",
      cardHeading: "Suggest a new timer type",
      cardSubHeading:
        "Let us know what other timer type you would like to use.",
      cardButtonTxt: "Select This Timer Type",
    },
    {
      cardImage:
        "https://cdn.shopify.com/s/files/1/0586/6687/7018/files/booster1.jpg?v=1707200142",
      cardHeading: "Essential Free Shipping Bar",
      cardSubHeading:
        "Increase average order value by up to 30% with a free shipping bar.",
      cardButtonTxt: "View App",
    },
  ];
  return (
    <Page>
      {showTimerTypeCard ? (
        <TimerTypeCard
          onBackButtonClick={handleBackButtonClick}
          TimerCardInputs={TimerCardInputs}
        />
      ) : (
        <CountdownTimers onCreateButtonClick={handleCreateButtonClick} />
      )}
    </Page>
  );
};
export default PriceingPlans;
