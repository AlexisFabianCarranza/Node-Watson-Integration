const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const app = express();
const port = 3000;
dotenv.config();
//Watson
const AssistantV2 = require('ibm-watson/assistant/v2');
const { IamAuthenticator } = require('ibm-watson/auth');

const manageWatsonAPi = require('./middleware/handlingWatsonAPI');

const assistant = new AssistantV2({
    version: process.env.VERSION,
    authenticator: new IamAuthenticator({
        apikey: process.env.API_KEY,
    }),
    url: process.env.URL,
    disableSslVerification: true,
});

var sessionId = 0;

assistant.createSession({
    assistantId: process.env.ASSISTANT_ID
})
    .then(res => {
        sessionId = res.result.session_id;
        console.log(JSON.stringify(res, null, 2));
    })
    .catch(err => {
        console.log(err);
    });

//Express
app.use(bodyParser.json());

app.get('/conversation/:text*?', (req, res) => {
    //const { text } = req.params;
    const { text } = req.body;
    assistant.message({
        assistantId: process.env.ASSISTANT_ID,
        sessionId: sessionId,
        input: {
            'message_type': 'text',
            'text': text
        }
    })
        .then(response => {
            console.log(JSON.stringify(response, null, 2));
            return res.json(manageWatsonAPi.handlingResponseWatson(response));
        })
        .catch(err => {
            console.log(err);
        });
    //res.json(text);
});

app.listen(port, () => console.log(`Running on port ${port}`));




