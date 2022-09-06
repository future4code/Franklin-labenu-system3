USE `franklin-leonardo-lima`;

CREATE TABLE IF NOT EXISTS `Classes` (
    id VARCHAR(255) PRIMARY KEY,
    `name` VARCHAR(255), 
    module INT DEFAULT 0
);

CREATE TABLE IF NOT EXISTS `Students` (
    id VARCHAR(255) PRIMARY KEY,
    `name` VARCHAR(255) NOT NULL, 
    email VARCHAR(255) NOT NULL UNIQUE,
    birthDate DATE NOT NULL,
    class_id VARCHAR(255) NOT NULL,
    FOREIGN KEY (class_id) REFERENCES Classes(id)
);

CREATE TABLE IF NOT EXISTS `Hobbies` (
    id VARCHAR (255) PRIMARY KEY,
   `name` VARCHAR (255) NOT NULL UNIQUE
);

CREATE TABLE IF NOT EXISTS `Students_Hobbies` (
    id VARCHAR(255) PRIMARY KEY,
    hobby_id VARCHAR(255) NOT NULL,
    student_id VARCHAR(255) NOT NULL,
    FOREIGN KEY (hobby_id) REFERENCES Hobbies (id),
    FOREIGN KEY (student_id) REFERENCES Students (id)
);

CREATE TABLE IF NOT EXISTS `Teachers` (
	id VARCHAR(255) PRIMARY KEY,
	`name` VARCHAR(255),
	email VARCHAR(255) NOT NULL UNIQUE,
	birthDate DATE NOT NULL,
    class_id VARCHAR(255) NOT NULL,
	FOREIGN KEY (class_id) REFERENCES Classes(id)
);

CREATE TABLE IF NOT EXISTS `Experts` (
    id VARCHAR(255) NOT NULL PRIMARY KEY,
    `name` VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS `Teachers_Experts` (
    id  VARCHAR(255) PRIMARY KEY,
    teacher_id  VARCHAR(255) NOT NULL,
    expert_id VARCHAR(255) NOT NULL,
    FOREIGN KEY (teacher_id) REFERENCES Teachers (id),
    FOREIGN KEY (expert_id) REFERENCES Experts (id)
);
