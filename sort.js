const incomingData = '{"data": [{"user": "mike@mail.com", "rating": 20, "disabled": false},{"user": "greg@mail.com", "rating": 14, "disabled": false},{"user": "john@mail.com", "rating": 25, "disabled": true},{"user": "johny@mail.com", "rating": 25, "disabled": true}],"condition": {"exclude": [{"disabled": true}], "sort_by": ["rating"]}}';
// const incomingData = '{"data": [{"name": "John", "email": "john2@mail.com"},{"name": "John", "email": "john1@mail.com"},{"name": "Jane", "email": "jane@mail.com"},{"name": "John", "email": "john3@mail.com"}],"condition": {"include": [{"name": "John"}], "sort_by": ["email"]}}';


function dataSorting(incomingData) {
   const { data, condition } = JSON.parse(incomingData);

   // let conditionNames = [];
   // let conditionValues = [];
   //  for (const key in condition) {
   //     conditionNames.push(key);
   //     console.log(Object.keys(condition[key][0])[0]);
   //     if (typeof condition[key][0] === "string") {
   //              conditionValues.push(condition[key][0]);
   //     } else {
   //        conditionValues.push(Object.keys(condition[key][0])[0]);
   //     }
   // }
   // console.log(conditionNames);
   // console.log(conditionValues);
   // console.log(Object.keys(conditionValues[0][0])[0]);


   const conditionName = Object.keys(condition)[0];//exclude
   const conditionKey = Object.keys(Object.values(condition)[0][0])[0];//disabled
   const conditionValue = Object.values(Object.values(condition)[0][0])[0];// true
   const sortBy = condition.sort_by[0];//rating

   // console.log(conditionKey, conditionValue);
   // console.log(sortBy);
   
   const result = data.filter((item) => conditionName === "include"
      ? item[conditionKey] === conditionValue
      : item[conditionKey] !== conditionValue)
      .sort((first, second) => {

         if (typeof first[sortBy] === "string") {
         
         return first[sortBy].localeCompare(second[sortBy]);
      }
      return first[sortBy] - second[sortBy];
   });
   


   return console.log(JSON.stringify({"result":[...result]}));
}

dataSorting(incomingData);
