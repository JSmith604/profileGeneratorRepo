const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const answers = [];


rl.question("What do you think of Node.js? ", (answer) => {
    answers.push(answer);
    rl.question("What is your name? ", (answer) => {
      answers.push(answer);
      rl.question("What is your nick name? ", (answer) => {
        answers.push(answer);
        rl.question("What activity do you like doing? ", (answer) => {
          answers.push(answer);
          rl.question("What is your favourite food? ", (answer) => {
            answers.push(answer);
            rl.question("What band are you listening to right now? ", (answer) => {
              answers.push(answer);
            
            const node = answers[0];
            const name = answers[1];
            const nickName = answers[2];
            const activity = answers[3];
            const food = answers[4];
            const band = answers[5];
            console.log();
            console.log("Your profile is ready!");
            console.log(`My name is ${name} or you can call me ${nickName}. I really like ${activity} and my favourite food is ${food}. Right now I have ${band} on repeat! I think node is ${node}.`);
            rl.close();
          });
        });
      });
    });
  });
});