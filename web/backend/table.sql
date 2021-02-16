-- Table: public.users

-- DROP TABLE public.users;

CREATE TABLE public.users
(
    id integer NOT NULL DEFAULT nextval('users_id_seq'::regclass),
    name character varying(40) COLLATE pg_catalog."default",
    surname character varying(40) COLLATE pg_catalog."default",
    email character varying(50) COLLATE pg_catalog."default",
    password character varying(32) COLLATE pg_catalog."default",
    dateofbirth date,
    sex character varying(10) COLLATE pg_catalog."default",
    technologies character varying COLLATE pg_catalog."default",
    CONSTRAINT users_pkey PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE public.users
    OWNER to postgres;