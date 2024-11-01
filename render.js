const render = (arrTasks, Display) => {
    Display.innerHTML = "";
    Array.from(arrTasks).forEach((ele) => {
        const newdiv = document.createElement("div");
        const h3 = document.createElement("h3");
        h3.textContent = ele;
        newdiv.appendChild(h3);

        //adding delete button
        const button = document.createElement("button")
        button.textContent = "delete"
        button.classList.add("del");
        newdiv.appendChild(button)
        Display.appendChild(newdiv);
    })

}
export { render };