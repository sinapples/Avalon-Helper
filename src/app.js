'use strict';

// ------------------------------------------------------------------
// APP INITIALIZATION
// ------------------------------------------------------------------

const { App } = require('jovo-framework');
const { Alexa } = require('jovo-platform-alexa');
const { GoogleAssistant } = require('jovo-platform-googleassistant');
const { JovoDebugger } = require('jovo-plugin-debugger');
const { FileDb } = require('jovo-db-filedb');

const app = new App();

app.use(
    new Alexa(),
    new GoogleAssistant(),
    new JovoDebugger(),
    new FileDb()
);

// https://us-central1-voice-261623.cloudfunctions.net/avalon 


// ------------------------------------------------------------------
// APP LOGIC
// ------------------------------------------------------------------

app.setHandler({
    LAUNCH() {
        return this.toIntent('Welcome');
    },

    Welcome() {
        this.ask("Welcome to Avalon. Ready to start?");
    },

    YesIntent() {


        //").addBreak("100ms").addText("
        let advneture = ["Go on your quest.",
            "Good luck, fighting the dragon.",
            "Keep your friends close and your enemies closer.",
            "It's dangerous to go alone.",
            "Take the spooky path.",
            "Destroy the nexus.",
        ]
        this.$speech.addText("Everyone, put your head down and make a fist.")
            .addBreak("4000ms")
            .addText("Bad guys,").addBreak("100ms").addText(" Open  your eyes").addBreak("300ms").addText("and stick your thumb up").addBreak("400ms").addText("and look around so that you know all the agents of Evil.")
            .addBreak("5500ms")
            .addText("Bad guys,").addBreak("100ms").addText(" Close your eyes").addBreak("400ms").addText("and keep your thumb up.")
            .addBreak("5500ms")
            .addText("Merlin,").addBreak("100ms").addText(" Open your eyes").addBreak("400ms").addText("and look for the bad guys with their thumbs up.")
            .addBreak("5500ms")
            .addText("Merlin,").addBreak("100ms").addText(" Close your eyes").addBreak("400ms").addText("and bad guys put your thumbs down.")
            .addBreak("3000ms")
            .addText("Everyone,").addBreak("100ms").addText(" open your eyes.")

            .addBreak("3000ms")
            .addText("Bad guys, you should know all your allies. Merlin, you should know who the bad guys are.")
            .addBreak("300ms")
            .addText("The game is set up.")
            .addBreak("300ms")
            .addText(advneture)


        this.tell(this.$speech);
    },


    


    oberon() {


        //").addBreak("100ms").addText("
        let advneture = ["Go on your quest.",
        "Good luck, fighting the dragon.",
        "Keep your friends close and your enemies closer",
        "It's dangerous to go alone.",
        "Take the spooky path.",
        "Destroy the nexus.",
    ]
        this.$speech.addText("Everyone, close your eyes and extend your hand into a fist in front of you.")
            .addBreak("4000ms")
            .addText("Bad guys, except for Oberon").addBreak("100ms").addText(" Open  your eyes").addText("and stick your thumb up").addBreak("400ms").addText("and look around so that you know all the agents of Evil.")
            .addBreak("5500ms")
            .addText("All Bad guys,").addBreak("100ms").addText(" Close your eyes").addBreak("400ms").addText("and stick your thumb up so the Merlin will know of you.")
            .addBreak("5500ms")
            .addText("Merlin,").addBreak("100ms").addText(" Open your eyes").addBreak("400ms").addText("and see the agents of evil")
            .addBreak("5500ms")
            .addText("Merlin,").addBreak("100ms").addText(" Close your eyes").addBreak("400ms").addText("and bad guys put your thumbs down.")
            .addBreak("3000ms")
            .addText("Everyone,").addBreak("100ms").addText(" open your eyes.")

            .addBreak("3000ms")
            .addText("Bad guys, expect for Oberon, you should know all the agents of Evil. Merlin, you should know who the agents of Evil are.")
            .addBreak("300ms")
            .addText("The game is set up.")
            .addBreak("300ms")
            .addText(advneture)


        this.tell(this.$speech);
    },


    everyone() {


        //").addBreak("100ms").addText("
        let advneture = ["Go on your quest.",
        "Good luck, fighting the dragon.",
        "Keep your friends close and your enemies closer",
        "It's dangerous to go alone.",
        "Take the spooky path.",
        "Destroy the nexus.",
    ]
        this.$speech.addText("Everyone, close your eyes and extend your hand into a fist in front of you.")
            .addBreak("4000ms")
            .addText("Bad guys, except for Oberon").addBreak("100ms").addText(" Open  your eyes").addBreak("400ms").addText("and look around so that you know all the agents of Evil.")
            .addBreak("6000ms")
            .addText("Bad guys,").addBreak("100ms").addText(" Close your eyes")
            .addBreak("400ms")
            .addText("Bad Guys, except for Mordred,").addBreak("100ms").addText(" and stick your thumb up so the Merlin will know of you.")
            .addBreak("5500ms")
            .addText("Merlin,").addBreak("100ms").addText(" Open your eyes").addBreak("400ms").addText("and see the bad guys.")
            .addBreak("5500ms")
            .addText("Merlin,").addBreak("100ms").addText(" Close your eyes").addBreak("400ms").addText("and bad guys put your thumbs down.")
            .addBreak("3000ms")
            .addText("Merlin,").addBreak("100ms").addText("and Morgana").addBreak("400ms").addText(" stick your thumb up so the Percial may know of you.")
            .addBreak("5000ms")
            .addText("Percial,").addBreak("100ms").addText("Open your eyes").addBreak("400ms").addText("so you may know the Merlin").addBreak("100ms").addText(" and Morgana.")
            .addBreak("5000ms")
            .addText("Percial,").addBreak("100ms").addText(" Close your eyes").addBreak("400ms").addText("and Merlin and Morgana put your thumbs down.")
            .addBreak("5000ms")
            
            
            .addText("Everyone,").addBreak("100ms").addText(" open your eyes.")

            .addBreak("3000ms")
            
            .addText("Bad guys,").addBreak("100ms").addText(" except for Oberon,").addBreak("200ms").addText(" you should know all the agents of Evil.").addBreak("500ms").addText(" Merlin, you should know who the agents of Evil are. ").addBreak("500ms").addText("Percial, you should know the Merlin and Morgana")
            .addBreak("300ms")
            .addText("The game is set up.")
            .addBreak("300ms")
            .addText(advneture)


        this.tell(this.$speech);
    },


});

module.exports.app = app;
