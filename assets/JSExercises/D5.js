/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ['dog', 'cat', 'hamster', 'redfish']

console.log(pets)



/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/

function ordineAlfabetico(pets){
  return pets.sort()
}

const animaliOrdinati = ordineAlfabetico(pets)
console.log(animaliOrdinati) 

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/

 function animaliContrario(pets){
  return pets.reverse()
}

const arrayContrario = animaliContrario(pets)
console.log(arrayContrario) 

/*ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione. */


function daPrimoAdUltimo(pets){
  const prendiPrimo = pets.shift()
  pets.push(prendiPrimo)
  return pets
} 
const esercizio4 = daPrimoAdUltimo(pets)  /* all'esercizio 3 l'array trova redfish in prima posizione perchè è stato invertito */
console.log(esercizio4)


/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: 'Ford',
    model: 'Fiesta',
    color: 'red',
    trims: ['titanium', 'st', 'active'],
  },
  {
    brand: 'Peugeot',
    model: '208',
    color: 'blue',
    trims: ['allure', 'GT'],
  },
  {
    brand: 'Volkswagen',
    model: 'Polo',
    color: 'black',
    trims: ['life', 'style', 'r-line'],
  },
]


for(i = 0; i < cars.length; i++){
cars[i].licensePlate = "AB000CD"
}
console.log(cars)



/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/

const nuovoOggetto = {brand: 'Lamborghini', model: 'Aventador', color: 'purple', trims: ['sport', 'style', 'travel']}
cars.push(nuovoOggetto)

for(i = 0; i < cars.length; i++){
  cars[i].trims.pop()
}
console.log(cars) 


/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/

const justTrims = []

for (i = 0; i < cars.length; i++){
  justTrims.push(cars[i].trims[0])
}
console.log(justTrims)

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/
const fizzBuzz = []
for (i = 0; i < cars.length; i++){
  if (cars[i].color.charAt() === 'b'){
    fizzBuzz.push('Fizz');
  } else {
    fizzBuzz.push('Buzz');
  }
} console.log(fizzBuzz);

/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
]
  const fino32 = []
  i = 0
  do {
      fino32.push(numericArray[i])
      i++
    } while(i < numericArray.length && numericArray[i] !== 66)

    console.log(fino32)


/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ['g', 'n', 'u', 'z', 'd']

const equivalenza = []

for (let i = 0; i < charactersArray.length; i++) {
  switch (charactersArray[i]) {
    case 'g':
      equivalenza.push('7')
      break
    case 'n':
      equivalenza.push('12')
      break
    case 'u':
      equivalenza.push('19')
      break;
    case 'z':
      equivalenza.push('26')
      break;
    case 'd':
      equivalenza.push('4')
      break
  }
} console.log(equivalenza);