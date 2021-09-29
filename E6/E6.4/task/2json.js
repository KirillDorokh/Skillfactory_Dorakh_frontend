const JsonString = `{ 
"list": [
  {
   "name": "Petr",
   "age": "20",
   "prof": "mechanic"
  },
  {
   "name": "Vova",
   "age": "60",
   "prof": "pilot"
  }
 ]
    
}
`;

const data = JSON.parse(JsonString);
const list = data.list;

console.log(list);