const dbPool = require("./db");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/status", async (req, res) => {
  res.status(200);
  res.send("alive");
});

app.get("/author", async (req, res) => {
  try {
    const authors = await dbPool.query(
      `SELECT id, first_name,last_name FROM author`
    );
    res.status(200);
    res.send(authors);
  } catch (error) {
    console.log(error);
    res.status(500);
    res.send(error);
  }
});

app.get("/author/:id", async (req, res) => {
  const { id } = req.params;
  let author = null;

  try {
    selectRows = await dbPool.query(
      `SELECT id, first_name,last_name FROM author where id='${id}'`
    );

    if (selectRows.length) {
      author = JSON.parse(selectRows[0]);
    }
    res.status(200);
    res.send(author);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
});
app.post("/author", async (req, res) => {
  const { first_name, last_name } = req.body;
  if (!(req.body || req.body.length)) {
    res.status(500);
    res.send("Invalid body");
  }
  try {
    const selectRow = await dbPool.query(
      `insert into author (first_name,last_name) values ('${first_name}','${last_name}')`
    );
    const id = selectRow.insertId;
    const author = { first_name, last_name, id };
    res.status(200);
    res.send(author);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
});

app.put("/author/:id", async (req, res) => {
  const { id } = req.params;
  const { first_name, last_name } = req.body;
  try {
    let query = `UPDATE author set`;
    if (first_name) {
      query += `first_name ='${first_name}'`;
    }
    if (first_name) {
      query += `last_name ='${last_name}'`;
    }
    query += `FROM author where id =${id}`;
    const response = await dbPool.query(query);
    const author = { first_name, last_name, id };
    res.status(200);
    res.send(author);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
});
app.delete("/author/:id", async (req, res) => {
  const { id } = req.params;
  try {
    selectRows = await dbPool.query(`DELETE FROM author where id = ${id}`);

    res.status(200);
    res.send(id);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
});

app.get("/book", async (req, res) => {
  try {
    const books = await dbPool.query(
      `SELECT id, name,isbn,author_id FROM book`
    );
    res.status(200);
    res.send(books);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
});
app.get("/book/:id", async (req, res) => {
  const { id } = req.params;
  let book = null;

  try {
    selectRows = await dbPool.query(
      `SELECT id, name,isbn,author FROM book where id='${id}'`
    );

    if (selectRows.length) {
      book = JSON.parse(selectRows[0]);
    }
    res.status(200);
    res.send(book);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
});
app.post("/book", async (req, res) => {
  const { book } = req.body;
  const { name, isbn, author_id } = book;

  try {
    const response = await dbPool.query(
      `insert into book (name,isbn, author) values (${name},${isbn},${author_id})`
    );

    const id = response.insertId;
    book = { ...book, id };
    res.status(200);
    res.send(book);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
});

app.put("/book/:id", async (req, res) => {
  const { id } = req.params;
  let book = null;

  try {
    let query = `UPDATE book set `;
    if (name) {
      query += `name ='${name}'`;
    }
    if (isbn) {
      query += `author_id ='${isbn}'`;
    }
    if (author_id) {
      query += `author_id ='${author_id}'`;
    }
    query += `FROM book where id =${id}`;

    selectRows = await dbPool.query(query);

    if (selectRows.length) {
      book = JSON.parse(selectRows);
    }
    res.status(200);
    res.send(book);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
});
app.delete("/book/:id", async (req, res) => {
  const { id } = req.params;
  try {
    selectRows = await dbPool.query(`DELETE FROM book where id = ${id}`);
    res.status(200);
    res.send(id);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
});

app.listen("4000");
console.log(
  `Listening on port: 4000, wait for the development server to be up...`
);
