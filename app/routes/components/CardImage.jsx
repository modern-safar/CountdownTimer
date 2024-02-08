const CardImage = () => {
  const imageStyle = {
    width: "auto",
    height: "184px",
    objectFit: "cover",
  };

  return (
    <img
      src="https://burst.shopifycdn.com/photos/black-leather-choker-necklace_373x@2x.jpg"
      alt="Black choker necklace"
      style={imageStyle}
    />
  );
};

export default CardImage;
