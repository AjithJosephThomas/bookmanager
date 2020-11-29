import React from "react";
import { Link } from "react-router-dom";

const LinkList = ({linkCollection,linkPrefix}) => (
  <div className="link-list">
    <ul>
      {linkCollection.map(({ id, name }) => (
        <li key={id}>
          <Link to={`${linkPrefix}${id}`}>{name}</Link>
        </li>
      ))}
    </ul>
  </div>
);
export default LinkList;
