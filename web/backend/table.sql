-- Table: public.users

-- DROP TABLE public.users;

CREATE TABLE public.users
(
    id integer NOT NULL,
    name character varying(40),
    surname character varying(40),
    email character varying(50),
    password character varying(32),
    dateofbirth date,
    sex character varying(10),
    technologies character varying ,
    CONSTRAINT users_pkey PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE public.users
    OWNER to postgres;
