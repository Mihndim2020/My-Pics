import ImageShow from "./ImageShow.js";

const container = {
  display: "flex",
  height: 900,
  width: 900,
  boxShadow: "0 0 3px 2px #cec7c759",
  alignItems: "center",
  padding: 20,
  borderRadius: 20,
};

const ImageList = ({ images }) => {
  const renderedImages = images.map((image) => (
    <ImageShow key={image.id} image={image} />
  ));
  return <div style={container}>{renderedImages}</div>;
};

export default ImageList;
