import React from "react";
import { Link } from "react-router-dom";
import {ResultList} from '../../style';
const LinkList = ({linkCollection,linkPrefix}) => (

    <ResultList>
      {linkCollection.map(({ id, name }) => (
        <li key={id}>
          <Link to={`${linkPrefix}${id}`}>{name}</Link>
        </li>
      ))}
    </ResultList>
);
export default LinkList;
