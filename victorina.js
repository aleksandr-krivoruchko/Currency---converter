let data = [
  {
    id: "1",
    question: "What is your marital status?",
    answer1: {
      text: "Single",
      next_question: "1.1",
    },
    answer2: {
      text: "Married",
      next_question: "1.2",
    },
  },

  {
    id: "1.1",
    question: "Are you planning on getting married next year?",
    answer1: {
      text: "Yes",
      next_question: "1.1.1",
    },
    answer2: {
      text: "No",
      next_question: "2.1.2",
    },
  },

  {
    id: "1.2",
    question: "How long have you been married?",
    answer1: {
      text: "Less than a year",
      next_question: "1.2.1",
    },
    answer2: {
      text: "More than a year",
      next_question: "1.2.2",
    },
  },

  {
    id: "1.2.2",
    question: "Have you celebrated your one year anniversary?",
    answer1: {
      text: "Yes",
      next_question: "1.2.2.1",
    },
    answer2: {
      text: "No",
      next_question: "1.2.2.2",
    },
  },
];

function questionnaire(data) {
  //[{"What is your marital status?": "Single"},
  // {"Are you planning on getting married next year?": "Yes/No"}],
  // [{"What is your marital status?": "Married"},
  // {"How long have you been married?": "Less than a year"}],
  // [{"What is your marital status?": "Married"},
  // {"How long have you been married?": "More than a year"},
  // {"Have you celebrated your one year anniversary?": "Yes/No"}],

  let result = { paths: { number: 0, list: [] } };
  const tree = {};
  console.log(tree);

  for (const item of data) {
    tree[item.question] = [item.answer1.text, item.answer2.text];
  }

  const firstKey = Object.keys(tree)[0];

  console.log(firstKey);
  console.log(tree[firstKey]);

  const func = (firstKey, firstArr) => {
    firstArr.push(firstKey);

    for (const item of tree[firstKey]) {
      if (!tree[item]) {
        result.paths.list.push([...firstArr, item]);
        //   console.log([...firstArr, item]);
      } else {
        func(item, [...firstArr]);
      }
    }
  };

  func(firstKey, []);
  console.log(result.paths.list);
}

questionnaire(data);
// ==================================================

// ==========================================================
// const tree = {};

// for (const item of data) {
//   tree[item.id] = [item.answer1.next_question, item.answer2.next_question];
// }
// console.log(tree);

// const firstKey = Object.keys(tree)[0];

// console.log(firstKey);
// console.log(tree[firstKey]);

// const func = (firstKey, firstArr) => {
//   firstArr.push(firstKey);

//   for (const item of tree[firstKey]) {
//     if (!tree[item]) {
//       console.log([...firstArr, item]);
//     } else {
//       func(item, [...firstArr]);
//     }
//   }
// };

// func(firstKey, []);
