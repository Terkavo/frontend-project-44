import random from "../node_modules/random/dist/index.js";
//import random from "../node_modules/random/dist/random.module.js";
import { Cli } from "../src/cli.js";
Cli.start({
    WriteoOnStart: `Find the greatest common divisor of given numbers.`,
    GenerateQuestion() {
        let arf = random.int(2, 9);
        let start = random.int(0, 100);
        let step = random.int(1, 15);
        let question = '';
        let answer = 0;
        for (let index = 1; index < 11; index++) {
            if (arf !== index)
                question += `${start + step * index} `;
            else {
                question += `.. `;
                answer = start + step * index;
            }
        }
        return {
            Answer: answer.toString(),
            Question: question
        };
    },
});
