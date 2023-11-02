// import the winston 
const winston = require('winston');
// logger config
const logger = winston.createLogger({
    level:'info', //logging level(warn,info,error,etc)
    format:winston.format.json(),//log format (json,text,xhml, sample()=> plaintext format) specifying the logger message
    transports:[
        new winston.transports.Console(), //stored for console
        new winston.transports.File({filename:"ananth.log"}) //stored for file name....you can add more transport as needed....
    ],//where the log will be stored
});

logger.log('info',"this is a information message");
logger.log('warn',"this is a warning message");
logger.error('error', "this is a error message");
//info message
logger.info('User logged in', { username: 'ananth', ip: '127.0.0.1' });
//error message
const error = new Error('This is a custom error message');
logger.error('An error occurred', { error: error });
