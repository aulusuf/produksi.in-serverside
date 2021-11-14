--
-- PostgreSQL database dump
--

-- Dumped from database version 14.1
-- Dumped by pg_dump version 14.1

-- Started on 2021-11-14 16:37:21

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
-- TOC entry 210 (class 1259 OID 22019)
-- Name: categories; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.categories (
    id integer NOT NULL,
    name character varying(255),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public.categories OWNER TO postgres;

--
-- TOC entry 209 (class 1259 OID 22018)
-- Name: categories_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.categories_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.categories_id_seq OWNER TO postgres;

--
-- TOC entry 3416 (class 0 OID 0)
-- Dependencies: 209
-- Name: categories_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.categories_id_seq OWNED BY public.categories.id;


--
-- TOC entry 221 (class 1259 OID 22071)
-- Name: material_requests; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.material_requests (
    id integer NOT NULL,
    "productId" integer,
    "materialId" integer,
    "statusId" integer,
    jumlah integer,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "userId" integer
);


ALTER TABLE public.material_requests OWNER TO postgres;

--
-- TOC entry 220 (class 1259 OID 22070)
-- Name: material_requests_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.material_requests_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.material_requests_id_seq OWNER TO postgres;

--
-- TOC entry 3417 (class 0 OID 0)
-- Dependencies: 220
-- Name: material_requests_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.material_requests_id_seq OWNED BY public.material_requests.id;


--
-- TOC entry 214 (class 1259 OID 22033)
-- Name: materials; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.materials (
    id integer NOT NULL,
    name character varying(255),
    stock integer,
    cost integer,
    "typeId" integer,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public.materials OWNER TO postgres;

--
-- TOC entry 213 (class 1259 OID 22032)
-- Name: materials_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.materials_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.materials_id_seq OWNER TO postgres;

--
-- TOC entry 3418 (class 0 OID 0)
-- Dependencies: 213
-- Name: materials_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.materials_id_seq OWNED BY public.materials.id;


--
-- TOC entry 225 (class 1259 OID 22105)
-- Name: product_assignments; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.product_assignments (
    id integer NOT NULL,
    "productId" integer,
    amount integer,
    cost integer,
    "statusId" integer,
    "assignmentId" integer,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public.product_assignments OWNER TO postgres;

--
-- TOC entry 224 (class 1259 OID 22104)
-- Name: product_assignments_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.product_assignments_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.product_assignments_id_seq OWNER TO postgres;

--
-- TOC entry 3419 (class 0 OID 0)
-- Dependencies: 224
-- Name: product_assignments_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.product_assignments_id_seq OWNED BY public.product_assignments.id;


--
-- TOC entry 223 (class 1259 OID 22093)
-- Name: products; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.products (
    id integer NOT NULL,
    name character varying(255),
    stock integer,
    "categoryId" integer,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public.products OWNER TO postgres;

--
-- TOC entry 222 (class 1259 OID 22092)
-- Name: products_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.products_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.products_id_seq OWNER TO postgres;

--
-- TOC entry 3420 (class 0 OID 0)
-- Dependencies: 222
-- Name: products_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.products_id_seq OWNED BY public.products.id;


--
-- TOC entry 226 (class 1259 OID 22121)
-- Name: products_materials; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.products_materials (
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "productId" integer NOT NULL,
    "materialId" integer NOT NULL
);


ALTER TABLE public.products_materials OWNER TO postgres;

--
-- TOC entry 217 (class 1259 OID 22051)
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
-- TOC entry 216 (class 1259 OID 22045)
-- Name: statuses; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.statuses (
    id integer NOT NULL,
    name character varying(255),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public.statuses OWNER TO postgres;

--
-- TOC entry 215 (class 1259 OID 22044)
-- Name: statuses_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.statuses_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.statuses_id_seq OWNER TO postgres;

--
-- TOC entry 3421 (class 0 OID 0)
-- Dependencies: 215
-- Name: statuses_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.statuses_id_seq OWNED BY public.statuses.id;


--
-- TOC entry 212 (class 1259 OID 22026)
-- Name: types; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.types (
    id integer NOT NULL,
    name character varying(255),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public.types OWNER TO postgres;

--
-- TOC entry 211 (class 1259 OID 22025)
-- Name: types_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.types_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.types_id_seq OWNER TO postgres;

--
-- TOC entry 3422 (class 0 OID 0)
-- Dependencies: 211
-- Name: types_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.types_id_seq OWNED BY public.types.id;


--
-- TOC entry 227 (class 1259 OID 22136)
-- Name: user_productAssignment; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."user_productAssignment" (
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "userId" integer NOT NULL,
    "assignmentId" integer NOT NULL
);


ALTER TABLE public."user_productAssignment" OWNER TO postgres;

--
-- TOC entry 219 (class 1259 OID 22057)
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    id integer NOT NULL,
    name character varying(255),
    email character varying(255),
    username character varying(255),
    password character varying(255),
    "roleId" integer,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public.users OWNER TO postgres;

--
-- TOC entry 218 (class 1259 OID 22056)
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
-- TOC entry 3423 (class 0 OID 0)
-- Dependencies: 218
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- TOC entry 3211 (class 2604 OID 22022)
-- Name: categories id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.categories ALTER COLUMN id SET DEFAULT nextval('public.categories_id_seq'::regclass);


--
-- TOC entry 3216 (class 2604 OID 22074)
-- Name: material_requests id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.material_requests ALTER COLUMN id SET DEFAULT nextval('public.material_requests_id_seq'::regclass);


--
-- TOC entry 3213 (class 2604 OID 22036)
-- Name: materials id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.materials ALTER COLUMN id SET DEFAULT nextval('public.materials_id_seq'::regclass);


--
-- TOC entry 3218 (class 2604 OID 22108)
-- Name: product_assignments id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.product_assignments ALTER COLUMN id SET DEFAULT nextval('public.product_assignments_id_seq'::regclass);


--
-- TOC entry 3217 (class 2604 OID 22096)
-- Name: products id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.products ALTER COLUMN id SET DEFAULT nextval('public.products_id_seq'::regclass);


--
-- TOC entry 3214 (class 2604 OID 22048)
-- Name: statuses id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.statuses ALTER COLUMN id SET DEFAULT nextval('public.statuses_id_seq'::regclass);


--
-- TOC entry 3212 (class 2604 OID 22029)
-- Name: types id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.types ALTER COLUMN id SET DEFAULT nextval('public.types_id_seq'::regclass);


--
-- TOC entry 3215 (class 2604 OID 22060)
-- Name: users id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- TOC entry 3393 (class 0 OID 22019)
-- Dependencies: 210
-- Data for Name: categories; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.categories (id, name, "createdAt", "updatedAt") FROM stdin;
\.


--
-- TOC entry 3404 (class 0 OID 22071)
-- Dependencies: 221
-- Data for Name: material_requests; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.material_requests (id, "productId", "materialId", "statusId", jumlah, "createdAt", "updatedAt", "userId") FROM stdin;
\.


--
-- TOC entry 3397 (class 0 OID 22033)
-- Dependencies: 214
-- Data for Name: materials; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.materials (id, name, stock, cost, "typeId", "createdAt", "updatedAt") FROM stdin;
\.


--
-- TOC entry 3408 (class 0 OID 22105)
-- Dependencies: 225
-- Data for Name: product_assignments; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.product_assignments (id, "productId", amount, cost, "statusId", "assignmentId", "createdAt", "updatedAt") FROM stdin;
\.


--
-- TOC entry 3406 (class 0 OID 22093)
-- Dependencies: 223
-- Data for Name: products; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.products (id, name, stock, "categoryId", "createdAt", "updatedAt") FROM stdin;
\.


--
-- TOC entry 3409 (class 0 OID 22121)
-- Dependencies: 226
-- Data for Name: products_materials; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.products_materials ("createdAt", "updatedAt", "productId", "materialId") FROM stdin;
\.


--
-- TOC entry 3400 (class 0 OID 22051)
-- Dependencies: 217
-- Data for Name: roles; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.roles (id, name, "createdAt", "updatedAt") FROM stdin;
1	Manajemen	2021-11-14 16:26:46.483+07	2021-11-14 16:26:46.483+07
2	Supervisor	2021-11-14 16:26:46.484+07	2021-11-14 16:26:46.484+07
3	Tim Produksi	2021-11-14 16:26:46.484+07	2021-11-14 16:26:46.484+07
\.


--
-- TOC entry 3399 (class 0 OID 22045)
-- Dependencies: 216
-- Data for Name: statuses; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.statuses (id, name, "createdAt", "updatedAt") FROM stdin;
\.


--
-- TOC entry 3395 (class 0 OID 22026)
-- Dependencies: 212
-- Data for Name: types; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.types (id, name, "createdAt", "updatedAt") FROM stdin;
\.


--
-- TOC entry 3410 (class 0 OID 22136)
-- Dependencies: 227
-- Data for Name: user_productAssignment; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."user_productAssignment" ("createdAt", "updatedAt", "userId", "assignmentId") FROM stdin;
\.


--
-- TOC entry 3402 (class 0 OID 22057)
-- Dependencies: 219
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users (id, name, email, username, password, "roleId", "createdAt", "updatedAt") FROM stdin;
1	Farhan	farhan@mail.id	farhan	$2a$10$sVv13GZbILkxXG3jNaaXOenGmKVZmlIgonJSa.TV/ciB0gsVXWA4m	1	2021-11-14 16:26:46.485+07	2021-11-14 16:26:46.485+07
2	Bambang	bambang@mail.id	bambang	$2a$10$sVv13GZbILkxXG3jNaaXOenGmKVZmlIgonJSa.TV/ciB0gsVXWA4m	2	2021-11-14 16:26:46.485+07	2021-11-14 16:26:46.485+07
3	John	john@mail.id	john	$2a$10$sVv13GZbILkxXG3jNaaXOenGmKVZmlIgonJSa.TV/ciB0gsVXWA4m	3	2021-11-14 16:26:46.486+07	2021-11-14 16:26:46.486+07
\.


--
-- TOC entry 3424 (class 0 OID 0)
-- Dependencies: 209
-- Name: categories_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.categories_id_seq', 1, false);


--
-- TOC entry 3425 (class 0 OID 0)
-- Dependencies: 220
-- Name: material_requests_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.material_requests_id_seq', 1, false);


--
-- TOC entry 3426 (class 0 OID 0)
-- Dependencies: 213
-- Name: materials_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.materials_id_seq', 1, false);


--
-- TOC entry 3427 (class 0 OID 0)
-- Dependencies: 224
-- Name: product_assignments_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.product_assignments_id_seq', 1, false);


--
-- TOC entry 3428 (class 0 OID 0)
-- Dependencies: 222
-- Name: products_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.products_id_seq', 1, false);


--
-- TOC entry 3429 (class 0 OID 0)
-- Dependencies: 215
-- Name: statuses_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.statuses_id_seq', 1, false);


--
-- TOC entry 3430 (class 0 OID 0)
-- Dependencies: 211
-- Name: types_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.types_id_seq', 1, false);


--
-- TOC entry 3431 (class 0 OID 0)
-- Dependencies: 218
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.users_id_seq', 3, true);


--
-- TOC entry 3220 (class 2606 OID 22024)
-- Name: categories categories_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.categories
    ADD CONSTRAINT categories_pkey PRIMARY KEY (id);


--
-- TOC entry 3232 (class 2606 OID 22076)
-- Name: material_requests material_requests_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.material_requests
    ADD CONSTRAINT material_requests_pkey PRIMARY KEY (id);


--
-- TOC entry 3224 (class 2606 OID 22038)
-- Name: materials materials_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.materials
    ADD CONSTRAINT materials_pkey PRIMARY KEY (id);


--
-- TOC entry 3236 (class 2606 OID 22110)
-- Name: product_assignments product_assignments_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.product_assignments
    ADD CONSTRAINT product_assignments_pkey PRIMARY KEY (id);


--
-- TOC entry 3238 (class 2606 OID 22125)
-- Name: products_materials products_materials_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.products_materials
    ADD CONSTRAINT products_materials_pkey PRIMARY KEY ("productId", "materialId");


--
-- TOC entry 3234 (class 2606 OID 22098)
-- Name: products products_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_pkey PRIMARY KEY (id);


--
-- TOC entry 3228 (class 2606 OID 22055)
-- Name: roles roles_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.roles
    ADD CONSTRAINT roles_pkey PRIMARY KEY (id);


--
-- TOC entry 3226 (class 2606 OID 22050)
-- Name: statuses statuses_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.statuses
    ADD CONSTRAINT statuses_pkey PRIMARY KEY (id);


--
-- TOC entry 3222 (class 2606 OID 22031)
-- Name: types types_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.types
    ADD CONSTRAINT types_pkey PRIMARY KEY (id);


--
-- TOC entry 3240 (class 2606 OID 22140)
-- Name: user_productAssignment user_productAssignment_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."user_productAssignment"
    ADD CONSTRAINT "user_productAssignment_pkey" PRIMARY KEY ("userId", "assignmentId");


--
-- TOC entry 3230 (class 2606 OID 22064)
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- TOC entry 3243 (class 2606 OID 22077)
-- Name: material_requests material_requests_materialId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.material_requests
    ADD CONSTRAINT "material_requests_materialId_fkey" FOREIGN KEY ("materialId") REFERENCES public.materials(id) ON UPDATE CASCADE;


--
-- TOC entry 3244 (class 2606 OID 22082)
-- Name: material_requests material_requests_statusId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.material_requests
    ADD CONSTRAINT "material_requests_statusId_fkey" FOREIGN KEY ("statusId") REFERENCES public.statuses(id) ON UPDATE CASCADE;


--
-- TOC entry 3245 (class 2606 OID 22087)
-- Name: material_requests material_requests_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.material_requests
    ADD CONSTRAINT "material_requests_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- TOC entry 3241 (class 2606 OID 22039)
-- Name: materials materials_typeId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.materials
    ADD CONSTRAINT "materials_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES public.types(id) ON UPDATE CASCADE;


--
-- TOC entry 3247 (class 2606 OID 22111)
-- Name: product_assignments product_assignments_productId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.product_assignments
    ADD CONSTRAINT "product_assignments_productId_fkey" FOREIGN KEY ("productId") REFERENCES public.products(id) ON UPDATE CASCADE;


--
-- TOC entry 3248 (class 2606 OID 22116)
-- Name: product_assignments product_assignments_statusId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.product_assignments
    ADD CONSTRAINT "product_assignments_statusId_fkey" FOREIGN KEY ("statusId") REFERENCES public.statuses(id) ON UPDATE CASCADE;


--
-- TOC entry 3246 (class 2606 OID 22099)
-- Name: products products_categoryId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.products
    ADD CONSTRAINT "products_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES public.categories(id) ON UPDATE CASCADE;


--
-- TOC entry 3250 (class 2606 OID 22131)
-- Name: products_materials products_materials_materialId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.products_materials
    ADD CONSTRAINT "products_materials_materialId_fkey" FOREIGN KEY ("materialId") REFERENCES public.materials(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- TOC entry 3249 (class 2606 OID 22126)
-- Name: products_materials products_materials_productId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.products_materials
    ADD CONSTRAINT "products_materials_productId_fkey" FOREIGN KEY ("productId") REFERENCES public.products(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- TOC entry 3252 (class 2606 OID 22146)
-- Name: user_productAssignment user_productAssignment_assignmentId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."user_productAssignment"
    ADD CONSTRAINT "user_productAssignment_assignmentId_fkey" FOREIGN KEY ("assignmentId") REFERENCES public.product_assignments(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- TOC entry 3251 (class 2606 OID 22141)
-- Name: user_productAssignment user_productAssignment_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."user_productAssignment"
    ADD CONSTRAINT "user_productAssignment_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- TOC entry 3242 (class 2606 OID 22065)
-- Name: users users_roleId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT "users_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES public.roles(id) ON UPDATE CASCADE;


-- Completed on 2021-11-14 16:37:21

--
-- PostgreSQL database dump complete
--

