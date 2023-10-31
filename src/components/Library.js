import { useState, useEffect } from "react";
import * as BooksAPI from "../utils/BooksAPI";
import BookShelf from "./BookShelf";
import SkeletonLoader from "./SkeletonLoader";

const Library = ({ handleNavigation }) => {
  const initalList = {
    currentlyReading: [],
    wantToRead: [],
    read: [],
  };
  const [categoricalData, setCategoricalData] = useState(initalList);
  const [categoricalStatus, setCategoricalStatus] = useState(null);

  const handleShelfUpdate = async (data) => {
    await BooksAPI.update(data.book, data.shelf);

    let categoricalDataUpdated = Object.assign({}, categoricalData);
    const source = data.book.shelf;
    const destination = data.shelf;

    data.book = {
      ...data.book,
      shelf: data.shelf,
    };
    
    categoricalDataUpdated = {
      ...categoricalDataUpdated,
      [source]: categoricalDataUpdated[source].filter(
        (book) => book.id !== data.book.id
      )
    };

    if(destination !== 'none') {
      categoricalDataUpdated = {
        ...categoricalDataUpdated,
        [destination]: categoricalDataUpdated[destination].concat(data.book)
      }
    }
    setCategoricalData(categoricalDataUpdated);
  };

  const getAllBooks = async () => {
    const bookResponse = await BooksAPI.getAll();
    setCategoricalData(() => {
      setCategoricalStatus(false);
      let updatedList = { currentlyReading: [], wantToRead: [], read: [] };
      Object.keys(updatedList).forEach((key) => {
        updatedList[key] = bookResponse.filter((book) => book.shelf === key);
      });
      setCategoricalStatus(true);
      return updatedList;
    });
  };

  useEffect(() => {
    getAllBooks();
  }, []);

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>

      {!categoricalStatus && <SkeletonLoader />}

      {categoricalStatus &&
        Object.keys(categoricalData).map((bookShelf) => (
          <BookShelf
            key={bookShelf}
            shelfKey={bookShelf}
            booksList={categoricalData[bookShelf]}
            onShelfUpdate={handleShelfUpdate}
          />
        ))}

      <div className="open-search">
        <button onClick={handleNavigation}>Add a book</button>
      </div>
    </div>
  );
};

export default Library;
