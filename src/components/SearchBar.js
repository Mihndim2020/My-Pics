import { useState } from "react";
import searchImages from "../api";

const SearchBar = ({ getImages }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const images = await searchImages(searchTerm);
    getImages(images);
    setSearchTerm("");
  };

  return (
    <div>
      <h1>Welcome my Search Bar</h1>
      <form onSubmit={handleFormSubmit}>
        <input
          value={searchTerm}
          onChange={handleChange}
          styles={{ width: 100, height: 30 }}
        />
      </form>
    </div>
  );
};

export default SearchBar;
