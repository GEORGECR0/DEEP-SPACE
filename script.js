//Pass the id of the <input> element to be copied as a parameter to the copy()
let copy = (text) => {
  //Selects the text in the <input> elemet
  document.getElementById(text).select();
  //Copies the selected text to clipboard
   document.execCommand("copy");
};

let sections = document.querySelectorAll('sections')
let navLinks = document.querySelectorAll('header nav a')

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop;
    let height = sec.offsetHeight;
    let id = secAttribute('home')
  });
};