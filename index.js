// Write your solution here!

const cats=["Milo", "Otis", "Garfield"];


function destructivelyAppendCat(name) {
    cats.push(name)
    return console.log(cats);
}
destructivelyAppendCat('Ralph');

cats.length = 0;

cats.push('Milo', 'Otis', 'Garfield')

/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////

function destructivelyPrependCat(name) {
    cats.unshift(name);
    return console.log(cats);
}

destructivelyPrependCat('Bob');

cats.length = 0;

cats.push('Milo', 'Otis', 'Garfield');

/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////



function destructivelyRemoveLastCat() {
    cats.pop();
    return console.log(cats);

}
destructivelyRemoveLastCat();

cats.length = 0;

cats.push('Milo', 'Otis', 'Garfield');

/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////

function destructivelyRemoveFirstCat() {
    cats.shift();
    return console.log(cats);
}

destructivelyRemoveFirstCat();

cats.length = 0;

cats.push('Milo', 'Otis', 'Garfield');

/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////

function appendCat(name) {
    const newCats=cats.slice();
    newCats.push(name);
    return newCats;

}
console.log(appendCat('Broom'))

cats.length = 0;

cats.push('Milo', 'Otis', 'Garfield');

/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////

function prependCat(name) {
    const pCats=cats.slice();
        pCats.unshift(name)
        return pCats
}

console.log(prependCat('Arnold'));

cats.length = 0;

cats.push('Milo', 'Otis', 'Garfield');

/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////

function removeLastCat() {
    const zCats=cats.slice();
    zCats.pop();
    return zCats;
}

console.log(removeLastCat())

cats.length = 0;

cats.push('Milo', 'Otis', 'Garfield');

/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////

function removeFirstCat() {
    const aCats=cats.slice();
    aCats.shift();
    return aCats;
}

console.log(removeFirstCat());

cats.length = 0;

cats.push('Milo', 'Otis', 'Garfield');









