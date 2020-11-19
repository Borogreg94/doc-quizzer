const quizzes = {
    'javascript': [
        {
            question: "Destructuring is a way to extract values from",
            answers: {
              a: "Objects or Arrays",
              b: "An External Api",
              c: "Components"
            },
            correctAnswer: "a"
          },
          {
            question: "What is event bubbling?",
            answers: {
              a: "Describes how an event will have its declaration moved up to the top of the current scope",
              b: "It prevents a malicious script on one page from obtaining access to sensitive data on another web page",
              c: "Describes how an event starts at the most nested element and passes up the element's ancestors all the way to the document"
            },
            correctAnswer: "c"
          },
          {
            question: "What is the difference between synchronous and asynchronous functions?",
            answers: {
              a: "Synchronous functions are exclusive to ES6 while asynchronous functions are not",
              b: "Synchronous functions are blocking while asynchronous functions are not",
              c: "Synchronous functions are more efficient than asynchronous functions"
            },
            correctAnswer: "b"
          },
    ],

    'react': [
        {
            question: "question 1",
            answers: {
              a: "correct",
              b: "wrong",
              c: "wrong"
            },
            correctAnswer: "a"
          },
          {
            question: "question 2",
            answers: {
              a: "wrong",
              b: "wrong",
              c: "correct"
            },
            correctAnswer: "c"
          },
          {
            question: "question 3",
            answers: {
              a: "wrong",
              b: "correct",
              c: "wrong"
            },
            correctAnswer: "b"
          },
    ]
}

export default quizzes;