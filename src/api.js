import axios from "axios";

const url = "https://api.unsplash.com/search/photos";

const searchImages = async (searchTerm) => {
  const response = await axios.get(url, {
    headers: {
      Authorization: "Client-ID LQH43yn5YhIIHtGW7PEv-tM306yaidizv5zwJOTTdPQ",
    },
    params: {
      query: searchTerm,
    },
  });
  return response.data.results;
};

export default searchImages;
