const AlexaSkill = require('./AlexaSkill');

const APP_ID = undefined; //replace with Alexa key


//Call Light is a child of Alexa Skill.

let CallLight = function () {
    AlexaSkill.call(this, APP_ID);
};

//Extend AlexaSkill

CallLight.prototype = Object.create(AlexaSkill.prototype);
CallLight.prototype.constructor = CallLight;

CallLight.prototype.eventHandlers.onSessionStarted = function (sessionStorageRequest, session) {
    console.log("CallLight onSessionStarted requestId: " + sessionStartedRequest.requestId
        + ", sessionId: " + session.sessionId);

    // any session init logic would go here
};

CallLight.prototype.eventHandlers.onLaunch = function (launchRequest, session, response) {

    console.log("CallLight onLaunch requestId: " + launchRequest.requestId + ", sessionId: " + session.sessionId);
    console.log(response);

    //On launch, we can do stuff inside here.
};