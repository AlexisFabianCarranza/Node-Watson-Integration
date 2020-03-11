handlingResponseWatson = (response) => {
    if ( response.status === 200 ) {
        let message = response.result.output.generic ? response.result.output.generic : [];
        let entities = response.result.output.entities ? response.result.output.entities : [];
        let intents = response.result.output.intents ? response.result.output.intents: [];
        return {
            messageResponse: message[0].text,
            entities,
            intents,
        }
    } else {
        return {
            messageResponse: 'Ha ocurrido un error interno, disculpe'
        }
    }
};

module.exports = {
    handlingResponseWatson
};