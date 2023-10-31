import Badge from "react-bootstrap/Badge";
import * as CommonUtils from "../utils/CommonUtils";

const Book = ({ isSourceSearch, bookData, onShelfUpdate }) => {
  const handleSelectChange = (e) => {
    const changedData = {
      book: bookData,
      shelf: e.target.value,
    };
    onShelfUpdate(changedData);
  };

  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 192,
            backgroundImage: `url(${bookData?.imageLinks?.thumbnail})`,
          }}
        >
          {isSourceSearch && bookData?.shelf && (
            // Displaying 'shelf-data' of book in a badge.
            <Badge bg="primary" className="d-block">
              {CommonUtils.getCategoryName(bookData.shelf)}
            </Badge>
          )}
        </div>
        <div className="book-shelf-changer">
          <select value={bookData.shelf} onChange={handleSelectChange}>
            <option value="none" disabled>
              Move to...
            </option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            {!isSourceSearch && <option value="none">None</option>}
          </select>
        </div>
      </div>
      <div className="book-title">{bookData?.title}</div>
      {bookData?.authors?.map((author) => (
        <div className="book-authors" key={author}>
          {author}
        </div>
      ))}
    </div>
  );
};

export default Book;
