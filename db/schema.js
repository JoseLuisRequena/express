const { Schema, model } = require("mongoose");

const room = new Schema({
    room_number: Number,
    bed_type: String, // ('single_bed', 'double_bed', 'double_superior', 'suite'),
    description: String,
    offer: Boolean,
    price: Number,
    discount: { type: Number, default: 0 },
    cancellation: String,
    amenities: Array,
    rooms_images: Array
});

const contact = Schema({    
    contact_name: String,
    contact_email: String,
    contact_phone: String,
    contact_date: Date,
    subject: String,
    comment: String,
    viewed: Boolean,
    archived: Boolean
});

const user = Schema({
    user_name: String,
    user_email: String,
    user_phone: String,
    start_date: { type: Date, default: Date.now },
    occupation : String,
    status: Boolean,
    user_image: String,
    password: {type: String, required: true}
});

const booking = Schema({
    guest_name: {type: String, required: true},
    order_date: Date,
    checkin: {type: Date, required: true},
    checkout: {type: Date, required: true},  //verificar q sea mayot que checkIn
    special_request: String,
    status: String,
    room_id: [{
            type: Schema.ObjectId,
            required: true,
            ref: "room"
        }
    ]
});

const Room = model('Room', room);
const Booking = model('Booking', booking);
const User = model('User', user);
const Contact = model('Contact', contact);

module.exports = { Room, Booking, User, Contact };