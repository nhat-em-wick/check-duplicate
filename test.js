// check client
const values = [
  { id: 11, name: "someName3" },
  { id: 10, name: "someName1" },
  { id: 10, name: "someName2" },
  { id: 12, name: "someName4" },
  { id: 12, name: "someName12" },
  { id: 9, name: "someName120" },
  { id: 12, name: "someName120" },
  { id: 13, name: "someName120" },
  { id: 12, name: "someName120" },
];

const lookup = values.reduce((a, e) => {
  a[e.id] = ++a[e.id] || 0;
  return a;
}, {});
// console.log(lookup);

const newArr = values.map((item) => {
  if (item.id in lookup && lookup[item.id] > 0) {
    return { ...item, duplicate: true };
  } else {
    return item;
  }
  // if(lookup.hasOwnProperty(item.id) && lookup[item.id] > 0) {
  //   return {...item, duplicate: true}
  // }else{
  //   return item
  // }
});
// console.log(newArr);

// console.log(values.filter(e => lookup[e.id]));'

