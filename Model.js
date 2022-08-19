const fs = require("fs").promises;

class Model {
  constructor() {
    this.topicsMenu = ['1. Ночные ястребы', '2. Выдра', '3. Еноты'];
    this.topics = [];
    this.answers = []; //this.answersFromFile(topic)
    this.questions = []; //this.questionsFromFile(topic)
    // this.questionsAndAnswers = this.questionsFromFile(topic)
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
    this.questions = arrayOfQuestions; // await filetext.filter((el, id) => id % 3 === 0);
    return arrayOfQuestions; // нужен только для проверки
  }

  async fillAnswers(file) {
    const filetext = await (await fs.readFile(`./topics/${file}`, "utf-8")).split("\n");
    let arr2 =[]
    let arrayOfAnswers = await filetext.filter((el, id) => el != "").filter((el, id) => id % 2 != 0);
    this.answers = arrayOfAnswers;
    return arrayOfAnswers;
  }

  async countscore(arrRigthRes, arrResults) {
      const counter = arrRigthRes.filter((el, index) => el === arrResults[index]).length;
      this.score = counter;
  }

  // async qAndA() {
  //   this.allQA  =  await this.questions.map((el, i) => {
  //     return {el: this.answers[i]};
  //     });
  // }


}


module.exports = Model;
