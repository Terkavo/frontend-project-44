import random from "../node_modules/random/dist/index.js";
//import random from "../node_modules/random/dist/random.module.js";

import { Cli, GeneratedQuestion } from "../src/cli.js";
Cli.start({
    WriteoOnStart: `Answer "yes" if the number is even, otherwise answer "no".`,
    GenerateQuestion(): GeneratedQuestion {
        let question = random.int(0, 99);
        return {
            Answer: (question % 2 === 0) ? 'yes' : 'no',
            Question: question.toString()
        }
    },
})