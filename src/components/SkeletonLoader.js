import React from "react";
import Skeleton from "react-loading-skeleton";

import "../css/Skeleton.css";

import {getRandomNumber} from '../utils/CommonUtils';

const SkeletonLoader = () => {
  return (
    <section>
      <ul className="no-bullets">
      {Array(2)
        .fill()
        .map((_, index) => (
          <li key={`row_${index}`}>
            <div className="bookshelf">
              <h2 className="bookshelf-title">
                <Skeleton height={30} width={300} />
              </h2>
            </div>
            <div className="bookshelf-books mb-3">
              <ol className="books-grid">
                {Array(getRandomNumber())
                  .fill()
                  .map((_, index) => (
                    <li key={`data_${index}`}>
                      <div className="book">
                        <div className="book-top">
                          <Skeleton height={192} width={128} />
                        </div>
                      </div>
                    </li>
                  ))}
              </ol>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};
export default SkeletonLoader;
