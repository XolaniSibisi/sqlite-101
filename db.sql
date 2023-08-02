-- DML (database initialisation)
CREATE table greetings(
   id integer PRIMARY KEY AUTOINCREMENT,
   language text,
   greeting text
);
-- DML (database manipulation language)
SELECT *
FROM greetings;

INSERT INTO greetings(language, greeting) VALUES('IsiZulu', 'Sawubona');

--add two more languages
INSERT INTO greetings(language, greeting) VALUES('IsiXhosa', 'Molo');
INSERT INTO greetings(language, greeting) VALUES('English', 'Hello');

