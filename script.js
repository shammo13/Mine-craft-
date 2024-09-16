let storyProgress = 0;

const story = {
    0: {
        text: "Your adventure begins in a vast Minecraft world. What do you want to do first?",
        choices: [
            { text: "Explore the cave", next: 1 },
            { text: "Build a house", next: 2 },
            { text: "Hunt for food", next: 3 },
            { text: "Look for a village", next: 4 }
        ]
    },
    1: {
        text: "You enter a dark cave. Suddenly, you hear a noise. What will you do?",
        choices: [
            { text: "Investigate the noise", next: 5 },
            { text: "Run away", next: 6 },
            { text: "Light a torch", next: 7 },
            { text: "Set a trap", next: 8 }
        ]
    },
    2: {
        text: "You begin building a house. Night falls. Do you continue building or seek shelter?",
        choices: [
            { text: "Keep building", next: 9 },
            { text: "Find shelter", next: 10 },
            { text: "Fight the mobs", next: 11 },
            { text: "Set up defenses", next: 12 }
        ]
    },
    3: {
        text: "While hunting, you find a herd of animals. What's your next move?",
        choices: [
            { text: "Hunt them", next: 13 },
            { text: "Tame them", next: 14 },
            { text: "Ignore them", next: 15 },
            { text: "Find a safer spot", next: 16 }
        ]
    },
    // More paths
    4: {
        text: "You arrive at a village. They need your help. Will you assist them?",
        choices: [
            { text: "Help the villagers", next: 17 },
            { text: "Steal from the villagers", next: 18 },
            { text: "Trade with them", next: 19 },
            { text: "Leave the village", next: 20 }
        ]
    },
    5: { text: "A Creeper explodes! You're dead. Try again.", choices: [] },
    6: { text: "You successfully escape the cave but miss out on treasure.", choices: [] },
    7: { text: "You light a torch and discover a treasure chest!", choices: [] },
    8: { text: "Your trap works, and you catch some valuable items!", choices: [] },
    // Continue with the rest of the story branches leading to 10 different endings
};

function makeChoice(choiceIndex) {
    const nextStep = story[storyProgress].choices[choiceIndex - 1].next;
    storyProgress = nextStep;
    document.getElementById("story-text").textContent = story[storyProgress].text;
    updateChoices();
}

function updateChoices() {
    const buttons = document.querySelectorAll("button");
    const currentChoices = story[storyProgress].choices;
    if (currentChoices.length === 0) {
        document.querySelector(".choices").innerHTML = "<button onclick='location.reload()'>Restart Game</button>";
        return;
    }

    buttons.forEach((button, index) => {
        if (currentChoices[index]) {
            button.textContent = currentChoices[index].text;
            button.style.display = "inline-block";
        } else {
            button.style.display = "none";
        }
    });
}
