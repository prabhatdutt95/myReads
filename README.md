# MyReads Project
A sample react project.

## TL;DR
Instructions to get the application running.

- install all project dependencies with `npm install`
- start the development server with `npm start`

## What You're Getting

```bash
├── public
│   ├── favicon.ico # React Icon.
│   └── index.html # DO NOT MODIFY
│
├── src
│    ├──components
│    │   ├── App.js # This is the root of your app.
│    │   ├── Book.js # This component is used to show each Book data.
│    │   ├── BookShelf.js # This component is used to display list of books for each shelf type.
│    │   ├── Library.js # This component is used as placeholder for all the book in current library.
│    │   ├── NoData.js # This component is used to tell user about any blank section.
│    │   ├── Search.js # This component is used to search and bring any book to current library.
│    │   └── SkeletonLoader.js # This component is used to display loader while page is loading.
│    │
│    ├──css
│    │   ├── App.css # Styles for your app.
│    │   ├── index.css # Global styles.
│    │   ├── NoData.css # Styles for No-Data component.
│    │   └── Skeleton.css # Styles for Loader component.
│    │
│    ├──icons # Helpful images for your app.
│    │   ├── add.svg
│    │   ├── arrow-back.svg
│    │   └── arrow-drop-down.svg
│    │
│    ├──utils # Helpful utilities for application.
│    │   ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
│    │   └── CommonUtils.js # A Javascript file containing common general methods used in application.
│    │
│    └── index.js # You should not need to modify this file. It is used for DOM rendering only.
│
├── .gitignore # Specifies intentionally untracked files to ignore
├── README.md - This file. # external modules that your project depends upon 
├── package-lock.json # holds information on the dependencies or packages installed.
└── package.json # npm package manager file.
```

## Backend Server

To simplify your development process, we've provided a backend server for you to develop against. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

- [`getAll`](#getall)
- [`update`](#update)
- [`search`](#search)

### `getAll`

Method Signature:

```js
getAll();
```

- Returns a Promise which resolves to a JSON object containing a collection of book objects.
- This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf);
```

- book: `<Object>` containing at minimum an `id` attribute
- shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]
- Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query);
```

- query: `<String>`
- Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
- These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important

The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebook/create-react-app/blob/main/packages/cra-template/template/README.md).
