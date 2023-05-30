import { useState } from "react";
import searchImages from "../api";

const SearchBar = ({ setImages }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    const search = event.target.value;
    setSearchTerm(search);
    const images = searchImages(searchTerm);
    setImages(images);
    setSearchTerm("");
  };
  return (
    <div>
      <h1>Welcome to my ImageList</h1>
      <form onSubmit={handleSubmit}>
        <input styles={{ width: 100, height: 30 }} value={searchTerm} />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchBar;
