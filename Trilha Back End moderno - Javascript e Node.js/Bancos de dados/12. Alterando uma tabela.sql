SELECT * FROM purchases;

BEGIN TRANSACTION;

ALTER TABLE purchases
ALTER COLUMN purchase_date TYPE TIMESTAMP;

--COMMIT;

UPDATE purchases
SET purchase_date = '2004-10-19 10:23:54'
WHERE id=1;