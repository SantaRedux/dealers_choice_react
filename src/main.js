const server= require('./index');
const { conn } = require('../db');

const liftOff = async() => {
    try {
        await conn.sync();
        const PORT = 1340;
        server.listen(PORT, () => 
            console.log((`listening on PORT ${PORT}`))
        );
    } catch(ex) {
        console.log(`HELLO USER I AM  E R R O R:\n${ex}`);
    }
}

liftOff();