CREATE TABLE if not exists author (
  id bigint NOT NULL AUTO_INCREMENT,
  first_name varchar (255) NOT NULL,
  last_name varchar (255) NOT NULL,
  PRIMARY KEY (id)
);

insert into author (first_name, last_name) values("Charles", "Dickens");
insert into author (first_name, last_name) values("Leo", "Tolstoy");
insert into author (first_name, last_name) values("John","Milton");

CREATE TABLE if not exists book (
  id bigint NOT NULL AUTO_INCREMENT,
  name varchar (255) NOT NULL,
  isbn varchar (12) NOT NULL,
  author_id bigint NOT NULL,
  PRIMARY KEY (id),
  FOREIGN key (author_id) REFERENCES author(id)
);

insert into book (name, isbn,author_id) values("Oliver Twist","2343",1);
insert into book (name, isbn,author_id) values("Nicholas Nickelby","343",1);
insert into book (name, isbn,author_id) values("War and Peace","34443",2);