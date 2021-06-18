const fs = require('fs');
const { conn, Make, Manufacturer, Model } = require('../db');

const seed = async() => {
    await conn.sync({ force: true })

    const generalMotors = await Manufacturer.create({ name: 'General Motors', nationality: 'USA' })
    const fiatChrysler = await Manufacturer.create({ name: 'Fiat Chrysler', nationality: 'USA' })
    const toyota = await Manufacturer.create({ name: 'Toyota', nationality: 'Japan' })

    const lexus = await Make.create({
        name: 'Lexus',
        manufacturerId: toyota.id,
        imageUrl: ''
    })
    const chevrolet = await Make.create({
        name: 'Chevrolet',
        manufacturerId: generalMotors.id,
        imageUrl: ''
    })
    const jeep = await Make.create({
        name: 'Jeep',
        manufacturerId: fiatChrysler.id,
        imageUrl: ''
    })

    const manufacturers = {
        'General Motors': generalMotors,
        'Toyota': toyota,
        'Fiat Chrysler': fiatChrysler
    }

    const makes = {
        'Lexus': lexus,
        'Chevrolet': chevrolet,
        'Jeep': jeep
    }

    await Promise.all(models.map(model => Model.create({
        name: model.name,
        logoUrl: model.logoUrl,
        makeId: model.make.id,
        manufacturerId: manufacturers[model.manufacturer].id
    })))

    conn.close();
    console.log('****** seeded ******');
};

seed().catch(err => {
    conn.close()
    console.log(`**** SEED FAILED: ****\n${err.message} AT ${err.stack}`)
});