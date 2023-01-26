localStorage.setItem("theme", "dark");

let currentTheme = localStorage.getItem("theme");
console.log(currentTheme);

localStorage.removeItem("theme");

let currentThemeNow = localStorage.getItem("theme");
console.log(currentThemeNow);

let teacher = {
  //oggetto che sotto diventa stringa
  name: "Stefano",
  subject: "JS",
};

localStorage.setItem("profile", JSON.stringify(teacher));

let retrivedTheacherComeStringa = localStorage.getItem("profile");
console.log(typeof retrivedTheacherComeStringa); // non è più un oggetto ma è una stringa ormai

//come ritrasformo teacher da stringa ad oggetto

let retrivedTheacher = JSON.parse(retrivedTheacherComeStringa);
console.log(retrivedTheacher);

// PER SLAVARE STRINGA SETITEM GETITEM
//SE ABBIAMO OGGETTI LI STRINGHIFICHIAMO (STRINGIFY) E POI LO TORNIAMO IN OGGETTO CON (PARSE)
