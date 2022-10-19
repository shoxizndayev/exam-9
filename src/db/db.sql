create EXTENSION if not exists "uuid-ossp";

DROP TABLE IF EXISTS company;

create table company(
    id uuid not null default uuid_generate_v4() primary key,
    company_name varchar(64) not null
);

insert into company(company_name) values('Murad Buildings');

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

insert into projects( projects_name, price_kv, project_location, company_id ) values('Nest One', 3000000, 'Xalqlar dostligi metro', '208f7f7d-02a6-4491-9f78-311007cb26b8');


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

insert into rooms( rooms_value, size, project_id ) values( 3, 90, '119f6640-85f6-4da3-9aca-70f188a87362' );



DROP TABLE IF EXISTS banks;

create table banks(
    id uuid not null default uuid_generate_v4(),
    bank_name varchar(32) not null,
    cash_limit int not null,
    duration int not null,
    starting_pay int not null
);

insert into banks( bank_name, cash_limit, duration, starting_pay ) values( 'Aloqa Bank', 5000000, 12, 6 );


DROP TABLE IF EXISTS users;

create table users(
    id uuid not null default uuid_generate_v4(),
    user_name varchar(32) not null,
    user_password int not null
);


create table pay_time(
    id uuid not null default uuid_generate_v4(),
    pay_time int not null
);

insert into pay_time(pay_time) values(10),
(15),
(20);



select * from projects where company_id = '208f7f7d-02a6-4491-9f78-311007cb26b8';