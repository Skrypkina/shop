import "./sass/style.scss";

("use strict");

// slider
const slides = document.querySelectorAll("[ data-slides ]");
const prevStep = document.querySelector("[ data-prev ]");
const nextStep = document.querySelector("[ data-next ]");
const dots = document.querySelectorAll("[ data-dots ]");

prevStep.addEventListener("click", handlePrevBtnClick);
nextStep.addEventListener("click", handleNextBtnClick);

// class Slider {
//   constructor(options) {
//     this.slideArray = options.slideArr;
//     this.dotArray = options.dotArr;
//   }
//   findCurrItem() {
//     return this.slideArray.find((slide) => slide.classList.contains("current"));
//     // return this.slideArray.find((slide) => slide.hasAttribute("data-active"));
//   }
//   findCurrIdx(currentItem) {
//     return this.slideArray.indexOf(currentItem);
//   }

//   addActiveClass(currentIdx) {
//     this.dotArray[currentIdx].classList.add("active");
//   }
//   removeItem(currentIdx) {
//     this.slideArray[currentIdx].classList.remove("current");
//     this.dotArray[currentIdx].classList.remove("active");
//   }
//   addItem(currentIdx) {
//     this.slideArray[currentIdx].classList.add("current");
//     this.dotArray[currentIdx].classList.add("active");
//   }

//   showSlides(currentIdx) {
//     const id = setInterval(() => {
//       this.removeItem(currentIdx);
//       currentIdx++;
//       if (currentIdx > this.slideArray.length - 1) {
//         currentIdx = 0;
//       }
//       this.addItem(currentIdx);
//     }, 3000);
//     return id;
//   }
// }

// const slider = new Slider({
//   slideArr: [...slides],
//   dotArr: [...dots],
// });

// const currItem = slider.findCurrItem();
// let currIdx = slider.findCurrIdx(currItem);
// slider.addActiveClass(currIdx);
// const intervalId = slider.showSlides(currIdx);

// functions

// function handlePrevBtnClick() {
//   clearInterval(intervalId);
//   const item = slider.findCurrItem();
//   let idx = slider.findCurrIdx(item);
//   slider.removeItem(idx);
//   idx--;
//   if (idx < 0) {
//     idx = slider.slideArray.length - 1;
//   }
//   slider.addItem(idx);
// }

// function handleNextBtnClick() {
//   clearInterval(intervalId);
//   const item = slider.findCurrItem();
//   let idx = slider.findCurrIdx(item);
//   slider.removeItem(idx);
//   idx++;
//   if (idx > slider.slideArray.length - 1) {
//     idx = 0;
//   }
//   slider.addItem(idx);
// }

//================================
class Slider {
  constructor(options) {
    this.slideArray = options.slideArr;
    this.dotArray = options.dotArr;
    this.currentIdx = options.currentIdx;
  }
  hide() {
    this.slideArray[this.currentIdx].style.display = "block";
    this.dotArray[this.currentIdx].classList.add("active");
    this.slideArray.forEach((slide) => {
      if (slide !== this.slideArray[this.currentIdx]) {
        slide.style.display = "none";
      }
    });
  }
  showNextSlide() {
    this.dotArray[this.currentIdx].classList.remove("active");
    this.slideArray.forEach((slide) => (slide.style.display = "none"));
    this.currentIdx++;
    if (this.currentIdx > this.slideArray.length - 1) {
      this.currentIdx = 0;
    }
    this.slideArray[this.currentIdx].style.display = "block";
    this.dotArray[this.currentIdx].classList.add("active");
  }
  showPrevSlide() {
    this.dotArray[this.currentIdx].classList.remove("active");
    this.slideArray.forEach((slide) => (slide.style.display = "none"));
    this.currentIdx--;
    if (this.currentIdx < 0) {
      this.currentIdx = slider.slideArray.length - 1;
    }
    this.slideArray[this.currentIdx].style.display = "block";
    this.dotArray[this.currentIdx].classList.add("active");
  }
  showSlides() {
    return setInterval(() => {
      this.showNextSlide();
    }, 3000);
  }
}

const slider = new Slider({
  slideArr: [...slides],
  dotArr: [...dots],
  currentIdx: 0,
});
slider.hide();
const intervalId = slider.showSlides();

function handlePrevBtnClick() {
  clearInterval(intervalId);
  slider.showPrevSlide();
}

function handleNextBtnClick() {
  clearInterval(intervalId);
  slider.showNextSlide();
}

//================================

// distructure object, arrays the same, only in []

const student = {
  name: "Kally",
  age: 24,
  projects: {
    dicegame: "lalala",
  },
};

const {
  name,
  age,
  projects: { dicegame },
} = student;
// console.log(name);
// console.log(age);
// console.log(dicegame);

function addressMaker({ city, state }) {
  const newAdress = { city, state, country: "United States" };
  return newAdress;
}
// const x = addressMaker({ city: "Austin", state: "Texas" });
// console.log(x);

const students = [
  { name: "Mark", city: "New York" },
  { name: "Den", city: "Kiev" },
  { name: "Alex", city: "Dnepr" },
];

for (const student of students) {
  const { name, city } = student;
  console.log(`${name} lives in ${city}`);
}

let example = "Larysa";

// complites the string to a value 10 letters and include empty spaces if it is several words
// console.log(example.padStart(10, "a"));
// console.log(example.padEnd(10, "b"));

// classes
class Player {
  constructor(name, country) {
    this.name = name;
    this.country = country;
  }
  getPlayerInfo() {
    console.log(`${this.name} was born in ${this.country}`);
  }
}

class TennisPlayer extends Player {
  constructor(name, country, age) {
    super(name, country);
    this.age = age;
  }
  getPlayerAge() {
    console.log(
      `${this.name} is ${this.age} years old and knows how to play tennis`
    );
  }
}

const ronaldo = new TennisPlayer("Ronaldo", "Spain", 38);

// ronaldo.getPlayerAge();
// ronaldo.getPlayerInfo();

// promises

const buyFlightTicket = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const error = false;
      if (error) {
        reject("sorry");
      } else {
        resolve("thank you");
      }
    }, 3000);
  });
};

// buyFlightTicket()
//   .then((success) => console.log(success))
//   .catch((error) => console.log(error));

const getUserData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const error = false;
      if (error) {
        reject("sorry, the user not found");
      } else {
        resolve("user is Den, email is Den@co.il");
      }
    }, 3000);
  });
};

getUserData();
// .then((success) => console.log(success))
// .catch((error) => console.log(error));

// fetch

// fetch("https://jsonplaceholder.typicode.com/comments/1")
//   .then((res) => {
//     if (res.ok) return res.json();
//     throw new Error(`Error while fetching ${res.statusText}`);
//   })
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));

fetch("https://jsonplaceholder.typicode.com/comments", {
  method: "POST",
  body: JSON.stringify({
    postId: 500,
    name: "Den",
    email: "Den@co.il",
  }),
  // headers: { "Content-type": "application/json; charset=UTF-8" },
}).then((res) => {
  if (res.ok) return res.json();
  throw new Error(`Error while fetching ${res.statusText}`);
});
// .then((data) => console.log(data))
// .catch((err) => console.log(err));

// async await

const apiUrl = "https://jsonplaceholder.typicode.com/comments/1";

async function getJoke() {
  const res = await fetch(apiUrl).then((res) => {
    if (res.ok) return res.json();
    throw new Error(`Error while fetching ${res.statusText}`);
  });
  // const data = await res.json();
  console.log(res);
}

getJoke();

// set

const exampleSet = new Set([1, 1, 1, 1, 2, 2, 2]);
exampleSet.add(5).add(9);
exampleSet.delete(5); // return boolean true ore false
console.log(exampleSet.size);
console.log(exampleSet.has(1));
exampleSet.clear();
console.log(exampleSet.size);

// higher oder arrow functions (map, filter and reduce)
// higher oder function takes another fanctions for arguments

/*
To collect variables into array use (...args)
*/
let total = 0;
function getSum(...args) {
  total = args.reduce((arg, counter) => arg + counter, 0);
  return total;
}

getSum(2, 4, 7);

console.log(total);

// destructuring object

const voxel = {
  x: 3,
  y: 4.5,
  z: 8,
};

const { x: a, y: b, z: c } = voxel;
console.log(a, b, c);

// in arrays
const array = [1, 2, 3, 4];
const [one, , , two] = array;

console.log(one, two);

// return the array with first 2 elements missing

const list = ["potato", "onians", "tomato", "cucamber"];

function removeFromList(array) {
  const [, , ...newList] = array;
  return newList;
}

console.log(removeFromList(list));

// shotter way to wright function that returns an object

// const createPerson = (name, age, gender) => {
//   const person = {
//     name,
//     age,
//     gender,
//   };
//   return person;
// };

const createPerson = (name, age, gender) => ({ name, age, gender });
console.log(createPerson("den", 35, "male"));

//difference bitween var ES5 and let&const ES6
var string = "yes";
var string = "no"; // can declear twice and the will be no in console
console.log(string);

function checkScope() {
  var i = "function scope";
  if (true) {
    i = "block scope";
    console.log("block scope", i); //block scope
  }
  console.log("function scope", i); //block scope and not function scope
}
/*
if comment  var i = "function scope"; in function scope console we
still will see block scope
*/
checkScope();

// for loop in ES6
/*
for (let car of cars) {
  console.log(car);
}
*/

//toFixed(2) method that returns 2 numbers after integer
console.log(+(0.4 + 0.2).toFixed(2)); // but it is string, + in the beggining convert to a number

/*
BigInt новый тип данных, который ввели, чтобы работать с числами,
большими, чем Number.MAX_SAFE_INTEGER
К этому числу дописываем числа и n в конце и число становится BigInt, который 
работает с другими BigInt. Здесь в вэбпак это не поддерживается и нельзя
вывести в консоль
*/
// console.log(9007199254740991);

// Math
console.log(Math.sqrt(25)); //квадратный корень
// вычисления возведение в степень
const x = Math.pow(2, 4);
console.log(x);
//брать модуль числа- отсекает негативную часть и берет модуль
console.log(Math.abs(-42));
//взять максимальное число или минимальное число
console.log(Math.max(2, 6, 44));
console.log(Math.min(2, 6, 44));
//округляет в меньшую сторону
console.log(Math.floor(4.9));
console.log(Math.trunc(4.9));
//или в большую
console.log(Math.ceil(4.9));
console.log(Math.round(4.9));
Math.random();

function getNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
console.log(getNumber(3, 8));

//strings
const firstName = "Larysa";
console.log(firstName.toUpperCase());
console.log(firstName.toLowerCase());
console.log(firstName.charAt(3));
console.log(firstName.indexOf("ry"));
console.log(firstName.startsWith("L"));
console.log(firstName.endsWith("y"));

//new in functions

function logPerson(s, name, age) {
  console.log(s);
  console.log(name);
  console.log(age);
  //мы можем теперь валидировать
  if (age > 40) {
    age = "not yet";
  }
  return `${s[0]} ${name}${s[1]} ${age}`;
}
const personName = "Larysa";
const personAge = 35;
const personName2 = "Den";
const personAge2 = 42;

const output = logPerson`name: ${personName}, age: ${personAge}`;
//эта строка в параметре-мфссиве s разбивается на 0 элем массива name: , 1 - , age:
const output2 = logPerson`name: ${personName2}, age: ${personAge2}`;
console.log(output);
console.log(output2);

// objects
/*
перебор объектов в цикле может имеет подвох, так как могут перебираться
не только ключи самого объекта, но и его предка object
поэтому всегда нужно писать проверку
В более современных методах Object.keys & Object.values эти проверки делать не 
надо, так как они перебирают только собственные свойства объекта
*/
const person = {
  name: "Ben",
  age: 26,
};
for (let key in person) {
  if (person.hasOwnProperty(key)) console.log(key); // key
  console.log(person[key]); //value
}
/*
Создаем в объекте метод, используя контекст, ключнвое слово this- где this и есть
сам объект
*/

const creature = {
  logKeys() {
    console.info(Object.keys(this));
    console.log(this);
  },
  logWithParams(top = false, between = false, bottom = false) {
    if (top) {
      console.log("--------top---------");
    }
    Object.keys(this).forEach((key, index, array) => {
      console.log(`${key} : ${this[key]}`);
      if (between && index !== array.length - 1) {
        console.log("--------------------");
      }
    });
    if (bottom) {
      console.log("--------bottom---------");
    }
  },
};

// creature.logKeys(); // методом Object.keys мы пробегаем по самому creature

// если в метод передать другой объект, то все равно мы будем пробегать по creature
// creature.logKeys(person);
// мы теперь можем пользоваться этим методом, чтобы выводить в консоль любой объект

// метод bind привязывает контекст объекта, который мы передаем навсегда и возвращает
// новую функцию, после переданного объекта, принимает неограниченное кол-во параметров через запятую

// const newCreature = creature.logKeys.bind(person);
// newCreature();

// метод call привязывает переданный объект и сразу вызывает функцию, в контексте этого объекта
creature.logKeys.call(person);

// если передавать параметры в метод call

creature.logWithParams.call(person, true, true, true);
// параметры передаются через запятую после объекта. Метод call принимает неограниченное
//кол-во параметров, в зависимости, сколько сама функция принимает

// Apply - принимает только 2 параметра: первый- объект, второй массив из тех
// аргументов, которые нужны для функции

creature.logWithParams.apply(person, [true, true, true]);

// DOM console.dir(document.querySelector('h1'))
console.dir(prevStep.textContent);

// challenge
// создать функцию bind, при вызове которой она выводит в консоль данные объекта
function logPersons() {
  console.log(`Person: ${this.name}, ${this.age}, ${this.job}`);
}

const person1 = {
  name: "Den",
  age: 26,
  job: "frontend",
  logPersons: logPersons,
};
const person2 = {
  name: "Ben",
  age: 36,
  job: "full stack",
};

bind(person1, logPersons)();
bind(person2, logPersons)();

function bind(obj, fn) {
  return function (...args) {
    fn.apply(obj, args);
  };
}
//можно и call, но apply позволит в будущем передать любые аргументы
/*
Class 
//static properties - доступны только у самого класса Animal.type
static type = 'ANIMAL'

class Animal {
  constructor(options) {
    this.name = options.name,
    this.age = options.age
    this.tail  = options.tail
  }
  voice() {
    console.log('wow')
  }
}

const cow = new Animal({
  name: 'Cow',
  age: 3,
  tail: true
})

классы удобны для наследования. Доступны методы родительского класса - voice()
class Cat extends Animal {
  constructor(options) {
    super(options)
    this.color = options.color
  }
  В классе Cat можно переписывать родительские методы
voice() {
    console.log('I am cat')
    можно вызвать родительский метод
   super.voice()
  }
getters and setters

get ageInfo() {
  return this.age * 4
}
set ageInfo(newAge) {
  this.age = newAge
}
}

const cat = new Cat({
  name: 'Cat',
  age: 7,
  tail: true,
  color: 'black'
})
cat.getinfo - не метод, просто поле
*/

class Component {
  constructor(selector) {
    this.$el = document.querySelector(selector); // приватная переменная
  }
  hide() {
    this.$el.style.display = "none";
  }
  show() {
    this.$el.style.display = "block";
  }
}

class Box extends Component {
  constructor(options) {
    super(options.selector);
    this.$el.style.width = this.$el.style.height = options.size + "px";
    this.$el.style.backgroundColor = options.color;
  }
}

const box1 = new Box({
  selector: "#box1",
  size: 100,
  color: "red",
});
box1.hide();
box1.show();

class Circle extends Box {
  constructor(options) {
    super(options);
    this.$el.style.borderRadius = "50%";
  }
}

const circle = new Circle({
  selector: "#circle",
  size: 90,
  color: "green",
});

// async await

const delay = (ms) => {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve();
    }, ms)
  );
};

// delay(2000).then(() => console.log("after 2 sec"));

const url = "https://jsonplaceholder.typicode.com/todos/";

// function fetchTodos() {
//   return delay(2000)
//     .then(() => fetch(url))
//     .then((response) => response.json());
// }
// fetchTodos()
//   .then((data) => console.log(data))
//   .catch((err) => console.error(err));

//создадим одну функцию, которая будет делать то же самое, но с применением async await

async function fetchAsyncTodos() {
  try {
    await delay(2000); // мы не перейдем к след строчке, пока данный промис не выполнится Эту
    //функцию и выполняет оператор await
    // в fetch(url) мы получаем респонс, поэтому записываем его в переменную
    const response = await fetch(url); //результат работы оператора await
    //дальше нам нужно выполнить еще один промис, который возвращает метод респонз
    const data = await response.json();
    return data;
    // console.log(data);
  } catch (e) {
    console.error(e);
  } finally {
    console.log("выполнится в любом случае, даже если произошла ошибка");
  }
}
//функция, которая является асинхронной, всегда возвращает промис. Мы можем использовать метод then
fetchAsyncTodos().then((dataInfo) => console.log(dataInfo));

// Proxi - ловушки для объектов. Организуем ловушки и внутри них можем переписывать
//базовый функционал
const larysa = {
  name: "Larysa",
  age: 44,
  job: "frontend",
};

const proxyLarysa = new Proxy(larysa, {
  //ловушка на метод гет
  get(target, prop) {
    // console.log("target", target); // наш объект
    // console.log("prop", prop); //название поля, к которому обращаемся
    console.log(`getting prop:${prop}`);
    return target[prop];
  },
  set(target, prop, value) {
    if (prop in target) {
      return (target[prop] = value);
    } else {
      throw new Error(`There is not ${prop} in ${target}`);
    }
  },
  //метод has возвращает true ore false и говорит, есть ли такое поле в объекте
  //наш объект может иметь только заданные 3 поля
  has(target, prop) {
    return ["name", "age", "job"].includes(prop); // возвращает true ore false
  },

  //удалять свойство из объета
  deleteProperty(target, prop) {
    delete target[prop];
    return true;
  },
});
console.log(proxyLarysa.name);
proxyLarysa.age = 40;
console.log(proxyLarysa);
console.log("name" in proxyLarysa); //проверяем метод has
delete proxyLarysa.age;
console.log(proxyLarysa);

//Proxy functions
const log = (text) => console.log(`Log: ${text}`);
log("Hello");

const fnproxy = new Proxy(log, {
  apply(target, thisArg, args) {
    console.log("calling fn");
    //(target - сама функция, thisArg- ее контекст, args-массив аргументов, кот мы передали
    //и тут мы можем преобразовывать, делать любые действия
    // return target.apply(thisArg, args).toUpperCase();- не работает из-за вэбпака скорее всего
  },
});
fnproxy("text");

// proxi классы и ключевое слово new

class Human {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const Humanproxy = new Proxy(Human, {
  //вторым параметром передаем объект и список хэндлеров
  construct(target, args) {
    console.log("construct ...");
    //перехватываем метод конструктора и возвращаем какую-то логику
    //target является экземпляром класса Human
    //...args это name, age
    return new Proxy(target(...args), {
      get(t, prop) {
        console.log(`getting ${prop}`);
        return t[prop];
      },
    });
  },
});
// const p = new Humanproxy("Denis", 20);
// console.log(p.name); - не работает

// генераторы

function* strGenerator() {
  //благодаря символу * есть доступ к спец ключевому слову внутри функции yield
  yield "h";
  yield "e";
  yield "l";
  yield "l";
  yield "o";
}

const str = strGenerator(); //это функция генератор, у кот есть метод next
console.log(str.next()); // получаем объект и один из ключей -  "h";
//если снова вызвать функцию  next, то получим объект со след буквой
console.log(str.next());
//если сразу обратиться к значению str.next().value
console.log(str.next());
console.log(str.next());
console.log(str.next());
//когда закончились yield и мы вызываем, то получаем value:undefind,done:true-
//true означает, что генератор закончил цикл последов. операций и больше ничего в нем нет
console.log(str.next());

function* numberGen(n = 10) {
  for (let i = 0; i < n; i++) {
    yield i; //мы в цикле, но js не выдает сразу все значения, а по вызову
  }
}
const num = numberGen(7);
console.log(num.next()); //0
console.log(num.next()); //1
//в этом и заключается смысл генераторов - порционно выдавать значения, пока done:true
//что значит, что больше нет значений

//Пример логики генераторов

// const iterator = {
//   gen(n = 10) {
//     let i = 0;
//     //чтобы возвращало все значения от 0 до 10 нужно вернуть next()
//     return {
//       next() {
//         if (i < n) {
//           return { value: ++i, done: false };
//         }
//         return { value: undefined, done: true };
//       },
//     };
//   },
// };
// const itr = iterator.gen(5);
// console.log(itr.next());
// console.log(itr.next());
// console.log(itr.next());
// console.log(itr.next());
// console.log(itr.next());
// console.log(itr.next());
//перепишем ее

function* iter(n = 10) {
  for (let i = 0; i < n; i++) {
    yield i;
  }
} // в генераторе по умолчанию определен symbol.iterator, кот позволяет итерировать в цикле for of
// дальше данный генератор вызвать в цикле for of
for (let num of iter(6)) {
  console.log(num);
}

//Objects.entries(obj) - reverse Object.fromEntries(obj)

//MAP - Карты

const obj = {
  name: "Larysa",
  age: 44,
  ocupation: "frontend",
};
const entries = Object.entries(obj);

const map = new Map(entries);
console.log(map); // конструкция очень похожая на объект

//метод get()
console.log(map.get("ocupation")); // = obj.ocupation
// очень похоже на объект, но есть отличия - вызываем значения методами и в качестве
//ключей можем указывать любые типы данных и они будут являться ключами

//создадим новое значение
map
  .set("newField", 42) // ключ - строчка
  .set(obj, "this is object") // ключ- объект
  .set(NaN, "is it NaN?");
// console.log(map);

//Delete field - returns true(deleted) ore false(not deleted becouse there is no such field)
map.delete("ocupation");
console.log(map.has("ocupation"));

//сколько ключей в карте
console.log(map.size);
//очистить карту
// map.clear();
// console.log(map.size);
// у карты есть символ-итератор, кот позволяет ее работать в цикле for of

// for (let entry of map) {
//   console.log(entry);
// }

// for (let [key, value] of map) {
//   console.log(key, value);
// }

// итерация по значениям

// for (let val of map.values()) {
//   console.log(val);
// }
// итерация по ключам
// for (let key of map.keys()) {
//   console.log(key);
// }
// цикл forEach позволяет пробегать по всем его значениям
// map.forEach((val, key, obj) => {
//   console.log(val, key);
// });

//из карты можно быстро сделать массивы несколькими способами

// const mapArray = Array.from(map)
const mapArray = [...map];
console.log(mapArray);
//карта - это усложненный объект- мы можем сделать объект из этой карты

const mapObj = Object.fromEntries(map.entries());

console.log(mapObj); // но вместо ключа-объекта мы получаем [object object]
//так как в обычных объектах ключами объекты не могут быть и поэтому js приводит
//объект к строке методам toString() и получается "[object object]"

//EXAMPLE MAP USAGE

const users = [{ name: "Denis" }, { name: "Daryna" }, { name: "Alex" }];
//нужно для каждого пользователя записывать время, когда он посещал сайт или читал статью

const visitsMap = new Map();
visitsMap
  .set(users[0], new Date())
  .set(users[1], new Date(new Date().getTime() + 1000 * 60))
  .set(users[1], new Date(new Date().getTime() + 5000 * 60));

//создаю функцию и с помощью карты достаю его время посещения сайта

function lastVisit(user) {
  return visitsMap.get(user);
}
console.log(lastVisit(users[1]));

//SET
const set = new Set([1, 2, 3, 3, 4, 5, 5, 6]);
console.log(set); // возвращает значения в единственном экземпляре

//методы
// set.add(10).add(20).add(30).add(20);
// console.log(set);
// console.log(set.has(30));
// console.log(set.size);
// set.delete(30);
// console.log(set);
// // set.clear()
// console.log(set.values());
// console.log(set.keys()); // эти два метода выдают одно и то же, значения массива

//можно пробегать циклом for of

//
//EXAMPLES
function uniqueValues(array) {
  return [...new Set(array)];
}
uniqueValues([1, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6]);

//Weakmap
// то же самое6 что и map, но меньше методов,если какое-то значение убирается сборщиком мусора- он автоматически
//удаляется из Weakmap
//с его помощью избегаем утечек данных в js

let weakObj = {
  name: "Weakmap",
};
// const weakArray = [weakObj];
// weakObj = null; // будет null в консоли,но в массиве он останется
// console.log(weakObj);
//но в картах, где ключи могут быть объектами, можно стереть их значение и будет утечка памяти
//чтобы этого не было существует Weakmap
//В Weakmap ключами могут быть только объекты

const newMap = new WeakMap([[weakObj, "obj data"]]);
console.log(newMap);
// methods get,set,delete,has, нет метода size
console.log(newMap.has(weakObj));
console.log(newMap.get(weakObj));
weakObj = null;
console.log(newMap.get(weakObj)); //undefind
//EXAMPLES

//нужно создать функцию, которая в кэш записывает пользователей

const cashe = new WeakMap();
function casheUser(user) {
  if (!cashe.has(user)) {
    cashe.set(user, Date.now());
  }
  return cashe.get(user);
}

let lena = {
  name: "Lena",
};

let alex = {
  name: "Alex",
};
casheUser(lena);
casheUser(alex);
console.log(cashe);
lena = null;
console.log(cashe); // почистило и лены уже нет и память очищена, хотя напрямую я не трогала cashe

//Weakset
// то же самое6 что и set, но меньше методов
//значения только объекты и если какой-то объект убирается сборщиком мусора- он автоматически
//удаляется из Weakset

const users1 = [{ name: "Den" }, { name: "Ben" }, { name: "Ashray" }];

const visit = new WeakSet();
visit.add(users1[0]).add(users1[1]);
console.log(visit);
//можно пользоваться только методом has
users1.splice(1, 1);
console.log(visit.has(users1[0]));
console.log(visit.has(users1[1])); // автоматом он был удален из Weakset

//fetch

const requestUrl = "https://jsonplaceholder.typicode.com/users";

const body = {
  name: "Larysa",
  age: 44,
};
function sendRequest(method, url, body = null) {
  const headers = {
    "Content-Type": "application/json",
  };
  // return fetch(url, {
  //   method: method,
  //   body: JSON.stringify(body),
  //   headers: headers,
  // }).then((response) => response.json()); //по умолчанию выполняется метод гет

  if (body) {
    return fetch(url, {
      method: method,
      body: JSON.stringify(body),
      headers: headers,
    }).then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(error.statusText);
    });
  } else {
    return fetch(url).then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(error.statusText);
    });
  }
}
// sendRequest("GET", requestUrl, null)
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

sendRequest("POST", requestUrl, body)
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

//Local storage работает только со стороками!!!
//Applocation=> storage => localStorage
//localStorage.setItem('key', 'value')
//localStorage.getItem('key')
//localStorage.removeItem('key')
//localStorage.clear() - remove everything
//чем отличается localStorage от cokees - он намного больше(localStorage размер 5 мегабайт)
//cokees улетают вместе с запросами на сервер и сервер может их распарсить. localStorage - нет

//OBJECTS ES6

const city = "city";
const job = "frontend";

const adress = {
  [city]: "Kiev",
  job,
  getAddress() {
    console.log(`I am ${this.job} dev`, this);
  },
  toString() {
    return Object.keys(this)
      .filter((key) => key !== "toString" && key !== "getAddress")
      .map((key) => this[key])
      .join(" ");
  },
};
// console.log(adress);
console.log(adress.toString()); // выводятся функции, которых быть не должно
//для этого добавляем метод filter

//methods
const first = { a: 1 };
const second = { b: 2 };

//сравнить на эквивалентность
// console.log(Object.is(20, 20)); //true
// console.log(Object.is(10, 20)); //false

//
// console.log(Object.assign({}, first, second)); // new object
// console.log(first, second); // haven't changed

function add(...args) {
  return args.reduce((acc, arg) => acc + arg, 0);
}
console.log(add(1, 3, 4));

//SIMBOL абсолютно уникальные
const symbol = Symbol("demo");
const anotherSimbol = Symbol("demo");

console.log(symbol === anotherSimbol); // false
//их предназначение - динамические ключи в объектах

const objec = {
  name: "Denis",
  [symbol]: "meta",
};
// console.log(objec[symbol]); //meta
//эти поля скрыты, то есть если пробежаться циклом по объекту,который бежит и по собсьвенным
//полям и по прототипу
for (let key in objec) {
  console.log(key); // symbol not visible in the loop
}
//символы нужны для задания мета данных и для того, чтобы их использовать

//Interview

/*
типы данных
null, underfind, boolean, number, string, object, symbol
все примитивные, кроме object
*/

//FALSY: '', 0, underfind, null, NaN, false
//пустой объект, массив или функция выдают по приведению типов true

// == vs ===
// == -сравнивает с приведением типов, === - сравнивает без приведения типов

// console.log(2 == "2"); // true
// console.log(2 === "2"); //false
// console.log(undefined == null); //true
// console.log(undefined === null); //false
console.log("0" == false); //true
console.log("0" == 0); //true
console.log(false == ""); //true
console.log(false == []); //true
console.log(false == {}); //false
console.log("" == 0); //true
console.log("" == []); //true
console.log("" == {}); //false
console.log(0 == []); //true
console.log(0 == {}); //false
console.log(0 == null); //false

//HOISTING

//let & const не поднимаются

// console.log(i); //underfind, not an error,
// var i = 42;
// console.log(y); // error
// const y = 40;

//function expression and function declaration

//function declaration
// console.log(square(25)); // можем вызывать до того, как мы их объявили
// function square(num) {
//   return num ** 2; // возвести во 2 степень
// }
//function expression - error можно использовать только после объявления
// const square = function (num) {
//   return num ** 2;
// };

//IIfe immediate invoked function expression - моментально выполняется
//используются для создания локального scope

function addFive(num) {
  return function (num2) {
    return num + num2;
  };
}

const addAll = addFive(5);

console.log(addAll(2));

// find the biggest world

const findLongestWord = function (string) {
  const array = string.split(" ");
  let word = array[0];
  for (const arr of array) {
    if (arr.length > word.length) {
      word = arr;
    }
  }

  return word;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // 'jumped'

//=====================
/*
Напиши функцию formatString(string) которая принимает строку и форматирует ее если необходимо.

Если длина строки не превышает 40 символов, функция возвращает ее в исходном виде.
Если длина больше 40 символов, то функция обрезает строку до 40-ка символов и добавляет 
в конец строки троеточие '...', после чего возвращает укороченную версию.
*/
const formatString = function (string) {
  // const subString = string.slice(0, 40);
  if (string.length > 40) {
    return string.slice(0, 40) + "...";
  } else {
    return string;
  }
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(formatString("Curabitur ligula sapien, tincidunt non."));
// вернется оригинальная строка

console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis."));
// вернется форматированная строка

console.log(formatString("Curabitur ligula sapien."));
// вернется оригинальная строка

console.log(
  formatString(
    "Nunc sed turpis. Curabitur a felis in nunc fringilla tristique."
  )
);
// вернется форматированная строка

//==========================================================
const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

// const isLoginValid = function (login) {
//   const length = login.length;
//   if (length >= 4 && length <= 16) {
//     return true;
//   } else {
//     return false;
//   }
// };

// const isLoginUnique = function (allLogins, login) {
//   if (allLogins.includes(login)) {
//     return false;
//   } else {
//     return true;
//   }
// };

// const addLogin = function (allLogins, login) {
//   const num = isLoginValid(login);
//   const log = isLoginUnique(allLogins, login);
//   if (!num) {
//     console.log("Ошибка! Логин должен быть от 4 до 16 символов");
//     return;
//   }
//   if (!log) {
//     console.log("Такой логин уже используется!");
//     return;
//   }
//   logins.push(login);
//   console.log("yes");
//   return logins;
// };

// console.log(logins);
// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(addLogin(logins, "Ajax")); // 'Логин успешно добавлен!'
// console.log(addLogin(logins, "robotGoogles")); // 'Такой логин уже используется!'
// console.log(addLogin(logins, "Zod")); // 'Ошибка! Логин должен быть от 4 до 16 символов'
// console.log(addLogin(logins, "jqueryisextremelyfast")); // 'Ошибка! Логин должен быть от 4 до 16 символов'
/*
предикатная функция возарвщает true ore false
втроенные в язык предикатные функции
Array.isArray;
Number.isNaN;
Number.isInteger;
*/

//===================
// const findBestEmployee = function (employees) {
//   const array = Object.values(employees);
//   let biggestSalary = array[0];
//   let employee;
//   for (const elem of array) {
//     if (elem > biggestSalary) {
//       biggestSalary = elem;
//     }
//   }
//   for (let elem in employees) {
//     if (employees[elem] === biggestSalary) {
//       employee = elem;
//     }
//   }
//   return employee;
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(
//   findBestEmployee({
//     ann: 29,
//     david: 35,
//     helen: 1,
//     lorence: 99,
//   })
// ); // lorence

// console.log(
//   findBestEmployee({
//     poly: 12,
//     mango: 17,
//     ajax: 4,
//   })
// ); // mango

// console.log(
//   findBestEmployee({
//     lux: 147,
//     david: 21,
//     kiwi: 19,
//     chelsy: 38,
//   })
// ); // lux

//=====================
/*
Напиши функцию getAllPropValues(arr, prop), которая получает массив объектов и имя свойства. 
Возвращает массив значений определенного свойства prop из каждого объекта в массиве.
*/
// const products = [
//   { name: "Радар", price: 1300, quantity: 4 },
//   { name: "Сканер", price: 2700, quantity: 3 },
//   { name: "Дроид", price: 400, quantity: 7 },
//   { name: "Захват", price: 1200, quantity: 2 },
// ];

// const getAllPropValues = function (arr, prop) {
//   const values = [];
//   for (const elem of arr) {
//     for (let item in elem) {
//       if (item === prop) {
//         values.push(elem[item]);
//       }
//     }
//   }
//   return values;
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(getAllPropValues(products, "name")); // ['Радар', 'Сканер', 'Дроид', 'Захват']

// console.log(getAllPropValues(products, "quantity")); // [4, 3, 7, 2]

// console.log(getAllPropValues(products, "category")); // []
//=========================================

const userss = [
  {
    id: "701b29c3-b35d-4cf1-a5f6-8b12b29a5081",
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    skills: ["ipsum", "lorem"],
    gender: "male",
    age: 37,
  },
  {
    id: "7a3cbd18-57a1-4534-8e12-1caad921bda1",
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
    gender: "female",
    age: 34,
  },
  {
    id: "88beb2f3-e4c2-49f3-a0a0-ecf957a95af3",
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    skills: ["nulla", "anim", "proident", "ipsum", "elit"],
    gender: "male",
    age: 24,
  },
  {
    id: "249b6175-5c30-44c6-b154-f120923736f5",
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    skills: ["adipisicing", "irure", "velit"],
    gender: "female",
    age: 21,
  },
  {
    id: "334f8cb3-eb04-45e6-abf4-4935dd439b70",
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    skills: ["ex", "culpa", "nostrud"],
    gender: "male",
    age: 27,
  },
  {
    id: "150b00fb-dd82-427d-9faf-2879ea87c695",
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    skills: ["non", "amet", "ipsum"],
    gender: "male",
    age: 38,
  },
  {
    id: "e1bf46ab-7168-491e-925e-f01e21394812",
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    skills: ["lorem", "veniam", "culpa"],
    gender: "female",
    age: 39,
  },
];

//Массив имен всех пользователей у которых есть друг с указанным именем.

// const getUsersWithFriend = (users, friendName) =>
//   users.filter((user) => user.friends.includes(friendName));

// console.log(getUsersWithFriend(userss, "Briana Decker")); // [ 'Sharlene Bush', 'Sheree Anthony' ]
// console.log(getUsersWithFriend(userss, "Goldie Gentry")); // [ 'Elma Head', 'Sheree Anthony' ]

//Массив имен (поле name) людей, отсортированных в зависимости от количества их друзей (поле friends)

// const getNamesSortedByFriendsCount = (users) =>
//   users
//     .sort((prev, next) => prev.friends.length - next.friends.length)
//     .map((user) => user.name);

// console.log(getNamesSortedByFriendsCount(userss));
// // [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]//

//Получить массив всех умений всех пользователей (поле skills), при этом не должно быть повторяющихся умений и они должны быть отсортированы в алфавитном порядке.

// const getSortedUniqueSkills = (users) => {
//   const skills = users.map((user) => user.skills);
//   const filtered = [];

//   skills.forEach((skill) => {
//     skill.forEach((elem) => {
//       if (!filtered.includes(elem)) {
//         filtered.push(elem);
//       }
//     });
//   });
//   return filtered.sort();
// };

// console.log(getSortedUniqueSkills(userss));
// // //[ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]

// Событие фокус не всплывает, focus - поле в фокусе, blur - когда фокус ушел
// Событие change отслеживает изменения в поле. Событие происходит не во время печатания,
//а когда мы фокус убираем. Это не очень удобно
// чтобы сразу поучать то, что юзер ввел - событие input. evt.currentTarget.value
// current target - узел, где повешен event listener
//target - узел, где произошло событие

//собирать поля с формы
// свойство elements - это псевдлмассив, где хранятся все элементы формы
// в том порядке, в котором они в интерфейсе стоят - коллекция всех интерактивных эл-тов
//так же в нем есть свойства по атрибуту name
/*
const {elements} = event.currentTarget;
const nameInput = elements.name;
const emailInput = elements.email;
const passwordInput = elements.password;
//это ссылки на наши элементы
//у каждого инпута есть свойство name(атрибут name) и свойство value - его значение

const data = {
  [nameInput.name]: nameInput.value,
  [emailInput.name]: emailInput.value,
  [passwordInput.name]: passwordInput.value,
  subscriptionValue
}
data - объект с собранными данными

//выбор checkboxes
//браузер в elements кидает свойство с именем группы checkboxes(атрибут name) и
// еще браузер записывает текущий value
// напртмер у всех checkboxes name = "subscription" 1- free, 2-basic, 3- pro
//выбираем basic и сабмитим
в elements.subscription.value будет basic;
const subscriptionValue = form.elements.subscription.value;
Ни в коем случае не выбирать все querySelector
*/

// БЫСТРО СОБРАТЬ ФОРМУ

/*
function handleSubmitWithFormData(evt) {
  evt.preventDefault();
  //constructor formData - собирает все за нас
  const formData = new formData(event.currentTarget); - она пустая
  const data = {}
  for(const entry of formData.entries()) {
    console.log(entry); - в виде массивов - неудобно

    // formData.forEach((name, value) => {
      data[name] = value;
    }) - получаем тот же самый объект
  }
}
*/

//keyPress - для обычных клавиш
// keyDown && keyUp - для служебных
// например при закрытии модалки слушается кнопка escape на keydown.

// tasks======================

// const ingredients = [
//   "Картошка",
//   "Грибы",
//   "Чеснок",
//   "Помидоры",
//   "Зелень",
//   "Приправы",
// ];
//Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li,
//после чего вставит все li за одну операцию в список ul.ingredients.
//Для создания DOM-узлов используй document.createElement().
// const ul = document.querySelector("#ingredients");

// function createMarkup(item) {
//   const row = `
//   <li class="item">${item}</li>
//   `;
//   return row;
// }

// function createList(array) {
//   return array.map((arr) => createMarkup(arr)).join("");
//   // return array.reduce((acc, arr) => (acc += createMarkup(arr)), " ");
// }
// const markup = createList(ingredients);

// ul.insertAdjacentHTML("afterbegin", markup);

// task 2 ======================
//Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.

// const input = document.querySelector("#validation-input");

// input.addEventListener("change", handleInputChange);

// function handleInputChange(evt) {
//   evt.preventDefault();
//   if (input.classList.contains("invalid")) {
//     input.classList.remove("invalid");
//   } else if (input.classList.contains("valid")) {
//     input.classList.remove("valid");
//   }
//   const value = evt.target.value.length;
//   const attribute = Number(input.getAttribute("data-length"));
//   if (value !== attribute) {
//     input.classList.add("invalid");
//   }
//   input.classList.add("valid");
// }

// task 3

//Напиши скрипт создания и очистки коллекции элементов.
//Пользователь вводит количество элементов в input и нажимает кнопку Создать,
// после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция
//элементов очищается.

//Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число.
// Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

//Каждый созданный div:

//Имеет случайный rgb цвет фона
//Размеры самого первого div - 30px на 30px
//Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
//Создай функцию destroyBoxes(), которая очищает div#boxes.

const createBtn = document.querySelector('button[data-action="render"]');
const destroyBtn = document.querySelector('button[data-action="destroy"]');
const inputValue = document.querySelector("#controls > input");
const container = document.querySelector("#boxes");

destroyBtn.addEventListener("click", handleDestroyBtnClick);
createBtn.addEventListener("click", handleCreateBtnClick);
//================ functions

function createBoxes(amount) {
  // const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  // div.style.backgroundColor = `#${randomColor}`;
  const array = [];
  let width = 30;
  for (let i = 0; i < amount; i += 1) {
    array.push(i);
  }
  const markup = array.reduce(
    (acc, arr) =>
      (acc += `<div class="div" style="background-color: #${Math.floor(
        Math.random() * 16777215
      ).toString(16)};width:${width}px; ";></div>`),
    ""
  );

  return markup;
}

function handleDestroyBtnClick() {
  container.innerHTML = "";
  inputValue.value = "";
}

function handleCreateBtnClick() {
  const input = Number(inputValue.value);
  const markup = createBoxes(input);
  container.insertAdjacentHTML("afterbegin", markup);
}

let z = 30;
console.log(String((z += 10)));
// DELEGATION
const nav = document.querySelector(".js-nav");

nav.addEventListener("click", handleClick);

function handleClick(e) {
  e.preventDefault();
  // console.log(e.currentTarget);
  if (e.target === e.currentTarget) {
    return; //если кликнули по ul, выходим, так как мы работаем с лишками
    //исключать родителя из события клика
  }
  const activeLink = e.currentTarget.querySelector(".active");
  if (activeLink) {
    activeLink.classList.remove("active");
  }
  e.target.classList.add("active");
}

//todos

//model
const todos = {
  items: [],
  add(text) {
    const todo = {
      id: Date.now(),
      text,
    };
    this.items.push(todo);
    return todo;
  },
  delete(id) {
    this.items = this.items.filter((item) => item.id !== id);
  },
};

//interface

const refs = {
  editor: document.querySelector(".js-editor"),
  toDoList: document.querySelector(".js-todo-list"),
};
//лучше эти ссылки на узлы писать в одном объекте refs

// const editor = document.querySelector(".js-editor");
// const toDoList = document.querySelector(".js-todo-list");

refs.editor.addEventListener("submit", handleEditorSubmit);
refs.toDoList.addEventListener("click", handleDelBtnClick);

function handleEditorSubmit(e) {
  e.preventDefault();
  const inputValue = e.currentTarget.elements.text.value;
  const todo = todos.add(inputValue);
  const todoMarkup = createTodoItem(todo);
  appendTodoItem(refs.toDoList, todoMarkup);
  e.currentTarget.reset();
}

//добавить кусок интерфейса- функция, кот будет сщздавать шаблон

function createTodoItem(item) {
  return `  <li class="todo-list__item" data-id="${item.id}">
  <div class="todo">
  <p class="todo-text">${item.text}</p>
  <div class="todo-actions">
    <button class="btn" type="button">Delete</button>
  </div>
</div>
</li>`;
}

function appendTodoItem(parentRef, elem) {
  parentRef.insertAdjacentHTML("beforeend", elem);
}

function handleDelBtnClick(e) {
  if (e.target.nodeName !== "BUTTON") {
    return;
  }
  const button = e.target;
  const li = button.closest(".todo-list__item");
  const id = Number(li.dataset.id);
  todos.delete(id);
  // refs.toDoList.removeChild(li);
  li.remove(); // современный api
}
// Chatty events, throtling & debounce
//некоторые ивенты слишком болтливые Chatty- встречаются слишком часто
//если повесить слушателя на скрол - очень много раз будет вызываться его хэндл. Это плохо
//Событие в виде скрола и инпута есть смысл притармаживать, чтобы колбэк выполнялся
//один раз в пол секунды. И тутнужен trotling - торможение - библиотека ladash
// sdn если не webpack - throttle.js- обычный файл js, где написана функция throttle

// window.addEventListener("scroll", throtlle(onScroll,500)); // второй аргумент 500ms
//trottle на местосвоего вызова вернет заторможенную функцию, кот будет вызывать
//onScroll раз в 500ms
function onScroll() {
  console.log("yes");
}
//Чаще всего используется при скроле

//        DEBOUNCE

//это событие input - хочется, чтобы не каждая буква показывалась, а пользователь
//наводил, наводил и когда остановился - делать фильтрацию и показывать, но при этом
//не убирается крсор из инпута, событие blur ore onChange не происходит

// document
//   .querySelector(".js-deb")
//   .addEventListener("input", debounce(inputClick, 300));

// function inputClick() {
//   console.log("input event!");
// }
// Нужно затормозить, throttle здесь не подойдет, так как мы не можем ограничить пользователя
//кол-вом милисекунд. Лучше пока набирает- пусть набирает и как только остановился-
// что-то вызвать. DEBOUNCE если фенкция не была вызвана за определенный промежуток времени-
//то оно ее вызывает. Т.е. - событие происходит, и как только мы перестаем печатать-
//DEBOUNCE вызывает функцию.После того, как юзер приостановил печать, он ждет 300 мили секунд
//и только тогда вызывает

//INTERSECTION OBSERVER - класс, который организует наблюдение
//за вхождением элемента во вьюпорт

const input = document.querySelector(".group");

const options = {
  threshold: 0.5, // когда пол эл-та влезет во вьюпорт - тригери, сколько % эл-та должно влезть во вьюпорт
};

const observer = new IntersectionObserver(onEntry, options); //{} - опции
//после чего указываем обзерверу за чем нам наблюдать
const sections = document.querySelectorAll("section");

sections.forEach((section) => {
  observer.observe(section);
});
//собрали все секции в документе и на каждую повесили обзервер
//И теперь, когда секция будет входить во вьюпорт - будет выполняться
//функция onEntry

function onEntry(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      //если пересекает, то выведи эл-т, который сейчас пересекает
      const sectionId = entry.target.getAttribute("id");
      const currentActiveLink = input.querySelector("group-active");
      if (currentActiveLink) {
        currentActiveLink.classList.remove("group-active");
      }
      //на тот эл-т, у которого sectionId нужно его добавить
      // const nextEctiveLink = input.querySelector(`a[href="#sectionId"]`);
      //nextEctiveLink.classList.add("group-active");
    }
  });
}
//entries коллекция всех вхождений
//это scroll-spy
// polyfill - реализует новый функционал в старых браузерах, где этот функционал
//не поддерживается

// ЛЕНИВАЯ ЗАГРУЗКА ИЗОБРАЖЕНИЙ
//загрузка имеджей, которых не видно - все тормозит
//lazt-load - ленивая загрузка изображений- до тех пор, пока пользователь не прокрутил
//до этого имеджа - его грузить не нужно
//для каждого изображения нужен свой INTERSECTION OBSERVER - обзервить до тех пор,
//пока картинка не вошла во вьюпорт, потом ее загрузить, потом уже плевать, обзервер нужно
//снять

const lazyLoad = (target) => {
  const options = {
    rootMargin: "50px 0px",
    threshold: 0.01,
  };
  const newObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        const srcUrl = img.dataset.lazy; // dataset - отсекается data и берется lazy
        img.setAttribute("src", srcUrl);
        observer.disconnect();
      }
    });
  }, options);
  newObserver.observe(target); //без этого не будет работать,за чем наблюдать
};
const images = document.querySelectorAll(".portfolio img");

images.forEach((image) => {
  lazyLoad(image);
});

// таймеры
// function padStart() and padEnd()
//'1'.padStart(2, '0') //'01';
//'1'.padStart(5, '0') //'00001';

// промисы

// создаем horse races

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const horse = {
  name: "Mango",
  racetime: randomIntegerFromInterval(2000, 3000),
};

const horses = ["Mango", "Poly", "Ayaks", "Chelsy", "Kiwi"].map((name) => ({
  name,
  racetime: randomIntegerFromInterval(2000, 3000),
}));

console.table(horses);
const promises = horses.map((horse) => race(horse));

// const race = (horse, onFinished) => {
//   setTimeout(() => {
//     onFinished(horse);
//   }, horse.racetime);
// };

// race(horse, notifyWhenFinished); // но это зависимость от внешних функций
//желательно, что когда лошадь добежит, нам вернулся промис

//поэтому

function race(horse) {
  return new Promise((resolve, reject) =>
    setTimeout(() => {
      const crashed = Math.random > 0.5;
      if (crashed) {
        reject({ horse, errorMessage: "crashed" });
      } else {
        resolve(horse); // можно передать только 1 значение, много нельзя
        //если надо много - передавать объект
      }
    }, horse.racetime)
  );
} // это независимое

// race(horse)
//   .then((horse) => notifyWhenFinished(horse))
//   // .then((horse) => console.log(horse))
//   .catch((error) => {
//     console.log(error);
//   }); // код их связывает

function notifyWhenFinished({ name, racetime }) {
  console.log(`${name} is finished in ${racetime}`);
} // это независимое

//чтобы запустить массив лошадей
notifyWhenRaceFinishes(promises); //получаем массив из промисов
notifyWinner(promises);

function notifyWhenRaceFinishes(horses) {
  // const promises = horses.map((horse) => race(horse));
  Promise.all(horses)
    .then((res) => {
      console.log(res);
    })
    .catch((error) => console.error(error));
}

function notifyWinner(horses) {
  Promise.race(horses).then((winner) => {
    console.log(`The winner is ${winner.name}`);
  });
}
//в синхронном коде можно сделать промис, который резолвнится мгновенно,
//чтобы не вносить изменения в модель и работать с кодом дальше

const cart = {
  // remove(id) {
  //   return new Promise((resolve) => {
  //     setTimeout(() => {
  //       this.items = this.items.filter((item) => item !== id);
  //       resolve(id)
  //     }, 300);
  //   });
  // },
  update(id) {
    return Promise.resolve(id); //статический метод, кот позволяет взять синхронную функцию
    //и вернуть промис и позволяет внешнему коду работать с результатом
    //будет выполнено асинхронно, но мгновенно, после всего синхронного кода
  },
};

cart.update(1).then((id) => updateUIAfterUpdate(id));

function updateUIAfterUpdate(id) {
  return id + 1;
}

//window.requestAnimationFrame() - use для анимации, для инлайн через js
// settimeout() & setinterval() не используются для анимации

//есть какая-то функция для анимации

// const animateBar = () => {
//   BarProp.style.width += 5;// width не анимируется, это для примера
// requestAnimationFrame(animateBar)
// };
//браузер будет эту функцию animateBar будет вызывать каждые 16 миллисекунд
//но потом нужно отменить, так как будет рисовать до бесконечности, поэтому
//можно поставить проверку

// const animateBar = () => {
//   BarProp.style.width += 5;// width не анимируется, это для примера
// if(width < 100%) {
//   requestAnimationFrame(animateBar)
// }
// };

//геолокация

// console.log(window.navigator);// объект геолокации

const getcurrentPosition = () => {
  const options = {
    timeout: 5000,
  };
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject, options);
  });
};

getcurrentPosition()
  .then((location) => {
    console.log(location);
  })
  .catch((error) => {
    console.log(error);
  });

//пагинация - возможность бэка отдать за 1 запрос часть данных
//это контролтируется параметрами запроса
//api.com/articles?q=cat?per_page=20&page=1 - api смотреть в доках
//нужно создать папку services/news-service.js - делаем запрос на бэк

/*
const baseUrl = "...."
exort default {
  page: 1,
  query: '',
  fetchArticles() {
    const options = {
      headers: {
        Autorization: '546576878980'
      },
      
  const requestParams = `?q=${this.query}&page=${this.page}$pageSize=15`

   return fetch(baseUrl+requestParams, options).then(response => response.JSON()).then(data=> {
     this.incrementPage();
    return  data.articles;
    
    })
   возвращает промис
  },
  get searchQuery() {
        return this.query;
      },
          set searchQuery(string) {
      this.searchQuery = string;
      }
    }
  incrementPage() {
    this.page +=1;
  },
  resetPage() {
    this.page = 1;
  }
}

//в другом модуле выбираем инпут квериселектором, добавляем ивент листенер и 
пишем функцию handleSubmit,импортируем наш запрос как newsService
 
handleSubmit(e) {
  e.preventDefault();
  const form = e.currentTarget;
  const input = form.elements.(name of input);
  const inputValue = input.value;
  clearList();- чтобы очищался список при новом запросе
    newsService.resetPage();-чтобы при втором запросе данные загружались с 1 страницы
  newsService.searchQuery = inputValue;
  newsService.fetchArticles().then(data => {
    insertListItems(data) - можно написать .then(insertListItems)
  }).catch(error=> {console.worn(error)});
  input.value="";
}


функция, добавляющая заметки в ДОМ
function insertListItems(items) {
  articleListItemsTemplate(items) - заимпортированный файл handlebars
   const markup = buildListItemsArticles(items)
  refs.articlesList.insertAjacentHTML('beforeend', markup);
}

В конце кнопка Load more
есть 3 стратегии догрузки контента
- бесконечный скрол - через обзервер, но есть плагины
-нажать на кнопку

хэндлер, который вешается на кнопку

function loadMoreBtnHandler() {
newsService.fetchArticles().then(insertListItems).catch(error=> {console.worn(error)});
}

очищать список при смене query 

function clearList() {
  refs.articleList.innerHtml ='';
}
 */

// rel ="noopener norefferer" вместе с target="_blank" в тэге а - вкладка,
//новая, которую ты открыл ничего не знает про ту, с которой ты ее открыл- против хакеров
