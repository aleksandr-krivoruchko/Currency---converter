const data = [
  {
    id: "1",
    question: "What is your marital status?",
    answer: [
      {
        text: "Single",
        next_question: "1.1",
      },
      {
        text: "Married",
        next_question: "1.2",
      },
    ],
  },

  {
    id: "1.1",
    question: "Are you planning on getting married next year?",
    answer: [
      {
        text: "Yes",
        next_question: "1.1.1",
      },
      {
        text: "No",
        next_question: "2.1.2",
      },
    ],
  },

  {
    id: "1.2",
    question: "How long have you been married?",
    answer: [
      {
        text: "Less than a year",
        next_question: "1.2.1",
      },
      {
        text: "More than a year",
        next_question: "1.2.2",
      },
    ],
  },

  {
    id: "1.2.2",
    question: "Have you celebrated your one year anniversary?",
    answer: [
      {
        text: "Yes",
        next_question: "1.2.2.1",
      },
      {
        text: "No",
        next_question: "1.2.2.2",
      },
    ],
  },
];

function questionnaire(data) {
  const result = { paths: { number: 0, list: [] } };
  let { list } = result.paths;

  const arr1 = [];
  const arr2 = [];
  const arr3 = [];

  for (let i = 0; i < data.length; i++) {
    const currentEl = data[i];
    const nextEl = data[i + 1];
    const ansId1 = currentEl.answer[0].next_question;
    const ansId2 = currentEl.answer[1].next_question;
    const ansText1 = currentEl.answer[0].text;
    const ansText2 = currentEl.answer[1].text;

    if (ansId1 === nextEl?.id) {
      arr1.push({ [currentEl.question]: ansText1 });

      arr1.push({
        [nextEl.question]: `${nextEl.answer[0].text}/${nextEl.answer[1].text}`,
      });
      arr2.push({ [currentEl.question]: ansText2 });
      arr3.push({ [currentEl.question]: ansText2 });
    }
    if (ansId2 === nextEl?.id) {
      arr3.push({ [currentEl.question]: ansText2 });
      arr3.push({
        [nextEl.question]: `${nextEl.answer[0].text}/${nextEl.answer[1].text}`,
      });
      arr2.push({ [currentEl.question]: ansText1 });
    }
  }

  list.push(arr1, arr2, arr3);
  result.paths.number = list.length;

  return result;
}
console.log(questionnaire(data));
