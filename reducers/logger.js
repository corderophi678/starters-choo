"use strict";

module.exports = function logger(state, emitter) {
  emitter.on("*", function(messageName, data) {
    console.log("event", messageName, data);
  });
};
