
CREATE DATABASE intrack;

CREATE TABLE form_main(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    surname VARCHAR(255),
    email VARCHAR(255),
    company VARCHAR(255),
    personal_data VARCHAR(255),
    marketing VARCHAR(255)
);

CREATE TABLE form_case_study(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    email VARCHAR(255),
    personal_data VARCHAR(255),
    marketing VARCHAR(255)
);

CREATE TABLE form_contact(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    surname VARCHAR(255),
    email VARCHAR(255),
    company VARCHAR(255),
    personal_data VARCHAR(255),
    marketing VARCHAR(255)
);