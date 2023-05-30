import ImageShow from "./ImageShow.js";
import "./ImageList.css";

const ImageList = ({ images }) => {
  const renderedImages = images.map((image) => (
    <ImageShow key={image.id} image={image} />
  ));
  return <div className="image-list">{renderedImages}</div>;
};

export default ImageList;
