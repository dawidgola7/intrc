const express = require("express");
const app = express();
const port = 5000;
const cors = require("cors");
const pool = require("./db");

//middleware
app.use(cors());
app.use(express.json());

app.post("/form_main", async (req, res) => {
  try {
    const {
      name,
      surname,
      email,
      company,
      personal_data,
      marketing,
    } = req.body;

    const insert = await pool.query(
      "INSERT INTO form_main (name, surname, email, company, personal_data, marketing) VALUES($1, $2, $3, $4, $5, $6) RETURNING *",
      [name, surname, email, company, personal_data, marketing]
    );
    res.json(insert.rows[0]);

    res.status(200);
  } catch (error) {
    console.error(error.message);
    res.status(500);
  }
});

app.post("/form_case_study", async (req, res) => {
  try {
    const { name, email, personal_data, marketing } = req.body;

    const insert = await pool.query(
      "INSERT INTO form_case_study (name, email, personal_data, marketing) VALUES($1, $2, $3, $4) RETURNING *",
      [name, email, personal_data, marketing]
    );

    res.json(insert.rows[0]);

    res.status(200);
  } catch (error) {
    console.error(error.message);
    res.status(500);
  }
});

app.post("/form_contact", async (req, res) => {
  try {
    const {
      name,
      surname,
      email,
      company,
      personal_data,
      marketing,
    } = req.body;

    const insert = await pool.query(
      "INSERT INTO form_contact (name, surname, email, company, personal_data, marketing) VALUES($1, $2, $3, $4, $5, $6) RETURNING *",
      [name, surname, email, company, personal_data, marketing]
    );

    res.json(insert.rows[0]);

    res.status(200);
  } catch (error) {
    console.error(error.message);
    res.status(500);
  }
});

app.listen(port, () => {
  console.log("server has start in port");
});
