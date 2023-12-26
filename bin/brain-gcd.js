#!/usr/bin/env node
//import random from "../node_modules/random/dist/index.js";
import random from "../node_modules/random/dist/random.module.js";
import { Cli } from "../src/cli.js";
Cli.start({
    WriteoOnStart: `Find the greatest common divisor of given numbers.`,
    GenerateQuestion() {
        let st1 = random.int(0, 99);
        let st2 = random.int(0, 99);
        let gcd = 1;
        for (let index = st1; index > 0; index--) {
            if (st1 % index === 0 && st2 % index === 0) {
                gcd = index;
                break;
            }
        }
        return {
            Answer: gcd.toString(),
            Question: `${st1} ${st2}`
        };
    },
});
