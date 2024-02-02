import * as readlineSync from "readline-sync";
export class Cli {
    static start(logic) {
        startName();
        console.log(logic.WriteoOnStart);
        for (let i = 0; i <= 2; i++) {
            let generatedQuestion = logic.GenerateQuestion();
            console.log(generatedQuestion.Question);
            let answer = readlineSync.question("Your answer:", {
                encoding: "UTF-8"
            });
            if (answer === generatedQuestion.Answer)
                console.log("Correct!");
            else {
                console.log(`'${answer}' is wrong answer ;(. Correct answer was '${generatedQuestion.Answer}'`);
                console.log(`Let's try again, ${this.Name}`);
            }
        }
        console.log(`Congratulations, ${this.Name}'`);
    }
    static startName(){
    console.log("Welcome to the Brain Games!");
    this.Name = readlineSync.question("May I have your name? ", {
        encoding: "UTF-8"
    });
    console.log(`Hello, ${this.Name}`);
 }
}