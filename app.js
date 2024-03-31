const quizdData = [
  {
    questions: "What does HTML Stand For?",
    options: [
      "Hyper Text Markup Language",
      "Hyper Transfer Markup Language",
      "Hyper Machine Markup Language",
      "Hyper and Text Markup Language",
    ],
    correct: 0,
  },
  {
    questions:
      "Whic CSS Property is used  to control the spacing between elements?",
    options: ["margin", "padding", "spacing", "border-spacing"],
    correct: 1,
  },
  {
    questions: "What is the Javascript function used to select HTML by its id?",
    options: [
      "document.query",
      "getElementById",
      "selectElemnet",
      "findElementById",
    ],
    correct: 1,
  },
  {
    questions:
      "In React.Js which hook is used to preform side effects in a function componant?",
    options: ["useEffect", "useState", "useContext", "useReducer"],
    correct: 0,
  },
  {
    questions: "which HTML tag is used to create an order list?",
    options: ["<ul>", "<li>", "<ol>", "<dl>"],
    correct: 2,
  },
];
// java script initialization;
const answerElm = document.querySelectorAll(".answer");
// console.log(answerElm[3]);
const [questionElm, option_1, option_2, option_3, option_4] =
  document.querySelectorAll(
    "#question, .option_1, .option_2 .option_3 .option_4 "
  );
// console.log(questionElm);
// console.log(option_1);
// console.log(option_2);
// console.log(option_3);
// console.log(option_4);
// console.table([questionElm, option_1, option_2, option_3, option_4]);
const submitbtn = document.querySelector("#submit");
const currentQuiz = 0;
const score = 0;

//load QuizFunction
const loadQuiz = () => {
  const { questions, options } = quizdData[currentQuiz];
  questionElm.innerText = questions;
  options.forEach(
    (curOption, index) => (window[`option_${index + 1}`].innerText = curOption)
  );
};

loadQuiz();
