//conectar base de MySQL
const  global = require('./env');

const { faker } = require("@faker-js/faker");
const bcrypt = require("bcrypt");

const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  database: 'miranda_db',
  user: global.db_user,
  password: global.db_password
});

connection.connect(function(error){
  if(error){
    throw error;
  }else{
    console.log('conexion exitosa');
  }
});

// Rooms
const sqlRooms = "INSERT INTO rooms (room_number, bed_type, description, offer, price, cancellation, amenities) VALUES (?)";
for (let i = 1; i <= 10; i++) {
    let values = [
        i,
        faker.helpers.arrayElement([
            "single_bed",
            "double_bed",
            "double_superior",
            "suite",
        ]),
        faker.lorem.sentence(10),
        faker.helpers.arrayElement([0, 1]),
        faker.finance.amount(50, 100, 0),
        faker.lorem.sentence(10),
        ["TV", "WIFI", "BATHROOM-KIT"]
            .concat( faker.helpers.arrayElements(["JACUZZI", "HAIR-DRYER", "MINIBAR"], 2))
            .join(" "),
    ];

    connection.query(sqlRooms, [values], function (err, result) {
        if (err) throw err;
        console.log("Number of records inserted: " + result.affectedRows);
    });

    // Room_images
    for (let j = 1; j <= 5; j++) {
        const sqlImages = "INSERT INTO rooms_images (room_id, url_image) VALUES (?)";
        let values = [i, faker.image.imageUrl("", "", "", true)];
        connection.query(sqlImages, [values], function (err, result) {
            if (err) throw err;
            console.log("Number of records inserted: " + result.affectedRows);
        });
    }
}

const sqlBookings = "INSERT INTO bookings (guest_name, order_date, checkin, checkout, special_request, room_id, status) VALUES (?)";
for (let i = 0; i < 10; i++) {
    let values = [
        faker.name.firstName() + " " + faker.name.lastName(),
        faker.date.past(),
        faker.date.future(),
        faker.date.future(),
        faker.hacker.phrase(),
        Math.floor(Math.random() * (10 - 1) + 1),
        faker.helpers.arrayElement(["checkIn", "checkOut", "inProgress"]),
    ];
    connection.query(sqlBookings, [values], function (err, result) {
        if (err) throw err;
        console.log("Number of records inserted: " + result.affectedRows);
    });
}

// Contacts
const sqlContacts = "INSERT INTO contacts (contact_name, contact_email, contact_phone, contact_date, subject, comment, viewed, archived) VALUES (?)";
for (let i = 0; i < 10; i++) {
    let values = [
        faker.name.firstName() + " " + faker.name.lastName(),
        faker.internet.email(),
        faker.phone.number("###-###-###"),
        faker.date.past(),
        faker.hacker.phrase(),
        faker.lorem.sentence(),
        faker.helpers.arrayElement([0, 1]),
        faker.helpers.arrayElement([0, 1]),
    ];
    connection.query(sqlContacts, [values], function (err, result) {
        if (err) throw err;
        console.log("Number of records inserted: " + result.affectedRows);
    });
}

// Users
const sqlUsers = "INSERT INTO users (user_name, user_email, user_phone, start_date, occupation, status, user_image, password) VALUES (?)";
for (let i = 0; i < 10; i++) {
    let values = [
        faker.name.firstName() + faker.name.lastName(),
        faker.internet.email(),
        faker.phone.number("###-###-###"),
        faker.date.past(),
        faker.helpers.arrayElement(['administrative manager','administrative staff']),
        faker.helpers.arrayElement([0, 1]),
        faker.image.avatar(),
        bcrypt.hashSync(faker.internet.password(), 5)
    ];
    connection.query(sqlUsers, [values], function (err, result) {
        if (err) throw err;
        console.log("Number of records inserted: " + result.affectedRows);
    });
}

connection.end();