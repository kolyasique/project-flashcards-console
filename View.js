const readline = require('readline');
const { stdin: input, stdout: output } = require('process');
const { resolve } = require('path');
const { rejects } = require('assert');

class View {
  constructor() {
    this.read = readline.createInterface({ input, output });
  }

  async showMenu(topicsMenu) {
    return new Promise((resolve, rejects) => {
      this.read.question(`${topicsMenu}\n`, (answer) => {
        resolve(answer);  
        this.read.close();      
      })

    }) 
  }

  // async showAnswer(topicsMenu) {
  //   const answer = await this.showMenu(topicsMenu)
  // }


}

const view = new View;
view.showMenu('ljsd').then((data) => console.log(data));

module.exports = View