import Book from "./Book";
import * as CommonUtils from "../utils/CommonUtils";
import NoData from "./NoData";

const BookShelf = ({ shelfKey, booksList, onShelfUpdate }) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">
        {CommonUtils.getCategoryName(shelfKey)}
      </h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {booksList.length > 0 && booksList.map((book) => (
            <li key={book.id}>
              <Book isSourceSearch={false} bookData={book} onShelfUpdate={onShelfUpdate} />
            </li>
          ))}
          {booksList.length === 0 && <NoData />}
        </ol>
      </div>
    </div>
  );
};

export default BookShelf;
