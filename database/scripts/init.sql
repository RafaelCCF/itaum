CREATE DATABASE IF NOT EXISTS beers;
USE beers;
CREATE TABLE IF NOT EXISTS beers(
    `Id` int NOT NULL,
    `Name` varchar(100),
    `Brewery` varchar(100),
    `Country` varchar(30),
    `Price` double,
    `Currency` varchar(50),
    PRIMARY KEY (`id`)
);
INSERT INTO beers (`Id`, `Name`,  `Brewery`, `Country` , `Price` , `Currency`) VALUES (1, "Golden", "Kross", "Chile", 10.5, "EUR");