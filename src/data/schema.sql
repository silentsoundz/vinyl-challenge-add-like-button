drop table if exists albums CASCADE;
drop table if exists users CASCADE;


CREATE TABLE albums (
  id SERIAL primary key,
  title VARCHAR(255) NOT NULL,
  artist VARCHAR(255) NOT NULL
);

CREATE TABLE users (
  id serial primary key,
  name text not null,
  email text not null,
  password text not null
);

CREATE TABLE AlbumLikes (
  user_id integer REFERENCES users(id),
  albums_id integer REFERENCES albums(id)
);

CREATE TABLE "session" (
  "sid" varchar NOT NULL COLLATE "default",
	"sess" json NOT NULL,
	"expire" timestamp(6) NOT NULL
)
WITH (OIDS=FALSE);
ALTER TABLE "session" ADD CONSTRAINT "session_pkey" PRIMARY KEY ("sid") NOT DEFERRABLE INITIALLY IMMEDIATE;
