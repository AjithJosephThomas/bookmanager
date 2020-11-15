CREATE TABLE if not exists author (
  id bigint NOT NULL AUTO_INCREMENT,
  first_name varchar (255) NOT NULL,
  last_name varchar (255) NOT NULL,
  PRIMARY KEY (id)
);
CREATE TABLE if not exists book (
  id bigint NOT NULL AUTO_INCREMENT,
  name varchar (255) NOT NULL,
  isbn varchar (12) NOT NULL,
  author_id bigint NOT NULL,
  PRIMARY KEY (id),
  FOREIGN key (author_id) REFERENCES author(id)
);