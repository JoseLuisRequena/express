CREATE DATABASE miranda_db;
USE miranda_db

CREATE TABLE rooms(
    room_id INT AUTO_INCREMENT PRIMARY KEY,
    room_number SMALLINT NOT NULL,
    bed_type ENUM('single_bed', 'double_bed', 'double_superior', 'suite') NOT NULL,
    description VARCHAR(255),
    offer BOOLEAN,
    price SMALLINT NOT NULL,
    discount SMALLINT DEFAULT 0,
    cancellation VARCHAR(255),
    amenities VARCHAR(255) NOT NULL
);

CREATE TABLE rooms_images(
    room_id INT NOT NULL,
    FOREIGN KEY (room_id) REFERENCES rooms(room_id) ON DELETE CASCADE,
    url_image VARCHAR(255) NOT NULL
);

CREATE TABLE contacts(
    contact_id INT AUTO_INCREMENT PRIMARY KEY,
    contact_name VARCHAR(255) NOT NULL,
    contact_email VARCHAR(255) NOT NULL,
    contact_phone VARCHAR(255) NOT NULL,
    contact_date DATE NOT NULL,
    subject VARCHAR(255) NOT NULL,
    comment TEXT NOT NULL,
    viewed BOOLEAN NOT NULL DEFAULT 0,
    archived BOOLEAN NOT NULL DEFAULT 0
);

CREATE TABLE users(
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    user_name VARCHAR(255) NOT NULL,
    user_email VARCHAR(255) NOT NULL,
    user_phone VARCHAR(255) NOT NULL,
    start_date DATE NOT NULL,
    occupation ENUM('administrative manager', 'administrative staff'),
    user_image VARCHAR(255),
    status BOOLEAN NOT NULL DEFAULT 1,
    password VARCHAR(255) NOT NULL
);

CREATE TABLE bookings(
    booking_id INT AUTO_INCREMENT PRIMARY KEY,
    guest_name VARCHAR(255) NOT NULL,
    order_date DATE NOT NULL,
    checkin DATE NOT NULL,
    checkout DATE NOT NULL,
    special_request VARCHAR(255),
    room_id INT,
    status ENUM('checkIn', 'checkOut', 'inProgress'),
    FOREIGN KEY (room_id)
        REFERENCES rooms(room_id)
        ON DELETE SET NULL
);