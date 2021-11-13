--
-- PostgreSQL database dump
--

-- Dumped from database version 14.1
-- Dumped by pg_dump version 14.1

-- Started on 2021-11-13 16:00:55

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 211 (class 1259 OID 16462)
-- Name: roles; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.roles (
    id integer NOT NULL,
    name character varying(255),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public.roles OWNER TO postgres;

--
-- TOC entry 212 (class 1259 OID 16467)
-- Name: user_roles; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.user_roles (
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "roleId" integer NOT NULL,
    "userId" integer NOT NULL
);


ALTER TABLE public.user_roles OWNER TO postgres;

--
-- TOC entry 210 (class 1259 OID 16454)
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    id integer NOT NULL,
    username character varying(255),
    email character varying(255),
    password character varying(255),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public.users OWNER TO postgres;

--
-- TOC entry 209 (class 1259 OID 16453)
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_id_seq OWNER TO postgres;

--
-- TOC entry 3329 (class 0 OID 0)
-- Dependencies: 209
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- TOC entry 3172 (class 2604 OID 16457)
-- Name: users id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- TOC entry 3322 (class 0 OID 16462)
-- Dependencies: 211
-- Data for Name: roles; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.roles (id, name, "createdAt", "updatedAt") FROM stdin;
1	Manajemen	2021-11-13 15:08:49.4+07	2021-11-13 15:08:49.4+07
2	Supervisor	2021-11-13 15:08:49.402+07	2021-11-13 15:08:49.402+07
3	Tim Produksi	2021-11-13 15:08:49.402+07	2021-11-13 15:08:49.402+07
\.


--
-- TOC entry 3323 (class 0 OID 16467)
-- Dependencies: 212
-- Data for Name: user_roles; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.user_roles ("createdAt", "updatedAt", "roleId", "userId") FROM stdin;
\.


--
-- TOC entry 3321 (class 0 OID 16454)
-- Dependencies: 210
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users (id, username, email, password, "createdAt", "updatedAt") FROM stdin;
1	laem	laem@mail.id	12345678	2021-11-13 15:08:49.402+07	2021-11-13 15:08:49.402+07
2	resdzmon	resdzmon@mail.id	12345678	2021-11-13 15:08:49.403+07	2021-11-13 15:08:49.403+07
3	budy	budy@mail.id	12345678	2021-11-13 15:08:49.403+07	2021-11-13 15:08:49.403+07
\.


--
-- TOC entry 3330 (class 0 OID 0)
-- Dependencies: 209
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.users_id_seq', 1, false);


--
-- TOC entry 3176 (class 2606 OID 16466)
-- Name: roles roles_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.roles
    ADD CONSTRAINT roles_pkey PRIMARY KEY (id);


--
-- TOC entry 3178 (class 2606 OID 16471)
-- Name: user_roles user_roles_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_roles
    ADD CONSTRAINT user_roles_pkey PRIMARY KEY ("roleId", "userId");


--
-- TOC entry 3174 (class 2606 OID 16461)
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- TOC entry 3179 (class 2606 OID 16472)
-- Name: user_roles user_roles_roleId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_roles
    ADD CONSTRAINT "user_roles_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES public.roles(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- TOC entry 3180 (class 2606 OID 16477)
-- Name: user_roles user_roles_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_roles
    ADD CONSTRAINT "user_roles_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id) ON UPDATE CASCADE ON DELETE CASCADE;


-- Completed on 2021-11-13 16:00:55

--
-- PostgreSQL database dump complete
--

