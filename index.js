#!/usr/bin/env node

const Discord = require('discord.js')
const cfg = require('./config.json')

async function printMeta(m) {
    console.log(`Title: ${m.title}`)
    console.log(`Description: ${m.description}`)
    console.log(`Published: ${m.pubDate}`)
    console.log(`Duration: ~${m.duration.humanize()}`)
    console.log(`Link: ${m.url}`)
    console.log(`Thumbnail: ${m.thumbnail}`)
}