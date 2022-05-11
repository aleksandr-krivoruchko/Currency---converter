// const incomingData ='{"data": [{"user": "mike@mail.com", "rating": 20, "disabled": false},{"user": "greg@mail.com", "rating": 14, "disabled": false},{"user": "john@mail.com", "rating": 25, "disabled": true},{"user": "johny@mail.com", "rating": 25, "disabled": true}],"condition": {"exclude": [{"disabled": true}], "sort_by": ["rating"]}}';
const incomingData ='{"data": [{"name": "John", "email": "john2@mail.com"},{"name": "John", "email": "john1@mail.com"},{"name": "Jane", "email": "jane@mail.com"},{"name": "John", "email": "john3@mail.com"}],"condition": {"include": [{"name": "John"}], "sort_by": ["email"]}}';


function dataSorting(incomingData) {

  const { data, condition } = JSON.parse(incomingData);

   let filter = {}; //массив вытащенных ключей фильтра 
   
   const conditionName = Object.keys(condition)[0]; //ключ массива фильтрации 
   
//перебираем массив значений фильтрации и заполняем обьект filter
    Object.values(condition[conditionName]).forEach((item) => filter[Object.keys(item)] = item[Object.keys(item)]); 
   
  const conditionKey = Object.keys(filter)[0]; // ключ фильтрации 
  const conditionValue = Object.values(filter)[0]; //значение фильтрации 
   const sortBy = condition.sort_by[0]; //значение сортировки 

   // Сначала фильтруем по значению фильтрации, потом сортируем по значению сортировки
  const result = data
    .filter((item) =>
      conditionName === "include"
        ? item[conditionKey] === conditionValue
        : item[conditionKey] !== conditionValue
    )
    .sort((first, second) => {
      if (typeof first[sortBy] === "string") {
        return first[sortBy].localeCompare(second[sortBy]);
      }
      return first[sortBy] - second[sortBy];
    });

  return console.log(JSON.stringify({ result: [...result] }));
}

dataSorting(incomingData);
