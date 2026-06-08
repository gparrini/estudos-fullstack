--criar - create
--ler - read
--atualizar - update
--apagar - delete

--criar
INSERT INTO users (name, surname)
VALUES ('João', 'Martins');


--ler
SELECT id,name,surname
FROM users
WHERE surname = 'Lira';