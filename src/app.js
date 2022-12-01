/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  let attack = "fire";

  document.querySelectorAll(".col-1").addEventListener("click", fireTorpedo);

  function fireTorpedo() {
    console.log("attack");
  }

  console.log("Hello Rigo from the console!");
};
