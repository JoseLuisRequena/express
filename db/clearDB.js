const { Contact, Booking, Room, User } = require('./schema');
require('./connectionDB')

function deleteData() {
    
    User.deleteMany({}, (err) => {
        if (err) console.error(err)
        else console.info('Users deleted');
    });
    Room.deleteMany({}, (err) => {
        if (err) console.error(err)
        else console.info('Rooms deleted');
    });
    Booking.deleteMany({}, (err) => {
        if (err) console.error(err)
        else console.info('Bookings deleted');
    });
    Contact.deleteMany({}, (err) => {
        if (err) console.error(err)
        else console.info('Contact deleted');
    });
}

deleteData();