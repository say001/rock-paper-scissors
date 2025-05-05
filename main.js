function play(object) {
    computer = computer();
    if (computer == object) {
        return "It's a tie!"
    }
    // if ()

}

function computer() {
    if (Math.random() <= 1.0/3) {
        return "rock";
    } 
    else if (Math.random() <= 2 * 1.0/3) {
        return "paper";
    }
    else {
        return "scissor";
    }
}