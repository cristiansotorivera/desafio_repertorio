DROP TABLE IF EXISTS repertorio;

CREATE TABLE CANCIONES(
	 ID SERIAL,
	TITULO VARCHAR(50),
	ARTISTA VARCHAR (50),
	TONO VARCHAR (10)
);
--seeder
INSERT INTO CANCIONES (TITULO,ARTISTA,TONO)VALUES
('Lithium', 'Nirvana', 'Em'),
('No One Knows','Queens of the stone age','Gm');

SELECT * FROM CANCIONES;