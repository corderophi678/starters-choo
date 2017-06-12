"use strict";

module.exports = function(state, emitter) {
  state.count = 0;
  emitter.on("increment", function(count) {
    state.count += count;
    emitter.emit("render");
  });
  emitter.on("decrement", function(count) {
    state.count -= count;
    emitter.emit("render");
  });
  emitter.on("reset", function() {
    state.count = 0;
    emitter.emit("render");
  });
};
