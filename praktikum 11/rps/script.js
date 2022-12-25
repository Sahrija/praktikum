a = function (ids) {
    return document.querySelector(ids)
}

const [rock, paper, scissors] = [a("#rock"), a('#paper'), a("#scissors")]
const choiches = ["rock", "paper", "scissors"]
let player
console.log(player)
function Computerchs() {
    index = Math.floor(Math.random() * choiches.length)
    computer = choiches[index]
    console.log(computer)
    compare()
}
rock.onclick = function () {
    player = "rock"
    console.log(player)
    Computerchs()
}
paper.onclick = function () {
    player = "paper"
    console.log(player)
    Computerchs()
}
scissors.onclick = function () {
    player = "scissors"
    console.log(player)
    Computerchs()
    console.log(scissors.onclick)
}
function compare() {
    if (computer == player) {
        document.write("draw")
    }
}
isred = false
window.onclick = e => {
    console.log(e.target.tagName);
    e = e.target.tagName;
    e = String(e.toLowerCase());
    console.log(e);

    if (isred == false) {
        document.getElementsByTagName(`${e}`)[0].style.backgroundColor = "red";
        isred = true
    } else {
        document.getElementsByTagName(`${e}`)[0].style.backgroundColor = "white";
        isred = false
    }
}