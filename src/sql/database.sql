CREATE DATABASE bd_category;

USE bd_category;

SHOW TABLES;

CREATE TABLE category (
  id_category INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  name_category VARCHAR(100),
  description_category TEXT,
  data_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

DESCRIBE category;

INSERT INTO category (name_category, description_category) values ('Categoria 1', 'descripcion de la categoria 1');

SELECT * FROM category;
