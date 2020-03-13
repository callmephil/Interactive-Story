const storyTable = {
    "1": {
        "title": "Introduction :",
        "introductionID": 1,
        "TextID": 1,
        "optionID": [1, 2, 3]
    },
    "2": {
        "title": "Page 2",
        "textID": 2,
        "optionID": [4, 5, 6]
    },
    "3": {
        "title": "Page 3",
        "textID": 3,
        "optionID": [7, 8, 9]
    },
    "4": {
        "title": "Page 4",
        "textID": 5,
        "optionID": [10, 11, 12]
    },
    "5": {
        "title": "Page 5",
        "textID": 6,
        "optionID": [13, 14, 15]
    },
}

var introTable = {
    1: "The CIA were hiding the fact that Thomas Edison is still alive and hiding him in his mansion that contains all of his inventions and discoveries, this information was leaked to the KGB who immediately sent their top Russian agent/assassin Philippovitch after EDISON to kill him and take hold of his inventions & blueprints.",
}

var textTable = {
    1: "The way to infiltrate the mansion and get through the heavily armed security of mutant animals",
    2: "He is faced with a situation where he cannot move or breathe, not even the slightest sound, or these savage wild mutant animals will devour him and leave nothing but bones",
    3: "He has finally made it inside the mansion in one piece, it is far from over as he is now faced with laser sensors that cut through flesh like a knife on butter",
    // 4 Todo ?
    4: "He uses the elevator to get to the shelter beneath the mansion where Edison and his secrets are hidden. Where he finds three doors labeled differently",
    5: "There are three doors in a hallway in front of him, doors that could lead him to the end of his mission. Each of these doors is marked with something different, he thinks of which one to enter first and he chooses the one marked with",
    6: "Realising that Edisons was dead for a long time and what is left of him is his dusty skeleton covered with spider webs next to his time machine with a note warning that whomever gets possession of this great power should use it wisely or he could put the faith of the hole world at stake as foreseen."
}

var optionTable = {
    1: [1, "Skydiving from a fighter jet and landing on the roof"],
    2: [2, "Through a tunnel that runs through the jungle into old Colombian drug trafficking tunnels under the mansion"],
    3: [3, "Sewage pipelines that lead past the barbed wire electrical fence and into the backyard of the mansion."],

    4: [4, "He shoots and kills the animal with his silenced weapon, and risks waking up the rest"],
    5: [5, "He sneaks past them and risks getting detected by their sense of smell"],
    6: [5, "He uses a knock out gas to knock them out for 30 seconds so he can silently slip away"],

    7: [6, "He uses whatever strength he has left in his arms to climb a rope and get safely past them"],
    8: [6, "He sneaks through it using his limber acrobatic physical skills that he has trained for during his years at the Russian gymnastics Olympiads."],
    9: [7, "Being a skillful coder he manages to hack through top notch security system and deactivates the laser sensors with a single line of code. He discovers that the elevator leading him to his target is booby trapped and deactivates it at the same time"],

    10: [8, "Codi’s Logo"],
    11: [9, "Jello Mark’s on the door."],
    12: [10, "Light_Bulb"],

    13: [11, "Destroy the machine , fakes his own death by using the self-destruction switch left by Edison and lives the rest of his life on the run if any agency discovers he was still alive."],
    14: [11, "Use the machine to travel at any point in time his heart desires change his past, topples government  or even change the course of history ."],
    15: [11, "Notify his superiors and always be known as the man who gave his Mother Russia the ultimate weapon and supremacy over all the nations of the world."]
}

var effectTable = {
    1: "A group of hungry vultures with a knack for sucking the tears of frightened juicy human eyeballs are waiting for the moment to jump  him",
    2: "He’s in the garden filled with blood thirsty crocodiles patrolling the area for intruders",
    3: "He’s going to be faced with a hissing anaconda waiting to coil itself around its new found prey",
    // Modifier
    4: "He gets detected by top of the line minute sound sensors that trigger a trap door from under his feet and into a spikey grave filled with poor souls who have attempted this before. Saved only by his quick reflexes he manages to grab onto the edge but not without losing his firearm his firearm",
    5: "He gets passed them and reaches a side door that leads into the mansion",
    6: {
        1: [
            1, "(No Gun) He goes slowly up the staircase and into edisons room to find the bed  empty, he realises that he might have triggered a silent alarm that warned edison. By then it’s too late and he receives a blow that knocks him down on the floor and when he turns to face his attacker he see’s a mutant guerilla   running towards him with a blade, defenseless without his gun,the monster slits his throat with one swift blow and Philippovitch’s bloody head tumbles down the room’s floor putting an end to another attempt to uncover the world’s most intriguing secret."
        ],
        2: "(WITH GUN) He goes slowly up the staircase and into edisons room to find the bed  empty , he realises that he might have triggered a silent alarm that warned edison by then it’s too late and he receives a blow that knocks him down on the floor and when he turns to face his attacker he see’s a mutant guerilla   running towards him with a knife ;he swiftly reaches for his gun and shoots him straight in the head; the guerilla drops dead next to him and next to it he finds a remote that when he presses it uncovers a secret elevator door behind the library",
    },
    7: "He discovers the existence of a secret elevator leading him to his target and  the keycode to use the elevator without triggering a deadly trap.",
    8: [1, "Trapped with one laptop one flash drive and instructions telling him that the only way to get the key and see daylight again is by downloading arch Linux Against this unsurmountable ordeal, he is now doomed to die in this remote Columbian drug mansion with no chance for salvation."],
    9: [1, "Face to face with a giant Jello monster who was trapped by Edison and lured him in to break him free from his prison so he could escape and fulfill his diabolic plan of turning the world into Jello and humans into gummy bears.He finds that Edison’s invention is a new secret recipe for fried chicken that is better than KFC it’s EFC."],
    10: "Realising that Edisons was dead for a long time and what is left of him is his dusty skeleton covered with spider webs next to his time machine with a note warning that whomever gets possession of this great power should use it wisely or he could put the faith of the hole world at stake as foreseen.",
    11: "The End"
};

var Triggers = {
    1: true, // GameOveUpdateTextr
}

function SetGameOver() {

}

function UpdateText(title, options, effects, special) {
    let _title = document.getElementById('title');
    let _text = document.getElementById('content');
    let _question = document.getElementById('question');
}

function UpdateOption(options) {
    var oID = 1;
    options.forEach(function (i) {
        var opt = document.getElementById(`option_${oID}`);
        opt.innerHTML = optionTable[i, 1];
        oID++;
    });
}

function getStoryTable(pageID) {
    let json = storyTable[pageID];
    let _title = json.title;
    let _options = json.optionID;

    if (json.introduction) {
        let _introduction = introTable[json.introduction.value];
    }

    UpdateOption(_options)
    UpdateText("", "", "", "");
}

function SubmitOption() {
    var pos = document.getElementById('page').value;
    var option = document.getElementsByName('choice');

    for (var i = 0, length = option.length; i < length; i++) {
        if (option[i].checked) {
            UpdateText(pos, option[i].value);
        }
    }
}