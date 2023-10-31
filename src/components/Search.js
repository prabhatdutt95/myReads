import { useEffect, useState } from "react";
import * as BooksAPI from "../utils/BooksAPI";
import Book from "./Book";
import NoData from "./NoData";

const Search = ({ handleNavigation }) => {
  const [bookData, setBookData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  // Handle input change
  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Loading All-books when components is loaded
  const getAllBooks = async () => {
    const bookResponse = await BooksAPI.getAll();
    setBookData(bookResponse);
  };

  useEffect(() => {
    getAllBooks();
  }, []);

  useEffect(() => {
    // Setting Book-category in case book from search-result is also available in getAllBooks
    const setBookCategory = (results) => {
      if (!results.error && results.length > 0) {
        bookData.forEach((book) => {
          const searchIndex = results.findIndex(
            (result) => result.id === book.id
          );
          if (searchIndex !== -1) {
            results[searchIndex] = { ...book };
          }
        });
      }
      setSearchResults(results);
    };

    // Adding debounce using setTimeout
    const getSearchData = setTimeout(async () => {
      if (searchTerm !== "") {
        const results = await BooksAPI.search(searchTerm, 20);
        setBookCategory(results);
      }
    }, 500);

    return () => clearTimeout(getSearchData);
  }, [searchTerm, bookData, setSearchResults]);

  // Update Shelf data when option is changed
  const handleShelfUpdate = async (data) => {
    await BooksAPI.update(data.book, data.shelf);

    let resultUpdated = Object.assign([], searchResults);
    const searchIndex = resultUpdated.findIndex(
      (result) => result.id === data.book.id
    );
    if (searchIndex !== -1) {
      resultUpdated[searchIndex] = {
        ...resultUpdated[searchIndex],
        shelf: data.shelf,
      };
    }
    setSearchResults(resultUpdated);
  };

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <button className="close-search" onClick={handleNavigation}>
          Close
        </button>
        <div className="search-books-input-wrapper">
          <input
            type="search"
            value={searchTerm}
            placeholder="Search by title, author, or ISBN"
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {searchResults.length > 0 &&
            searchResults.map((result) => (
              <li key={result.id}>
                <Book
                  isSourceSearch={true}
                  bookData={result}
                  onShelfUpdate={handleShelfUpdate}
                />
              </li>
            ))}
          {searchTerm !== "" && searchResults.error && <NoData />}
        </ol>
      </div>
    </div>
  );
};

export default Search;
