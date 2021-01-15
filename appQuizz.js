/** question
 * choix
 * reponse
 * niveau
 */

// target
let questNbr = $('#questNbr');
let quest = $('#quest');
let answer = $('#answer');
let start = $('#start');
let prop = $('#answer > span');
console.log(prop);

let nbr = 0;

let question = function (text, answer, choice1, choice2, choice3, level) {
    this.text = text;

    this.ans1 = answer;
    this.ans2 = choice1;
    this.ans3 = choice2;
    this.ans4 = choice3;
    this.level = level;

    this.setQuest = function () {
        nbr ++;
    }

    this.getProp = function () {
        let prop = new Array(4);

    }

}

let quest1 = new question('1+1 = ?', '2', '1', '3', '4', '1');
quest1.setQuest();

let quest2 = new question('2+2 = ?', '4', '2', '6', '8', '1');
quest2.setQuest();

questNbr.text('Quizz de ' + nbr + ' questions');

quest.text(quest1.text);

prop.each(function (index){
        $('this').text('1');
    })

