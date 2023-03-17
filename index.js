const listofcandidate = ['sumit', 'ambuj', 'tanya', 'nandini', 'prabhat'];
const listoffile = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'r',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];

let newlist = [...listoffile];
let list = {};
var count = 3;

const getlist = (i) => {
  var arr = [];
  new Array(count).fill('').forEach((it1, index2) => {
    const randomno = Math.floor(Math.random() * newlist.length);
    arr = [...arr, newlist[randomno]];
    list[listofcandidate[i]] = arr;
    newlist = newlist.filter((e, i) => i !== randomno);
  });

  if (listofcandidate[i]) {
    getlist((i = i + 1));
  }

  return list
};


console.log(getlist(0));
