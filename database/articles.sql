CREATE DATABASE mean_crud;

USE mean_crud;

CREATE TABLE article (
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255),
    category VARCHAR(100)
    created_on TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

DESCRIBE article;

INSERT INTO article (title, category) VALUES ('Migration', 'DEVOPS');
INSERT INTO article (title, category) VALUES ('Disaster Recovery', 'DEVOPS');
INSERT INTO article (title, category) VALUES ('Perform Cost Analytics', 'General');
INSERT INTO article (title, category) VALUES ('Monitor you cloud activity', 'Analytics');

