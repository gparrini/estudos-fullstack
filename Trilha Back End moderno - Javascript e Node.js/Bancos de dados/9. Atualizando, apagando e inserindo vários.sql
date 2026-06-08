--criar - create
--ler - read
--atualizar - update
--apagar - delete

--criar
INSERT INTO users (name, surname)
VALUES ('Marcus', 'Calvancati');


--ler
SELECT id,name,surname
FROM users
WHERE surname = 'Lira';

--atualizar
UPDATE users
SET name='Marcus', surname='Cavalcanti'
WHERE id=4;

--apagar
DELETE FROM users
WHERE id=4; 


--criar múltiplos
INSERT INTO users (name, surname)
VALUES ('Daniel', 'Porto'),
		('Alon', 'Pinheiro'),
		('João', 'Lira'),
		('Marcus', 'Cavalcanti'),
		('João', 'Martins');