const express = require("express");
const app = express();
const port = 5000;
const cors = require("cors");
const pool = require("./db");

//middleware
app.use(cors());
app.use(express.json());

//ROUTES

//create todo

app.post("/todos", async (req, res) => {
  try {
    console.log(req.body);
    const { description } = req.body;
    const newTodo = await pool.query(
      "INSERT INTO todo (description) VALUES($1) RETURNING *",
      [description]
    );
    console.log(newTodo.rows);
    res.json(newTodo.rows[0]);
    res.status(200);
  } catch (error) {
    console.error(error.message);
  }
});