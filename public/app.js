// console.log("Hello World");

const Alert = (msg) => {
    alert(`Hey ${msg} dude, I'm not working right now. lol`);
};

const lang = document.querySelector(".all-lang");

lang.addEventListener("change", () => {
    Alert(lang.value);
});
