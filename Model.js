class Model {
  constructor() {
    this.topicsMenu = [1, 2, 3];
    this.allQA = [
      {
        question: 'Что является основным источником пищи для ночных ястребов?',
        answer: 'насекомые'
      },
      {
        question: 'Верно или нет?  Ночные ястребы тесно связаны с ястребами!',
        answer: 'нет'
      },
      {
        question: 'Верно или нет?   Ночные ястребы вьют гнезда.',
        answer: 'нет'
      }
    ]
    this.answersAll = [];
    this.choosenNumber = 0;
  }


}

module.exports = Model