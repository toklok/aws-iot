'use strict';

var AlexaSkill = require('./AlexaSkill');

var APP_ID = undefined; //replace with Alexa key


//Call Light a constructor is a child of Alexa Skill.

var CallLight = function () {
    AlexaSkill.call(this, APP_ID);
};

//Classical Inheritance

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

CallLight.prototype.eventHandlers.onSessionEnded = function (sessionEndedRequest, session) {
    console.log("onSessionEnded requestId: " + sessionEndedRequest.requestId
        + ", sessionId: " + session.sessionId);

    // any session cleanup logic would go here
};

CallLight.prototype.intentHandlers = {

    "getHelp": function (intent, session, response) {

    },

    "AMAZON.HelpIntent": function (intent, session, response) {

        var speechText = "You can say get help and the department you would like service from";

        var repromptText = "Please tell me the department you would like to contact";

        var speechOutput = {
            speech: speechText,
            type: AlexaSkill.speechOutputType.PLAIN_TEXT
        };

        var repromptOutput = {
            speech: repromptText,
            type: AlexaSkill.speechOutputType.PLAIN_TEXT
        };
        response.ask(speechOutput, repromptOutput);
    }

};