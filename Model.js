const fs = require("fs").promises;

class Model {
  constructor() {
    this.topicsMenu = ['1. Ночные ястребы', '2. Выдра', '3. Эльбрус', '4. Еноты'];
    this.topics = [];
    this.answers = []; 
    this.questions = []; 
    this.score = 0;
    this.choosenNumber = 0;
    this.answersAll = [];
  }

  async fillTopics() {
    this.topics = await fs.readdir("./topics");
    return this.topics
  }

  async fillQuestions(file) {
    const filetext = await (await fs.readFile(`./topics/${file}`, "utf-8")).split("\n");
    let arrayOfQuestions = await filetext.filter((el, id) => id % 3 === 0);
    this.questions = arrayOfQuestions;
  }

  async fillAnswers(file) {
    const filetext = await (await fs.readFile(`./topics/${file}`, "utf-8")).split("\n");
    let arrayOfAnswers = await filetext.filter((el, id) => el != "").filter((el, id) => id % 2 != 0);
    this.answers = arrayOfAnswers;
    return arrayOfAnswers;
  }
}


module.exports = Model;
