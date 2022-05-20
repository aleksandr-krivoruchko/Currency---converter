// const data = [
//   {
//     id: "1",
//     question: "What is your marital status?",
//     answers: ["Single", "Married",]
//   },

//   {
//     id: "2",
//     question: "Are you planning on getting married next year?",
//     answers: {
//       0: "Yes",
//       1: "No",
//     }
//   },


//   {
//     id: "3",
//     question: "How long have you been married?",
//         answers: {
//       0: "Less than a year",
//       1: "More than a year",
//     }
//   },

//   {
//     id: "4",
//     question: "Have you celebrated your one year anniversary?",
//     answers: {
//       0: "Yes",
//       1: "No",
//     }
//   },
// ];
const data = [
  {
    id: "1",
    question: "What is your marital status?",
    answer: [{
      text: "Single",
      next_question: "1.1",
    },
     {
      text: "Married",
      next_question: "1.2",
    }],
  },

  {
    id: "1.1",
    question: "Are you planning on getting married next year?",
    answer: [{
      text: "Yes",
      next_question: "1.1.1",
    },
     {
      text: "No",
      next_question: "2.1.2",
    }],
  },


  {
    id: "1.2",
    question: "How long have you been married?",
    answer: [{
      text: "Less than a year",
      next_question: "1.2.1",
    },
     {
      text: "More than a year",
      next_question: "1.2.2",
    }],
  },

  {
    id: "1.2.2",
    question: "Have you celebrated your one year anniversary?",
    answer: [{
      text: "Yes",
      next_question: "1.2.2.1",
    },
     {
      text: "No",
      next_question: "1.2.2.2",
    }],
  },
];
   const qqq = ['qqq'];
const www = ['www'];

for (let i = 0; i < data.length; i++) {
   console.log(data[i].question);
   for (let j = 0; j < data[i].answer.length; j++) {
      if ( data[i].answer[0].next_question === data[j+1].id) {
         qqq.push([data[i].question, data[i].answer[0].text], [data[j+1].question, data[j+1].answer[0].text, data[j+1].answer[1].text])
      } 
      if (data[i].answer[1].next_question === data[j+1].id) {
                  www.push([data[i].question, data[i].answer[1].text], [data[j+1].question, data[j+1].answer[0].text, data[j+1].answer[1].text])
      }
   }
}
console.log(qqq);
console.log(www);