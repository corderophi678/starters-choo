"use strict";
const html = require("choo/html");

module.exports = function mainView(state, emit) {
  return html`
  <body class="tc vh-100 bg-pink">
    <h1 class="sans-serif">Counter is ${state.count}</h1>
    <div class="mw5 flex center justify-between pt3">
    <button class="bn bg-white f4 pa1 hover-bg-green" onclick=${increment}>Increment</button>
    <button class="bn bg-white f4 pa1 hover-bg-yellow" onclick=${decrement}>Decrement</button>
    <button class="bn bg-white f4 pa1 hover-bg-red" onclick=${reset}>Reset</button>
    </div>
  </body>
`;
  function increment() {
    emit("increment", 1);
  }
  function decrement() {
    emit("decrement", 1);
  }
  function reset() {
    emit("reset");
  }
};
