let questions = [{
    id: '1',
    question: 'What is your marital status?',
    answer1: {
      text: 'Single',
      next_question: '1.1'
    },
    answer2: {
      text: 'Married',
      next_question: '1.2'
    }
  },

  {
    id: '1.1',
    question: 'Are you planning on getting married next year?',
    answer1: {
      text: 'Yes',
      next_question: '1.1.1'
    },
    answer2: {
      text: 'No',
      next_question: '2.1.2'
    }
  },

  {
    id: '1.2',
    question: 'How long have you been married?',
    answer1: {
      text: 'Less than a year',
      next_question: '1.2.1'
    },
    answer2: {
      text: 'More than a year',
      next_question: '1.2.2'
    }
   },
  
  {
    id: '1.2.2',
    question: 'Have you celebrated your one year anniversary?',
    answer1: {
      text: 'Yes',
      next_question: '1.2.2.1'
    },
    answer2: {
      text: 'No',
      next_question: '1.2.2.2'
    }
  }
];

function questionnaire(data) {
//[{"What is your marital status?": "Single"},
// {"Are you planning on getting married next year?": "Yes/No"}],
// [{"What is your marital status?": "Married"},
// {"How long have you been married?": "Less than a year"}],
// [{"What is your marital status?": "Married"},
// {"How long have you been married?": "More than a year"},
// {"Have you celebrated your one year anniversary?": "Yes/No"}],



//    console.log(tree);
//          const path1 = [];
// const path2 = [];
//    for (const item of data) {
//       if (item.id === '1') {
//          path1.push({ [item.question]: item.answer1.text })
//       } else { path2.push({ [item.question]: item.answer2.text }) }
      
//       if (item.id === '1.1') {
//          path1.push({[item.question]:`${item.answer1.text}/${item.answer2.text}`})
//       } else { path2.push({ [item.question]: `${item.answer1.text}/${item.answer2.text}`}) }
//    }
// console.log(path1);
// console.log(path2);
//    console.log(result);
      let result = { paths: { number: 0, list: [] } }

   const tree = {};

for (const item of data) {
   //  tree[item.question] = `${item.answer1.text}/${item.answer2.text}`;
       tree[item.id] = {[item.question]:`${item.answer1.text}/${item.answer2.text}`};
   }
   console.log(tree);
   // console.log(Object.values(questions)[0]);
   // console.log(Object.keys(tree)[0]);
const array = Object.entries(tree)

for (let index = 0; index < array.length; index++) {
   const element = array[index];
   if (element[0].includes(1))
   result.paths.list.push(element)
   console.log(element[0]);
}
}

questionnaire(questions)