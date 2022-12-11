/**
 * Have a look in mobile device
 *
 * 1. Make sure your system and mobile phone are connected to same network (wifi)
 * 2. Get your IP address by typing in cmd <ipconfig>
 * 3. Now in your mobile browser type http://<IP address>:<port number>
 */

// listen for tab
const textbox = document.querySelector("textarea");
textbox.addEventListener("keydown", (key) => {
    if (key.keyCode === 9) {
        key.preventDefault();

        textbox.setRangeText(
            "    ",
            textbox.selectionStart,
            textbox.selectionStart,
            "end"
        );
    }
});

const input = document.querySelector(".input-code");
const output = document.querySelector(".output-code");
const run_btn = document.querySelector(".run-btn");
const http = new XMLHttpRequest();

const starter = `#include <iostream>
#include <vector>
using namespace std;

int main() {
    // code here...
    cout << "Hello from GCC " << __VERSION__ << "!";

    return 0;
}`;

input.value = starter;

// runs code
const RunCode = (srcCode) => {
    http.open("POST", "http://coliru.stacked-crooked.com/compile", false);
    http.send(
        JSON.stringify({
            cmd: "g++ -std=c++20 main.cpp && ./a.out",
            src: srcCode,
        })
    );

    return http.response;
};

run_btn.addEventListener("click", () => {
    const input_code = input.value;
    output.value = RunCode(input_code);
});

// additional (working...)
const Alert = (msg) => {
    alert(
        `Hello dear from ${msg}, Looks like I am not working right now for ${msg}, Please try to write some code in C++.`
    );
};

const sel = document.querySelector(".all-lang");
const lang = ["C", "Java", "Javascript", "Python"];
sel.addEventListener("change", () => {
    for (let i = 0; i < lang.length; ++i) {
        if (sel.value == lang[i]) Alert(sel.value);
    }
    sel.value = "C++";
});
