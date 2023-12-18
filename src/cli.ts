import * as readlineSync from "readline-sync";

export class Cli {
    static Name: string = "";
    static start(logic: GameLogic) {
        console.log("Привет в мозговитой игре");
        this.Name = readlineSync.question("Как звать тебя, пуник? ", {
            encoding: "UTF-8"
        });
        console.log(`Ну здарова ${this.Name}`);
        console.log(logic.WriteoOnStart);
        for (let i = 0; i <= 2; i++) {
            let generatedQuestion = logic.GenerateQuestion()
            console.log(generatedQuestion.Question)
            let answer = readlineSync.question("Your answer:", {
                encoding: "UTF-8"
            });
            if (answer === generatedQuestion.Answer)
                console.log("Correct!");
            else {
                console.log(`'${answer}' is wrong answer ;(. Correct answer was '${generatedQuestion.Answer}'`)
                console.log(`Let's try again, ${this.Name}`)
            }
        }
        console.log(`Congratulations, ${this.Name}'`)
    }
}
export interface GameLogic {
    WriteoOnStart: string
    GenerateQuestion: () => GeneratedQuestion
}
export interface GeneratedQuestion {
    Question: string;
    Answer: string
}