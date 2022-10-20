const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors')
const { ORIGINS } = require('./env');

require('./auth/auth');
//const passport = require('passport');
const app = express();

const loginRouter = require('./routes/login.routes');
const usersRouter = require('./routes/users.routes');
const bookingRouter = require('./routes/bookings.routes');
const roomsRouter = require('./routes/rooms.routes');
const contactsRouter = require('./routes/contacts.routes');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


const corsOptions = {
  origin: ORIGINS,
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
app.use(cors(corsOptions));
app.use('/login', loginRouter);
app.use('/bookings', bookingRouter);
app.use('/contacts', contactsRouter);
app.use('/rooms', roomsRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json({ success: false, message: `Error ${err.status}` });
});

module.exports = app;
