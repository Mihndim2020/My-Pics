import ImageShow from "./ImageShow.js";

const ImageList = ({ images }) => {
  console.log(images);
  return (
    <div>
      <h1>Welcome to my ImageList</h1>
      <ImageShow />
    </div>
  );
};

export default ImageList;
