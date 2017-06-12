"use strict";
const choo = require("choo");
const css = require("sheetify");

const mainView = require("./templates/mainView");
const logger = require("./reducers/logger");
const counter = require("./reducers/counter");

css("tachyons");

const app = choo();

app.use(logger);
app.use(counter);
app.route("/", mainView);
app.mount("body");
