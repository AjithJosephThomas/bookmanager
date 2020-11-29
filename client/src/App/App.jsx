import React from "react";
import { hot } from "react-hot-loader/root";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import AllAuthorsPage from "./components/AllAuthorsPage";
import AuthorDetailPage from "./components/AuthorDetailPage";
import AllBooksPage from "./components/AllBooksPage";
import BookDetailPage from "./components/BookDetailPage";
import SaveBookPage from './components/SaveBookPage';
import SaveAuthorPage from './components/SaveAuthorPage';
const App = () => (
  <>
    <h1>Book Manager</h1>
    <BrowserRouter>
      <Switch>
        <Route path="/author/:authorId">
          <AuthorDetailPage />
        </Route>
        <Route path="/allauthors">
          <AllAuthorsPage />
        </Route>
        <Route path="/book/:bookId/update">
          <SaveBookPage />
        </Route>
        <Route path="/book/:bookId">
          <BookDetailPage />
        </Route>
        <Route path="/book/">
          <BookDetailPage />
        </Route>
        <Route path="/create-book/">
          <SaveBookPage />
        </Route>
        <Route path="/allbooks">
          <AllBooksPage />
        </Route>
      </Switch>
    </BrowserRouter>
  </>
);

export default hot(App);
