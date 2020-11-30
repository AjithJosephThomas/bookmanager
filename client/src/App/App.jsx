import React from "react";
import { hot } from "react-hot-loader/root";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import AllAuthorsPage from "./components/AllAuthorsPage";
import AuthorDetailPage from "./components/AuthorDetailPage";
import AllBooksPage from "./components/AllBooksPage";
import BookDetailPage from "./components/BookDetailPage";
import SaveBookPage from './components/SaveBookPage';
import SaveAuthorPage from './components/SaveAuthorPage';
import Navbar from './components/Navbar';
import GlobalStyle from '../theme';
const App = () => (
  <>
    <Navbar />
    <BrowserRouter>
      <Switch>
        <Route path="/author/:authorId">
          <AuthorDetailPage />
        </Route>
        <Route path="/allauthors">
          <AllAuthorsPage />
        </Route>
        <Route path="/create-author/">
          <SaveAuthorPage />
        </Route>
        <Route path="/author/:authorId/update">
          <SaveAuthorPage />
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
        
        <Route path={["/allbooks","/"]}>
          <AllBooksPage />
        </Route>
      </Switch>
    </BrowserRouter>
    <GlobalStyle />
  </>
);

export default hot(App);
