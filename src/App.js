import { useState } from "react";
import ImageList from "./components/ImageList";
import SearchBar from "./components/SearchBar";

const App = () => {
  const [images, setImages] = useState([]);
  console.log(images);
  return (
    <div>
      <SearchBar setImages={setImages} />
      <ImageList images={images} />
    </div>
  );
};

export default App;
