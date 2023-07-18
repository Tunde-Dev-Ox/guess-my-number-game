'use strict';

const toggle = document.getElementById('toggle');
const pageBody = document.body;

toggle.addEventListener("input", (e) => {
 const isChecked = e.target.checked;

 if (isChecked) {
  pageBody.classList.add("dark-theme");
 } else {
  pageBody.classList.remove("dark-theme");
 }
});
