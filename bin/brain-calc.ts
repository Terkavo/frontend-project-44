
import random from "../node_modules/random/dist/index.js";
//import random from "../node_modules/random/dist/random.module.js";
import { Cli, GeneratedQuestion } from "../src/cli.js";
Cli.start({
    WriteoOnStart: `What is the result of the expression?`,
    GenerateQuestion(): GeneratedQuestion {
        let first = random.int(0, 99);
        let second = random.int(0, 99);
        let operationId = random.int(0, 2);

        let answer: number;
        let question: string;
        if (operationId === 0) {
            answer = first + second
            question = `${first} + ${second}`
        }
        else if (operationId === 1) {
            answer = first - second
            question = `${first} - ${second}`
        }
        else {
            answer = first * second
            question = `${first} * ${second}`
        }
        return {
            Answer: answer.toString(),
            Question: question
        }
    },
})