const Event = require('../models/event.model.js');
const { check } = require('express-validator');


/**
 * This function creates an event
 * 
 * @param {*} req
 * @param {*} res
 * @returns res.json(event)
 */

exports.create = async function(req, res) {
    try {

    const { title, date, hour, minutes, typeOfCuisine, typeOfMeal, description, menu, allergens, zipCode, adress, city, numberMaxOfGuests, cost } = req.body;
    const user = req.user.id;

    if( !title || !date || !hour || !minutes || !typeOfCuisine || !typeOfMeal || !zipCode || !adress || !city || !numberMaxOfGuests || !cost) {
        return res.status(400).json({
            msg: "Veuillez renseignez au moins tous les champs suivant : "
        })
    }

    let event = new Event ({
        user,
        title,
        date,
        time: {
            hour,
            minutes
        },
        typeOfCuisine,
        typeOfMeal,
        description,
        menu,
        allergens,
        zipCode,
        adress,
        city,
        numberMaxOfGuests,
        cost
    });

    await event.save()

    res.status(200).json(event);  
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Erreur serveur');
    }

}

/**
 * This function creates an event
 * 
 * @param {*} req
 * @param {*} res
 * @returns res.json(events)
 */

exports.listEvents = async function(req, res) {
    try {
        const events = await Event.find()

        if(!events) {
            res.status(400).json({
                msg: 'Aucun événement trouvé'
            })
        }
        
        res.json(events);

    } catch (error) {
        console.error(error.message);
        res.status(500).send('Erreur Server');
    }
}