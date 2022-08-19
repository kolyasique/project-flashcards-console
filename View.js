const readline = require('readline');
const { stdin: input, stdout: output } = require('process');

class View {
  constructor() {
    this.read = readline.createInterface({ input, output });
  }

  async showMenu(topicsMenu) {
    return new Promise((resolve, rejects) => {
      this.read.question(`Выберите темы из списка:\n${topicsMenu.join('\n')}.\nНапиши цифру\n`, (answer) => {
        resolve(answer);
      })
    })
  }

  async showQuestion(question) {
    return new Promise((resolve, rejects) => {
      this.read.question(`${question}\n`, (answer) => {
        resolve(answer);
      })
    })
  }

  close() {
    this.read.close();
  }

  // showTopics(topicsMenu) {
  //   console.log(topicsMenu);// rl выводит на экран меню и потом дожидается ответа пользователя и далееююю
  // }
}

module.exports = View