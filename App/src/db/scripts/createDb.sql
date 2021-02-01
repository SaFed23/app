create database if not exists journal;
use journal;

drop table if exists journal;
drop table if exists pupil;
drop table if exists lesson;
drop table if exists teacher;

create table if not exists pupil (
	id int unsigned auto_increment primary key,
    first_name varchar(50) not null,
    last_name varchar(50) not null,
    age int not null,
    grade int not null default 1
);

create table if not exists teacher (
	id int unsigned auto_increment primary key,
    first_name varchar(50) not null,
    last_name varchar(50) not null
);

create table if not exists lesson (
	id int unsigned auto_increment primary key,
    title varchar(50) not null,
    teacher_id int unsigned not null,
    foreign key (teacher_id) references teacher (id) on delete cascade
);

create table if not exists journal (
	id int unsigned auto_increment primary key,
	pupil_id int unsigned not null,
    mark int unsigned not null,
    lesson_id int unsigned not null,
    grade int unsigned,
    date_of_note date not null,
    is_exam boolean not null,
    foreign key (pupil_id) references pupil (id) on delete cascade,
    foreign key (lesson_id) references lesson (id) on delete cascade
);