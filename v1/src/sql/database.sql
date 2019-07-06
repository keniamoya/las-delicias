CREATE DATABASE bd_category;

USE bd_category;

SHOW TABLES;

/* Categories */ 
CREATE TABLE category (
  id_category INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  name_category VARCHAR(100),
  description_category TEXT,
  imagen VARCHAR(100),
  data_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

DESCRIBE category;

INSERT INTO category (name_category, description_category, imagen) values 
('Categoria 1', 'descripcion de la categoria 1', 'carousel1.jpg');

SELECT * FROM category;

/* Products */

CREATE TABLE products (
  id_product INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  name_product VARCHAR(100),
  description_product TEXT,
  imagen VARCHAR(100),
  data_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

DESCRIBE products;

INSERT INTO Category (category_Name, category_Image) values 
('Categoria 1', 'carousel1.jpg');

INSERT INTO products (name_product, description_product, imagen) values 
('Producto 4', 'descripcion del producto 4', 'product4.jpg');


SELECT * FROM products;
