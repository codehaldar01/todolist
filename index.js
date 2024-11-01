//consts and vars
import { render } from "./render.js";
let numTasks = 0;
let arrTasks = []
console.log(arrTasks)
console.log(typeof(arrTasks))
const Tasks = document.getElementById("Etask")
const Display = document.getElementsByClassName("display")[0]
const localStorageKey = "tasks";

const storedTasks = localStorage.getItem("tasks");
console.log(storedTasks)
console.log(typeof (storedTasks))
if(storedTasks){
    arrTasks=JSON.parse(storedTasks);
    render(arrTasks,Display)
}

document.getElementById("submit").addEventListener('click', (ev) => {
    const text = Tasks.value
    if (text != "") {
        arrTasks.push(text);
        saveTasks(arrTasks)
        render(arrTasks, Display)
    }
})

Display.addEventListener('click', (ev) => {
    console.log(ev);
    if (ev.target.tagName === "BUTTON") {
        let taskDiv = ev.target.parentElement
        let index = Array.from(Display.children).indexOf(taskDiv);
        arrTasks.splice(index, 1);
        saveTasks(arrTasks);
        render(arrTasks, Display)
    }
})

const saveTasks = (arrTasks) => {
    localStorage.setItem(localStorageKey, JSON.stringify(arrTasks));
}


