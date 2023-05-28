let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    // When the Previous Pomodoros section has no numbers, add the number without a hyphen
    if (saveEl.textContent === "Previous Pomodoros: ") {
        saveEl.textContent += count
    }
    else {
        saveEl.textContent += " - " + count
    }
    clearCount()
}

function clearCount(){
    countEl.textContent = 0 
    count = 0 
}

function reset () {
    saveEl.textContent = "Previous Pomodoros: "
    clearCount()
}

