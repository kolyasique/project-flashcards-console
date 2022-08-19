const fs = require("fs").promises;

class Model {
  constructor() {

    this.topics = [];
    this.answers = []; //this.answersFromFile(topic)
    this.questions = []; //this.questionsFromFile(topic)
    // this.questionsAndAnswers = this.questionsFromFile(topic)
    this.allQA = [];
    this.score = 0
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

  async countscore(answersAll){
      let counter = await (await this.answers.filter((el, index) => el == await answersAll[index])).length
      this.score = counter
  }

  async qAndA() {
    this.allQA  =  await this.questions.map((el, i) => {
      return {el: this.answers[i]};
      });
  }


}



//Тест 1

// const newModul = new Model()
// newModul.fsAsyncFunctionReadFile('nighthawk_flashcard_data.txt')
// .then((data)=> {
//  const arr = data.split('\n')
//  return arr
// })
// // .then((arr)=>{return Promise.all(arr)})
// // .then((arr)=>console.log(arr))
// .then((arr)=>{
//   const sr = arr.filter((el,id)=> id % 3 === 0)
//   return sr
// })
// .then((arr)=>console.log(arr))

//Тест 2
// const newModul = new Model()
// newModul.arrayQandA('nighthawk_flashcard_data.txt')
// .then((data)=>console.log(data))

//Тест 3
// const newModul = new Model()
// newModul.questionsFromFile('nighthawk_flashcard_data.txt')
// .then((data)=> console.log(data))

//Тест 4
const newModul = new Model()

// newModul.createAllTogether(newModul.questions, newModul.answers).then((data) => console.log(data))


// newModul.fillTopics().then((data) => console.log(data + 'first'))
// newModul.fillAnswers('nighthawk_flashcard_data.txt').then((data) => console.log(data + 'sec'))
// newModul.fillQuestions('nighthawk_flashcard_data.txt').then((data) => console.log(data + 'third'))
// newModul.qAndA().then((data) => console.log(data + '4'))
module.exports = Model;
