class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }

  async run() {

    // Просим экземпляр класса модели прочитать папку со всеми темами и составить меню.
    const starterTopics = this.model.topicsMenu;
    const numberAnswer = await this.view.showMenu(starterTopics);
    this.model.choosenNumber = await numberAnswer;

    let count = 0;
    let answers = [];

    for (let i = 0; i < this.model.allQA.length; i += 1) {
      const answer = await this.view.showQuestion(this.model.allQA[i].question);
      count += 1;
      answers.push(answer);
    }
    
    if (count === 3) {
      this.view.close();
    }

    this.model.answersAll = await answers;

    console.log(this.model.answersAll);
       
    // this.model.readTopics(this.printTopicsController);
  }
}

module.exports = Controller