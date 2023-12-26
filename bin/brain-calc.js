#!/usr/bin/env node
//import random from "../node_modules/random/dist/index.js";
import random from "../node_modules/random/dist/random.module.js";
import { Cli } from "../src/cli.js";
Cli.start({
    WriteoOnStart: `What is the result of the expression?`,
    GenerateQuestion() {
        let first = random.int(0, 99);
        let second = random.int(0, 99);
        let operationId = random.int(0, 2);
        let answer;
        let question;
        if (operationId === 0) {
            answer = first + second;
            question = `${first} + ${second}`;
        }
        else if (operationId === 1) {
            answer = first - second;
            question = `${first} - ${second}`;
        }
        else {
            answer = first * second;
            question = `${first} * ${second}`;
        }
        return {
            Answer: answer.toString(),
            Question: question
        };
    },
});
