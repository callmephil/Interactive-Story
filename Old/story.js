var Storyline = {
    "1": {
        "Title": "Introduction :",
        "Content": "The CIA were hiding the fact that Thomas Edison is still alive and hiding him in his mansion that contains all of his inventions and discoveries, this information was leaked to the KGB who immediately sent their top Russian agent/assassin Philippovitch after EDISON to kill him and take hold of his inventions & blueprints.",
        "Question": "The only way to infiltrate the Mansion and get through heavily armed security of mutant animals is :",
        "Options": [
            "by skydiving from a fighter jet and landing on the roof",
            "Through a tunnel that runs through the jungle into old Colombian drug trafficking tunnels under the mansion",
            "By sewage pipelines that lead past the barbed wire electrical fence and into the backyard of the mansion."
        ],
        "Situation": [
            "A group of hungry vultures with a knack for sucking the tears of frightened juicy human eyeballs.",
            "He’s going to be faced with a hissing anaconda waiting to coil itself around its new found prey",
            "He’s in the garden filled with blood thirsty crocodiles patrolling the area for intruders"
        ]
    },
    "2": {
        "Title": "Page 2",
        "Content": "He is faced with a situation where he cannot move or breathe, not even the slightest sound, or these savage wild mutant animals will devour him and leave nothing but bones",
        "Question": "HERE QUESTION ?",
        "Options": [
            "He shoots and kills the animal with his silenced weapon, and risks waking up the rest",
            "He sneaks past them and risks getting detected by their osmatic sense of smell",
            "He uses a nerve gas to knock them out for 30 seconds so he can silently slip away",
        ],
        "Situation": [
            "He is detected by top of the line minute sound sensors that trigger a trap door from under his feet, and into a spikey grave filled with poor souls who have attempted this before only to miserably fail. Saved by his quick reflexes he manages to grab onto the edge but not without losing his firearm",
            "He gets passed them and reaches a side door that leads into the mansion",
            "He gets passed them and reaches a side door that leads into the mansion"
        ]
    },
    "3": {
        "Title": "Page 3",
        "Content": "He has finally made it inside the mansion in one piece, it is far from over as he is now faced with laser sensors that cut through flesh like a knife on butter",
        "Question": "HERE QUESTION ?",
        "Options": [
            "He uses whatever strength he has left in his arms to climb a rope and get safely past them",
            "He sneaks through it using his limber acrobatic physical skills that he has trained for during his years at the Russian gymnastics Olympiads.",
            "Being a skillful coder he manages to hack through top notch security system and deactivates the laser sensors with a single line of code. He discovers that the elevator leading him to his target is booby trapped and deactivates it at the same time",
        ],
        "Situation": [ // End The Story
            "He goes slowly up the staircase and into edisons room to find the bed  empty, he realises that he might have triggered a silent alarm that warned edison. By then it’s too late and he receives a blow that knocks him down on the floor and when he turns to face his attacker he see’s a mutant guerilla running towards him with a blade, defenseless without his gun,the monster slits his throat with one swift blow and Philippovitch’s bloody head tumbles down the room’s floor putting an end to another attempt to uncover the world’s most intriguing secret.",
            "He goes slowly up the staircase and into edisons room to find the bed  empty, he realises that he might have triggered a silent alarm that warned edison. By then it’s too late and he receives a blow that knocks him down on the floor and when he turns to face his attacker he see’s a mutant guerilla running towards him with a blade, defenseless without his gun,the monster slits his throat with one swift blow and Philippovitch’s bloody head tumbles down the room’s floor putting an end to another attempt to uncover the world’s most intriguing secret.",
            "He discovers the existence of a secret elevator  leading him to his target and  the keycode to use the elevator without triggering a deadly trap."
        ],
        "Situation2": [ // Continue the Story
            "He goes slowly up the staircase and into edisons room to find the bed  empty  the bed and finds it empty,  he realises that he might have triggered a silent alarm that warned edison by then it’s too late and he receives a blow that knocks him down on the floor and when he turns to face his attacker he see’s a mutant guerilla   running towards him with a knife ;he swiftly reaches for his gun and shoots him straight in the head; the guerilla drops dead next to him and next to it he finds a remote that when he presses it uncovers a secret elevator door behind the library."
        ]
    },
    "4": {
        "Title": "Page 4",
        "Content": "There are three doors in a hallway in front of him, doors that could lead him to the end of his mission. Each of these doors is marked with something different, he thinks of which one to enter first and he chooses the one marked with ",
        "Question": "HERE QUESTION ?",
        "Options": [
            "Codi’s Logo",
            "Lightbulb",
            "Jello Mark's on the door."
        ],
        "Situation": [
            "He is now trapped with one laptop one flash drive and instructions telling him that the only way to get the key and see daylight again is by downloading arch Linux Against this unsurmountable ordeal, he is now doomed to die in this remote Columbian drug mansion with no chance for salvation.",
            "He finds that Edison’s invention is a new secret recipe for fried chicken that is better than KFC it’s EFC",
            "A giant Jello monster who was trapped by Edison and lured him in to break him free from his prison so he could escape and fulfill his diabolic plan of turning the world into Jello and humans into gummy bears"
        ]
    },
    "5": {
        "Title": "Page 5",
        "Content": "Bon Jovi",
        "Question": "",
        "Options": [
            "Let It Rock",
            "You Give Love a Bad Name"
        ]
    },
    "6": {
        "Title": "Page 6",
        "Content": "Bon Jovi",
        "Question": "",
        "Options": [
            "Let It Rock",
            "You Give Love a Bad Name"
        ]
    },
};

UpdateText(1, 0);

function UpdateText(Page, Opt) {
    // Handle 
    if ((Page == "4"  && (Opt == "0" || Opt == "1")) || Page == "6") {
        var t = document.querySelectorAll(".CACA");

        for (var i = 0; i < t.length; i++)
            t[i].classList.add("GameOver");
    }
    // Title
    var title = document.getElementById('title');
    var question = document.getElementById('question');
    var newContent = document.getElementById('content');

    title.innerHTML = Storyline[Page].Title;
    question.innerHTML = Storyline[Page].Question;

    if (Page > 1)
        // Load Situation
        newContent.innerHTML = Storyline[Page].Content + "\n" + Storyline[Page - 1].Situation[Opt];
    else // Load Standard Text
        newContent.innerHTML = Storyline[Page].Content;

    // Load Options For Page
    for (var i = 0; i < 3; i++) {
        var Option = document.getElementById(`option_${i}`);
        Option.innerHTML = Storyline[Page].Options[i];

    }
    // Update Page ID
    var pagenbr = parseInt(Page);

    // if (pagenbr < 6) // hackfix
    // {
    document.getElementById('page').value = pagenbr + 1;
    //  }
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