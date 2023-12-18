import random from "../node_modules/random/dist/index.js";
//import random from "../node_modules/random/dist/random.module.js";

import { Cli, GeneratedQuestion } from "../src/cli.js";
Cli.start({
    WriteoOnStart: `Answer "yes" if the number is even, otherwise answer "no".`,
    GenerateQuestion(): GeneratedQuestion {
        let question = random.int(0, 99);
        let answer = true;
        for (let index = 2; index < question; index++) {
            if (question === index)
                continue;
            if (question % index === 0)
                answer = false;
        };
        return {
            Answer: answer ? 'yes' : 'no',
            Question: question.toString()
        }
    },
})