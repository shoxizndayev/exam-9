create EXTENSION if not exists "uuid-ossp";

DROP TABLE IF EXISTS company;

create table company(
    id uuid not null default uuid_generate_v4() primary key,
    company_name varchar(64) not null
);

insert into company(company_name) values('Murad Buildings'),
('Olmazor sity');

DROP TABLE IF EXISTS projects;

create table projects(
    id uuid not null default uuid_generate_v4() primary key,
    projects_name varchar(64) not null,
    price_kv int not null,
    project_location varchar(128) not null,
    company_id uuid,
    foreign key(company_id)
    references company(id)
    on delete cascade
);

insert into projects( projects_name, price_kv, project_location, company_id ) values('Nest One', 3000000, 'Xalqlar dostligi metro', '00a25926-22e5-428d-bc37-e4575f07eeec'),
('Felecita', 4000000, 'Yakkasaroy', '00a25926-22e5-428d-bc37-e4575f07eeec'),
('Bizning uylar', 1000000, 'Sergeli', 'f1ce6473-208c-47e9-86b2-c909e5311493'),
('Bizning mahalla', 900000, 'Chilonzor', 'f1ce6473-208c-47e9-86b2-c909e5311493');


DROP TABLE IF EXISTS rooms;

create table rooms(
    id uuid not null default uuid_generate_v4(),
    rooms_value int not null,
    size int not null,
    project_id uuid,
    foreign key(project_id)
    references projects(id)
    on delete cascade
);

insert into rooms( rooms_value, size, project_id ) values( 3, 90, '3625fd48-e2e1-4a8e-aaa0-0d10a0cfc223' ),
(1, 45, '3625fd48-e2e1-4a8e-aaa0-0d10a0cfc223'),
(2, 65, '3625fd48-e2e1-4a8e-aaa0-0d10a0cfc223'),
( 3, 95, '53a3edfe-b460-4ae8-b7bc-4517ed6513b2'),
(1, 40, '53a3edfe-b460-4ae8-b7bc-4517ed6513b2'),
(2, 60, '53a3edfe-b460-4ae8-b7bc-4517ed6513b2'),
(1, 40, 'dae43486-79e7-4d5b-b018-69ef6298bf09'),
(2, 60, 'dae43486-79e7-4d5b-b018-69ef6298bf09'),
(1, 40, '69e09065-a854-4467-b5dc-8f6c66cad47c'),
(2, 60, '69e09065-a854-4467-b5dc-8f6c66cad47c');




DROP TABLE IF EXISTS banks;

create table banks(
    id uuid not null default uuid_generate_v4() primary key,
    bank_name varchar(32) not null,
    cash_limit int not null,
    bank_servise int not null,
    starting_pay int not null
);

insert into banks( bank_name, cash_limit, bank_servise, starting_pay ) values( 'Aloqa Bank', 450000000, 12, 6 ),
( 'Hamkor bank', 270000000, 10, 5 ),
( 'Ipoteka bank', 300000000, 15, 4 ),
( 'Xalq bank', 500000000, 15, 7 );


DROP TABLE IF EXISTS users;

create table users(
    id uuid not null default uuid_generate_v4(),
    user_name varchar(32) not null,
    user_password int not null
);

insert into users(user_name, user_password) values('xavi', 12345678);

DROP TABLE IF EXISTS pay_time;

create table pay_time(
    id uuid not null default uuid_generate_v4(),
    pay_time int not null,
    bank_id uuid,
    foreign key(bank_id)
    references banks(id)
    on delete cascade
);


insert into pay_time(pay_time, bank_id) values(10, '1956b498-c016-4022-a070-0500ebcfa20f'),
(15, '1956b498-c016-4022-a070-0500ebcfa20f'),
(10, 'ef9d7ec8-7d11-4318-9e6a-5921b438644e'),
(15, 'ef9d7ec8-7d11-4318-9e6a-5921b438644e'),
(10, 'ec9a3c6b-15c3-47db-9f70-f899fb80f766'),
(15, 'ec9a3c6b-15c3-47db-9f70-f899fb80f766'),
(10, 'ad3970bd-c26d-4652-a380-23d46c78f262'),
(15, 'ad3970bd-c26d-4652-a380-23d46c78f262');

select
  *
from
  banks as b
  inner join pay_time as t on t.bank_id = b.id
where
  t.pay_time = 10
  and b.cash_limit >= (
    select
      r.size * p.price_kv as price
    from
      rooms as r
      inner join projects as p on r.project_id = p.id
    where
      r.id = 'db05c6e6-bea3-4cfc-a734-34e09d9ad8a8'
  );

insert into
  pay_time(pay_time, bank_id)
values
  (10, '5265db79-84e8-41a7-a649-0edce5221b9b');


select * from projects where company_id = '208f7f7d-02a6-4491-9f78-311007cb26b8';