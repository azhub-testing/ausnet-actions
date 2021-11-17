const core = require("@actions/core");

const greeting = core.getInput("greeting");

console.log(`Hello ${greeting}`);
