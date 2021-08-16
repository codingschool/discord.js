//Get the Client function out of the discord.js Package

const { Client } = require('discord.js')
//Get the Config

const config = require('./config.json')
//Creating the Client and Give him all Intents

const client = new Client({
    intents: 32767
})
// The Ready event will execute when the Bot is online.
client.on('ready', () => {
    //Will send a Log in the Console 
    console.log(`${client.user.tag} is Online`) //Will send something like CodingSchoolBot#3221 is Online
})
//For other files to be able to use the Client

module.exports = client
//Start the Bot

client.login(config.token) //Your token should be in config.json