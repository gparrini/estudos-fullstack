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


BEGIN TRANSACTION;

--atualizar
UPDATE users
SET name='Marcus', surname='Cavalcanti'
WHERE id=4;

ROLLBACK;
--COMMIT;

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



CREATE TABLE IF NOT EXISTS public.purchases (
	id SERIAL PRIMARY KEY,
	purchase_date DATE NOT NULL,
	user_id INTEGER,
	CONSTRAINT fk_user
		FOREIGN KEY(user_id)
			REFERENCES users(id)
);


INSERT INTO purchases (purchase_date, user_id)
VALUES ('2004-10-19 10:23:54', 13);

SELECT * FROM purchases
