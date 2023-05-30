const ImageShow = ({ image }) => {
  return (
    <div>
      <img
        alt="display-images"
        src={image.urls.small}
        style={{ width: 200, height: 200, padding: 5 }}
      />
      <p>{image.alt_description}</p>
    </div>
  );
};

export default ImageShow;
