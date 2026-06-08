-- DROP TABLE IF EXISTS public.users;

CREATE TABLE IF NOT EXISTS public.users (
	id SERIAL PRIMARY KEY,
	name TEXT,
	surname TEXT
);

INSERT INTO users (name, surname) 
VALUES 
	('Daniel', 'Porto'),
	('Alon', 'Pinheiro'),
	('João', 'Lira'),
	('Marcus', 'Cavalcanti');

SELECT * FROM users;