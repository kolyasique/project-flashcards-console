class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }

  async run() {
    const starterTopics = this.model.topicsMenu;
    const numberAnswer = await this.view.showMenu(starterTopics);
    this.model.choosenNumber = await numberAnswer - 1;
    const topics = await this.model.fillTopics();

    await this.model.fillQuestions(topics[this.model.choosenNumber])
    const listQuestions = await this.model.questions;
    
    await this.model.fillAnswers(topics[this.model.choosenNumber])
    const listAnswers = await this.model.answers;
    
    let count = 0;
    let answers = [];

    for (let i = 0; i < listQuestions.length; i += 1) {
      const answer = await this.view.showQuestion(listQuestions[i]);
      count += 1;
      if (answer === listAnswers[i]) {
        console.log('\x1b[32m', 'Правильный ответ!😎');
      } else {
        console.log('\x1b[31m', `Ошибочка 🤡 Правильный ответ "${listAnswers[i]}"`);
      }
      answers.push(answer);
      console.log('\x1b[0m');
    }

    this.model.answersAll = await answers;
    const scoreArr = listAnswers.filter((el, index) => el === this.model.answersAll[index]);
    
    if (count === listQuestions.length) {
      console.log(`Квиз завершён. Ты молодец, ответил правильно аж на ${scoreArr.length} из ${listAnswers.length} вопросов!`)
      this.view.close();
    }
  }
}

module.exports = Controller