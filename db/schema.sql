CREATE DATABASE burger_db;

USE burger_db;

DROP TABLE IF EXISTS burgers;


CREATE TABLE burgers(
id INT NOT NULL AUTO_INCREMENT,
burger_name VARCHAR(30)NOT NULL,
devoured BOOLEAN DEFAULT false,
date_ DATETIME,
PRIMARY KEY (id)
); 