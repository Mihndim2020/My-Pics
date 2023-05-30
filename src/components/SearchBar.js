import "./SearchBar.css";
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
    <div className="search-bar">
      <form onSubmit={handleFormSubmit}>
        <label>Please enter your search term: </label>
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
