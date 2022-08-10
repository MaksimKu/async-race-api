import './style.css'
import createSvg from './Imagesvg';
let model = ['BMW', 'Mercedes', 'Opel', 'Audi', 'Nissan', 'Subaru', 'Porche', 'Ford', 'Kia', 'Ваз'];
let mod = [
  ['X1', 'X2', 'X3', 'X4', 'M1', 'M2', 'M3','M5', 'Z4', 'I8'],
  ['GLE', 'AMG-GT', 'CLA', "A-class", 'C-class', 'GLC', 'QTE', 'GT', 'G-Drive', 'S-class'],
  ['Astra', 'Agila', 'Gt', 'Corsa', 'Combo', 'Corsa OPC', 'Frontera','Insignia', 'Omega', 'Meriva'],
  ['A1', 'A2', 'A3', 'A4', 'Q7', 'Q2', 'Q3','Quattro', 'A8', 'Q8'],
  ['350Z', '370Z', 'GT-R', 'Juke', 'Fuga', 'Patrol', 'Primera','Teana', 'Terrano', 'Maxima'],
  ['BRZ', 'Ascent', 'Forester', 'Impreza', 'Impreza-WRX', 'Impreza-WRX-STI', 'WRX-STI','Legasy', 'Justi', 'Outback'],
  ['718 Cayman', '718 Cayman', '718 Cayman GT4', '911 Carrera', '911 Carrera GT', '911 Targa 4', '911 Turbo','911 Turbo S', '911 GT3', 'Taycan'],
  ['Explorer', 'Fiesta', 'Focus', 'Mondeo', 'Capri', 'GT', 'Escort','F1500', 'Flex', 'Ranger'],
  ['Sportage', 'Picanto', 'Rio', 'Ceed', 'Sorento', 'Cerato', 'Ceed','Soul', 'Seltos', 'Stinger'],
  ['2101', '2103', '2104', '2105', '2106', '2108', '2109','2112', '2121', '21013']
]
async function page () {
  let a: HTMLSpanElement | null = document.querySelector('.spanGarageH3')
  let winsarr = await (await fetch(`http://127.0.0.1:3000/garage`, {method: 'GET'})).json();
  if (a) {
    a.innerText = String(winsarr.length)
  }
}
let buttonToGarage = document.createElement('button');
buttonToGarage.classList.add('buttonToGarage');
buttonToGarage.addEventListener('click', async()=> {
  getPageWrapGarage?.classList.remove('pageLeft');
  page();
})
buttonToGarage.innerText = 'To garage'
let buttonToWinners = document.createElement('button');
buttonToWinners.classList.add('buttonToWinners');
buttonToWinners.innerText = 'To winner';
async function createWins() {
  let page1: HTMLHeadElement | null = document.querySelector('.winH4span');
  let page = Number(page1?.innerText);
  let sort = 'id';
  let order = 'ASC';
  let getH5Name: HTMLHeadElement | null = document.querySelector('.H5Name');
  let getH5Wins: HTMLHeadElement | null = document.querySelector('.H5Wins');
  let getH5Time: HTMLHeadElement | null = document.querySelector('.H5Time');
  console.log('sdfsdf');
  if (getH5Wins) {
    if (getH5Wins?.innerText == 'Wins▲') {
      sort = 'wins'
      order = 'DESC'
    }
    if (getH5Wins?.innerText == 'Wins▼') {
      sort = 'wins'
      order = 'ASC'
    }
  }
  if (getH5Time) {
    if (getH5Time?.innerText == 'Best time▲') {
      sort = 'time'
      order = 'DESC'
    }
    if (getH5Time?.innerText == 'Best time▼') {
      sort = 'time'
      order = 'ASC'
    }
  }
  let winsarr = await (await fetch(`http://127.0.0.1:3000/winners?_page=${page}&_limit=10&_sort=${sort}&_order=${order}`, {method: 'GET'})).json();
  let cararr = await (await fetch(`http://127.0.0.1:3000/garage`, {method: 'GET'})).json();
  let num1 = page * 10 - 10;
  if (getWrapCarsWins) {
    getWrapCarsWins.innerHTML = ''
  }
  for (let item of winsarr) {
    let color: string;
    for (let car of cararr) {
      let divwins = document.createElement('div')
  divwins.classList.add('divwins')
  let num = document.createElement('h5')
  num.classList.add('numh5')
  let car1 = document.createElement('h5')
  car1.classList.add('carh5')
  let name = document.createElement('h5')
  name.classList.add('nameh5')
  let wincar = document.createElement('h5')
  wincar.classList.add('wincarh5')
  let time = document.createElement('h5')
  time.classList.add('timeh5')
      if (car.id === item.id) {
        color = car.color
      num1 = num1 + 1
      num.innerText = String(num1)
      divwins.append(num)
      createSvg(car1, car.color)
      divwins.append(car1)
      name.innerText = (car.name)
      divwins.append(name)
      wincar.innerText = String(item.wins)
      divwins.append(wincar)
      time.innerText = String(item.time)
      divwins.append(time)
      if (getWrapCarsWins) {
        getWrapCarsWins.append(divwins)
      }
    }
    }
  }

}
buttonToWinners.addEventListener('click', async()=> {
  let a: HTMLSpanElement | null = document.querySelector('.winH3span')
  let winsarr = await (await fetch(`http://127.0.0.1:3000/winners`, {method: 'GET'})).json();
  if (a) {
    a.innerText = String(winsarr.length)
  }
  getPageWrapGarage?.classList.add('pageLeft')
  createWins()
})
document.body.append(buttonToGarage);
document.body.append(buttonToWinners);

let pageWrap = document.createElement('div');
pageWrap.classList.add("pageWrap");
document.body.append(pageWrap);
let getPageWrap = document.querySelector('.pageWrap');

let pageWrapGarage = document.createElement('div');
pageWrapGarage.classList.add("pageWrapGarage");

let pageWrapWinner = document.createElement('div');
pageWrapWinner.classList.add("pageWrapWinner");

if (getPageWrap) {
  getPageWrap.append(pageWrapGarage);
  getPageWrap.append(pageWrapWinner);
  }

let getPageWrapGarage = document.querySelector('.pageWrapGarage');
let getPageWrapWinner = document.querySelector('.pageWrapWinner');

let winnersH3 = document.createElement('h3')
winnersH3.classList.add('winH3')
winnersH3.innerText = 'Winners '
let winnersH3span = document.createElement('span')
winnersH3span.classList.add('winH3span')
winnersH3span.innerText = '1'

let winnersH4 = document.createElement('h4')
winnersH4.classList.add('winH4')
winnersH4.innerText = 'Page '
let winnersH4span = document.createElement('span')
winnersH4span.classList.add('winH4span')
winnersH4span.innerText = '1'
if (getPageWrapWinner) {
  getPageWrapWinner.append(winnersH3);
  getPageWrapWinner.append(winnersH4);
  }
  if (document.querySelector('.winH3')) {
    document.querySelector('.winH3')?.append(winnersH3span)
  }
  let getPageWins: HTMLSpanElement | null = document.querySelector('.winH3span')
  if (document.querySelector('.winH4')) {
    document.querySelector('.winH4')?.append(winnersH4span)
  }
  let getPage2Wins: HTMLSpanElement | null = document.querySelector('.winH4span')
let divHeaderWins = document.createElement('div')
divHeaderWins.classList.add('headerWins')



let H5Number = document.createElement('h5')
H5Number.classList.add('H5Number')
H5Number.innerText = 'Number'
let H5Car = document.createElement('h5')
H5Car.classList.add('H5Car')
H5Car.innerText = 'Car'
let H5Name = document.createElement('h5')
H5Name.classList.add('H5Name')
H5Name.innerText = 'Name'

let H5Wins = document.createElement('h5')
H5Wins.classList.add('H5Wins')
H5Wins.innerText = 'Wins'
H5Wins.addEventListener('click', ()=> {
  let getName: HTMLHeadingElement | null = document.querySelector('.H5Name')
  let getWins: HTMLHeadingElement | null = document.querySelector('.H5Wins')
  let getTime: HTMLHeadingElement | null = document.querySelector('.H5Time')
  if (getWins?.innerText == 'Wins') {
    if (getWins){
      getWins.innerText = 'Wins▼'
    }
    if (getTime){
      getTime.innerText = 'Best time'
    }
    createWins()
    return
  }
  if (getWins?.innerText == 'Wins▲') {
    if (getWins){
      getWins.innerText = 'Wins'
    }
    if (getTime){
      getTime.innerText = 'Best time'
    }
    createWins()
    return
  } 
  if (getWins?.innerText == 'Wins▼') {
    if (getWins){
      getWins.innerText = 'Wins▲'
    }
    if (getTime){
      getTime.innerText = 'Best time'
    }
    createWins()
    return
  }
})
let H5Time = document.createElement('h5')
H5Time.classList.add('H5Time')
H5Time.innerText = 'Best time'
H5Time.addEventListener('click', ()=> {
  let getName: HTMLHeadingElement | null = document.querySelector('.H5Name')
  let getWins: HTMLHeadingElement | null = document.querySelector('.H5Wins')
  let getTime: HTMLHeadingElement | null = document.querySelector('.H5Time')
  if (getTime?.innerText == 'Best time') {
    if (getWins){
      getWins.innerText = 'Wins'
    }
    if (getTime){
      getTime.innerText = 'Best time▼'
    }
    createWins()
    return
  }
  if (getTime?.innerText == 'Best time▲') {
    if (getWins){
      getWins.innerText = 'Wins'
    }
    if (getTime){
      getTime.innerText = 'Best time'
    }
    createWins()
    return
  } 
  if (getTime?.innerText == 'Best time▼') {
    if (getName){
    getName.innerText = 'Name'
    }
    if (getWins){
      getWins.innerText = 'Wins'
    }
    if (getTime){
      getTime.innerText = 'Best time▲'
    }
    createWins()
    return
  }
})
// console.log(getdivHeaderWins)
if (divHeaderWins) {
  divHeaderWins.append(H5Number)
  divHeaderWins.append(H5Car)
  divHeaderWins.append(H5Name)
  divHeaderWins.append(H5Wins)
  divHeaderWins.append(H5Time)
}
let getH5Name: HTMLHeadElement | null = document.querySelector('.H5Name')
let getH5Wins: HTMLHeadElement | null = document.querySelector('.H5Wins')
let getH5Time: HTMLHeadElement | null = document.querySelector('.H5Time')
let divWrapWins = document.createElement('div')
divWrapWins.classList.add('divWrapWins')
let butPageWinsLeft = document.createElement('button')
butPageWinsLeft.classList.add('butPageWins')
butPageWinsLeft.innerText = "<<"
butPageWinsLeft.addEventListener('click', () => {
  let numPage = (Number(getPage2Wins?.innerText))
  if (getPage2Wins) {
  getPage2Wins.innerText = String(numPage - 1)
  }
  if (Number(getPage2Wins?.innerText) < 1) {
    if (getPage2Wins)
    getPage2Wins.innerText = '1'
  }
  if(getWrapCarsWins) {
    getWrapCarsWins.innerHTML = ''
  }
  createWins()
})
let butPageWinsRecht = document.createElement('button')
butPageWinsRecht.classList.add('butPageWins')
butPageWinsRecht.innerText = ">>"
butPageWinsRecht.addEventListener('click', async ()=> {
  let numPage = (Number(getPage2Wins?.innerText))
  if (getPage2Wins) {
    getPage2Wins.innerText = String(numPage + 1)
    }
  let sum = await fetch(`http://127.0.0.1:3000/winners`, {method: 'GET'});
  let s: Promise<[]> = sum.json();
  let i = Math.ceil((await s).length / 10);
  if (Number(getPage2Wins?.innerText) > i) {
    if (getPage2Wins) {
      getPage2Wins.innerText = String(i)
      }
  }
  if(getWrapCarsWins) {
    getWrapCarsWins.innerHTML = ''
  }
  createWins()
})
if (getPageWrapWinner) {
  getPageWrapWinner.append(butPageWinsLeft)
  getPageWrapWinner.append(butPageWinsRecht)
  getPageWrapWinner.append(divHeaderWins)
  getPageWrapWinner.append(divWrapWins)
}
let getWrapCarsWins = document.querySelector('.divWrapWins')
let getdivHeaderWins = document.querySelector('.headerWins')





let wrapOptions = document.createElement('div');
wrapOptions.classList.add("wrapOptions");
if (getPageWrapGarage) {
  getPageWrapGarage.append(wrapOptions);
}
let getWrapOptions = document.querySelector('.wrapOptions');


let wrapCreate = document.createElement('div');
wrapCreate.classList.add("wrapCreate");
let wrapUpdate = document.createElement('div');
wrapUpdate.classList.add("wrapUpdate");
let wrapReset = document.createElement('div');
wrapReset.classList.add("wrapReset");
if (getWrapOptions) {
getWrapOptions.append(wrapCreate);
getWrapOptions.append(wrapUpdate);
getWrapOptions.append(wrapReset);
}
let getWrapCreate = document.querySelector('.wrapCreate');
let getWrapUpdate = document.querySelector('.wrapUpdate');
let getWrapReset = document.querySelector('.wrapReset');

let innerModel = document.createElement('input');
innerModel.classList.add("innerModel");
let innerColor = document.createElement('input');
innerColor.classList.add("innerColor");
innerColor.setAttribute("type", "color")
let buttonCreate = document.createElement('button');
buttonCreate.classList.add("buttonCreate");
buttonCreate.innerText = 'create'
if(getWrapCreate) {
  getWrapCreate.append(innerModel)
  getWrapCreate.append(innerColor)
  getWrapCreate.append(buttonCreate)
}

let innerModelUpd = document.createElement('input');
innerModelUpd.classList.add("innerModelUpd");
innerModelUpd.setAttribute('disabled', 'disabled')
let innerColorUpd = document.createElement('input');
innerColorUpd.classList.add("innerColorUpd");
innerColorUpd.setAttribute('disabled', 'disabled')
innerColorUpd.setAttribute("type", "color")
let buttonUpdate = document.createElement('button');
buttonUpdate.classList.add("buttonUpdate");
buttonUpdate.setAttribute('disabled', 'disabled')
buttonUpdate.innerText = 'update'
if(getWrapUpdate) {
  getWrapUpdate.append(innerModelUpd)
  getWrapUpdate.append(innerColorUpd)
  getWrapUpdate.append(buttonUpdate)
}

let getInnerModel: HTMLInputElement | null = document.querySelector('.innerModel');
let getInnerColor: HTMLInputElement | null =  document.querySelector('.innerColor');
let getInnerModelUp: HTMLInputElement | null = document.querySelector('.innerModelUpd');
let getInnerColorUp: HTMLInputElement | null =  document.querySelector('.innerColorUpd');

let buttonRace = document.createElement('button');
buttonRace.classList.add("buttonRace");
buttonRace.innerText = "race";

let buttonReset = document.createElement('button');
buttonReset.classList.add("buttonReset");
buttonReset.innerText = "reset";
let buttonGenerate = document.createElement('button');
buttonGenerate.classList.add("buttonGenerate");
buttonGenerate.innerText = "generate cars";
function rand(min:number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
buttonGenerate.addEventListener('click', async ()=> {
  if(getWrapperAuto) {
    getWrapperAuto.innerHTML = ''
  }

  for (let i = 1; i < 100; i++) {
    let num = rand(0, 9)
    let sat = await fetch(`http://127.0.0.1:3000/garage`, {method: 'POST',
  headers: {
    "Content-Type": 'application/json'
  },

  body: JSON.stringify({
    name: `${model[num]} ${mod[num][rand(0, 9)]}`,
    color: `#${(Math.random().toString(16) + '000000').substring(2,8).toUpperCase()}`
  })
});

  } 
  io()
})
if(wrapReset) {
  wrapReset.append(buttonRace);
  wrapReset.append(buttonReset);
  wrapReset.append(buttonGenerate);
}
let getButtonRace = document.querySelector('.buttonRace');
let getButtonReset = document.querySelector('.buttonReset');
let getButtonGenerate = document.querySelector('.buttonGenerate');

let garageH3 = document.createElement('h3');
garageH3.classList.add('garageH3')
garageH3.innerText = 'Garage ';
if(getPageWrapGarage) {
  getPageWrapGarage.append(garageH3)
}
let getGarageH3 = document.querySelector('.garageH3')

let spanGarageH3: HTMLSpanElement | null = document.createElement('span');
spanGarageH3.classList.add('spanGarageH3');
page();
if(getGarageH3) {
  getGarageH3.append(spanGarageH3)
}
let getSpanH3: HTMLSpanElement | null = document.querySelector('.spanGarageH3')

let garageH4 = document.createElement('h4');
garageH4.classList.add('garageH4')
garageH4.innerText = 'Page ';
if(getPageWrapGarage) {
  getPageWrapGarage.append(garageH4)
}
let getGarageH4 = document.querySelector('.garageH4')
let spanGarageH4 = document.createElement('span');
spanGarageH4.innerText = '1';
// let numPage = (Number(spanGarageH4.innerText))
spanGarageH4.classList.add('spanGarageH4');
let buttonLeft = document.createElement('button');
buttonLeft.classList.add('left')
buttonLeft.innerText = '<<'
buttonLeft.addEventListener('click', ()=> {
  let numPage = (Number(spanGarageH4.innerText))
  spanGarageH4.innerText = String(numPage - 1)
  if (Number(spanGarageH4.innerText) < 1) {
    spanGarageH4.innerText = '1'
  }
  if(getWrapperAuto) {
    getWrapperAuto.innerHTML = ''
  }
  io()
})
let buttonRecht = document.createElement('button');
buttonRecht.classList.add('recht')
buttonRecht.innerText = '>>'
buttonRecht.addEventListener('click', async ()=> {
  let numPage = (Number(spanGarageH4.innerText))
  spanGarageH4.innerText = String(numPage + 1);
  let sum = await fetch(`http://127.0.0.1:3000/garage`, {method: 'GET'});
  let s: Promise<[]> = sum.json();
  let i = Math.ceil((await s).length / 7);
  if (Number(spanGarageH4.innerText) > i) {
    spanGarageH4.innerText = String(i)
  }
  if(getWrapperAuto) {
    getWrapperAuto.innerHTML = ''
  }
  io()
})
if(getGarageH4) {
  getGarageH4.append(spanGarageH4)
  getGarageH4.append(document.createElement('br'))
  getGarageH4.append(buttonLeft)
  getGarageH4.append(buttonRecht)
}
let getSpanH4 = document.querySelector('.spanGarageH4');

let wrapperAuto = document.createElement('div');
wrapperAuto.classList.add('wrapperAuto');
if(getPageWrapGarage) {
  getPageWrapGarage.append(wrapperAuto)
}
let getWrapperAuto = document.querySelector('.wrapperAuto');

interface IObj {
  velocity: number,
  distance: number
}
interface IObj2 {
  id: number,
  wins: number,
  time: number
}
let colorAuto = "#C83737"
let id: String | undefined;
interface ITimeCar {
  id: String | undefined,
  time: number
}
var TimeCar: Array<ITimeCar> = [];
interface Iitem {
  name: String,
  color: String,
  id: Number
}
function createDivCar(item: Iitem) {
let wrapAuto = document.createElement('div');
wrapAuto.classList.add(`divAuto`);
wrapAuto.setAttribute('id', `divAuto${item.id}`)
let Select = document.createElement('button');
Select.classList.add('Select');
Select.setAttribute('id', `Select${item.id}`)
Select.innerText = 'Select';
Select.addEventListener('click', async (elem) => {
    id = (<Element>elem.target).getAttribute('id')?.slice(6);
    innerModelUpd.removeAttribute('disabled');
    innerColorUpd.removeAttribute('disabled');
    buttonUpdate.removeAttribute('disabled');
})
let Remove = document.createElement('button');
Remove.classList.add('Remove');
Remove.setAttribute('id', `Remove${item.id}`)
Remove.innerText = 'Remove';
Remove.addEventListener('click', async (elem) => {
  id = (<Element>elem.target).getAttribute('id')?.slice(6);
  let sap = await fetch(`http://127.0.0.1:3000/garage/${id}`, {method: 'DELETE'});
  let delwin = await fetch(`http://127.0.0.1:3000/winners/${id}`, {method: 'DELETE'});
  if(getWrapperAuto) {
    getWrapperAuto.innerHTML = ''
  }
   io()

})
let NameCar = document.createElement('span');
let A = document.createElement('button');
A.classList.add('A');
A.setAttribute('id', `A${item.id}`)
A.innerText = 'A';

A.addEventListener('click',async (elem)=> {
  id = (<Element>elem.target).getAttribute('id')?.slice(1);
  let sap = await fetch(`http://127.0.0.1:3000/engine?id=${id}&status=started`, {method: 'PATCH'});
  let em = document.getElementById(`Svg${id}`)
  let a: Promise<IObj> = sap.json();
  let time = (await a).distance / 1000 / (await a).velocity;
    if (em) {
    em.style.animationDuration = `${time}s`
    em.classList.add('imageSvgRace')
  }
  let sat = await fetch(`http://127.0.0.1:3000/engine?id=${id}&status=drive`, {method: 'PATCH'});
  if (sat.status === 500) {
    if(em) {
    em.style.animationPlayState = 'paused';
    }
  }
  if (sat.status === 200) {
    let getWinid = await fetch(`http://127.0.0.1:3000/winners/${id}`, {method: 'GET'});
    let get = getWinid.json();

    if (getWinid.status === 404) {
      let setWinid = await fetch(`http://127.0.0.1:3000/winners`, {method: 'POST',
      headers: {
        "Content-Type": 'application/json'
      },
      body: JSON.stringify({
        id: Number(id),
        wins: 1,
        time: time
      })
    });
    }
    if (getWinid.status === 200) {
      let win = (await get).wins;
      let time3 = (await get).time
      if (time < time3) {
        time3 = time
      }
      let updWinid = await fetch(`http://127.0.0.1:3000/winners/${id}`, {method: 'PUT',
      headers: {
        "Content-Type": 'application/json'
      },
      body: JSON.stringify({
        wins: win + 1,
        time: time3
      })
    });
    }
  }
});

let B = document.createElement('button');
B.classList.add('B');
B.setAttribute('id', `B${item.id}`)
B.innerText = 'B';

B.addEventListener('click',async (elem)=> {
  id = (<Element>elem.target).getAttribute('id')?.slice(1);
  let sap = await fetch(`http://127.0.0.1:3000/engine?id=${id}&status=stopped`, {method: 'PATCH'});
  let em = document.getElementById(`Svg${id}`);
  if (em) {
    em.style.animationPlayState = 'running';
    em.classList.remove('imageSvgRace')
  }
})
  if(getWrapperAuto) {
    getWrapperAuto.append(wrapAuto)
  }
  let getWrapAuto = document.getElementById(`divAuto${item.id}`);
  if (getWrapAuto) {
    getWrapAuto.append(Select);
    getWrapAuto.append(Remove);
    getWrapAuto.append(NameCar.innerText = `${item.name}`);
    getWrapAuto.append(document.createElement('br'));
    getWrapAuto.append(A);
    getWrapAuto.append(B);
    getWrapAuto.append(document.createElement('br'));
    createSvg(getWrapAuto, item.color, `Svg${item.id}`)
  }
}
async function io() {
  page ()
  let numPage = (Number(spanGarageH4.innerText));
  let sap = await fetch(`http://127.0.0.1:3000/garage?_page=${numPage}&_limit=7`, {method: 'GET'});
  // let numPage = (Number(spanGarageH4.innerText));
  // let min = numPage * 7 - 8;
  // let max = numPage * 7 - 1;
  let arr = await sap.json();
  // let i = 0;
  for (let item of arr) {
    // if (i <= max && i >= min) {
    createDivCar(item)
    // }
    // i = i + 1
  }
  
  let res = await fetch(`http://127.0.0.1:3000/garage`, {method: 'GET'});
  let s:Promise<IRepoEntry[]> = res.json();
  (await s).forEach(async (item)=> {
  let id = item.id;
  // let res = await fetch(`http://127.0.0.1:3000/engine?id=${id}&status=stopped`, {method: 'PATCH'});
  let em = document.getElementById(`Svg${id}`);
  if (em) {
    em.style.animationPlayState = 'running';
    em.classList.remove('imageSvgRace')
  }
  })
}
io()

buttonCreate.addEventListener('click', async () => {
  if (getInnerModel && getInnerColor) {
    if(getInnerModel.value && getInnerColor.value) {

  let sat = await fetch(`http://127.0.0.1:3000/garage`, {method: 'POST',
  headers: {
    "Content-Type": 'application/json'
  },
  body: JSON.stringify({
    name: getInnerModel.value,
    color: getInnerColor.value
  })
});
if(getWrapperAuto) {
  getWrapperAuto.innerHTML = ''
}
 io()

    }
  }
})

// let ior = document.querySelector('.Select')
// if (ior) {
//   ior.addEventListener('click', (elem) => {
//   // let id = elem.getAttribute('id')
//   console.log('df')
//   })
// }
// // innerColorUpd.setAttribute('disabled', 'disabled')
// for (let i of document.querySelectorAll('.Select')) {
// i.addEventListener('click', (elem) => {
// // let id = elem.getAttribute('id')
// console.log(elem)
// })
// }
buttonUpdate.addEventListener('click', async ()=>{
  if (getInnerModelUp && getInnerColorUp) {
    if(getInnerModelUp.value && getInnerColorUp.value) {

  let sat = await fetch(`http://127.0.0.1:3000/garage/${id}`, {method: 'PUT',
  headers: {
    "Content-Type": 'application/json'
  },
  body: JSON.stringify({
    name: getInnerModelUp.value,
    color: getInnerColorUp.value
  })
});
getInnerModelUp.value = '';
if(getWrapperAuto) {
  getWrapperAuto.innerHTML = ''
}
 io()

    }
  }
  innerModelUpd.setAttribute('disabled', 'disabled');
  innerColorUpd.setAttribute('disabled', 'disabled');
  buttonUpdate.setAttribute('disabled', 'disabled');
})
interface IRepoEntry {
  name: string,
  color: string,
  id: number
}

interface IRepo {
  [index: number]: IRepoEntry;
}

buttonRace.addEventListener('click', async ()=> {
  let w = true
  let sap = await fetch(`http://127.0.0.1:3000/garage`, {method: 'GET'});
  // let numPage = Number(spanGarageH4.innerText)
  let page: HTMLSpanElement | null = document.querySelector('.spanGarageH4');
  let numPage = Number(page?.innerText)
  let min = numPage * 7 - 8;
  let max = numPage * 7;
  if (numPage == 1) {
    min = 0;
    max = 7
  }
  let arr = await sap.json();
  let s:Promise<IRepoEntry[]> = arr.slice(min, max);
  // for (let item of await sap.json())
  (await s).forEach(async (item)=> {
  let id = item.id;
  let sap = await fetch(`http://127.0.0.1:3000/engine?id=${id}&status=started`, {method: 'PATCH'});
  let em = document.getElementById(`Svg${id}`)
  let a: Promise<IObj> = sap.json();
  let time = (await a).distance / 1000 / (await a).velocity;
    if (em) {
    em.style.animationDuration = `${time}s`
    em.classList.add('imageSvgRace')
  }
  let sat = await fetch(`http://127.0.0.1:3000/engine?id=${id}&status=drive`, {method: 'PATCH'});
  if (sat.status === 500) {
    if(em) {
    em.style.animationPlayState = 'paused';
    }
  }
  if (sat.status === 200) {
    if (w) {
      let winner = document.createElement('span')
      winner.classList.add('winner')
      console.log(item)
      winner.innerText = `${item.name} first (${String(time).slice(0,4)}s)`;
      if(getWrapperAuto) {
        getWrapperAuto.append(winner)
      }
      function rem () {
        document.querySelector('.winner')?.remove()
      }
      setTimeout(rem, 5000)
    }
    w = false
    let getWinid = await fetch(`http://127.0.0.1:3000/winners/${id}`, {method: 'GET'});
    let get = getWinid.json();
    

    if (getWinid.status === 404) {
      let setWinid = await fetch(`http://127.0.0.1:3000/winners`, {method: 'POST',
      headers: {
        "Content-Type": 'application/json'
      },
      body: JSON.stringify({
        id: Number(id),
        wins: 1,
        time: time
      })
    });
    }
    if (getWinid.status === 200) {
      let win = (await get).wins;
      let time3 = (await get).time
      if (time < time3) {
        time3 = time
      }
      let updWinid = await fetch(`http://127.0.0.1:3000/winners/${id}`, {method: 'PUT',
      headers: {
        "Content-Type": 'application/json'
      },
      body: JSON.stringify({
        wins: win + 1,
        time: time3
      })
    });
    }
  }
  })
});
buttonReset.addEventListener('click',async ()=> {
  let sap = await fetch(`http://127.0.0.1:3000/garage`, {method: 'GET'});
  let s:Promise<IRepoEntry[]> = sap.json();
  if (getSpanH3) {
    getSpanH3.innerText
  }
  (await s).forEach(async (item)=> {
  let id = item.id;
  let sap = await fetch(`http://127.0.0.1:3000/engine?id=${id}&status=stopped`, {method: 'PATCH'});
  let em = document.getElementById(`Svg${id}`);
  if (em) {
    em.style.animationPlayState = 'running';
    em.classList.remove('imageSvgRace')
  }
  })
}) 



// alert('Извините я немного не успел доделать, не могли бы вы проверить задание в последний день')
// console.log(document.querySelector('.headerWins'))