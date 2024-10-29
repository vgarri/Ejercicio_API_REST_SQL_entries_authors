




-- PAra borrar en cascada hemos sacado el diagrama ERD de pgadmin4
-- Al identificar la FK y la dependencia de tablas, alteramos la tabla entries para que borre en cascada todos los datos de entries 
--que tengan referencia al id autor de authors.

ALTER TABLE entries
ADD CONSTRAINT id_author
FOREIGN KEY (id_author)
REFERENCES authors(id_author)
ON DELETE CASCADE;


-- la query para borrar autor por email:
DELETE FROM authors 
WHERE id_author = 
(SELECT id_author 
FROM authors 
WHERE email = $1);