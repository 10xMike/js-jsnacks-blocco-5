// 1. Crea un array di 10 oggetti che rappresentano una zucchina, indicando per ognuna varietà, peso e lunghezza.

// Calcola quanto pesano tutte le zucchine.
/* var pesoZucchine = 0;

for (var i = 0; i < zucchine.length; i++) {
    var zucchineEl = zucchine[i];
    console.log(zucchineEl);
    console.log(zucchineEl.peso);
    pesoZucchine += zucchineEl.peso;
}
console.log(pesoZucchine); */
// 2. Crea 10 oggetti che rappresentano una zucchina.

// Dividi in due array separati le zucchine che misurano meno o più di 15cm.

// Infine stampa separatamente quanto pesano i due gruppi di zucchine.

// 3. Scrivi una funzione che accetti una stringa come argomento e la ritorni girata (es. Ciao -> oaiC)
function reverseString(text) {
    var parola = '';
    for (var i = (text.length - 1); i >= 0; i--) {
        parola += text[i];
    }
    /* console.log(text); */
    return parola;
}
console.log(reverseString('Ciao'));

// 4. Scrivi una funzione che fonda due array (aventi lo stesso numero di elementi) prendendo alternativamente gli elementi da uno e dall’altro
var arrayString = ['a', 'b', 'c'];
var arrayNum = [1, 2, 3];

function uniteArray(array1, array2) {
    console.log(array1);
    console.log(array2);
    var nuovoArray = [];
    for (var i = 0; i < array1.length; i++) {
        console.log(array1[i]);
        console.log(array2[i]);
        nuovoArray.push(array1[i], array2[i]);        
    }
    console.log(nuovoArray);
    return nuovoArray;
}
uniteArray(arrayString, arrayNum);
console.log(uniteArray(arrayString, arrayNum));

// 5. Scrivi una funzione che accetti tre argomenti:
// un array e due numeri (“a” più piccolo di “b” e “b” grande al massimo quanto il numero di elementi dell’array).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra “a” e “b”

function filterArray(lista, min, max) {
    /* console.log(lista, min, max); */
    var nuovoArray = [];
    for (var i = 0; i < lista.length; i++) {
        var El = lista[i];
        if(min <= i && max >= i){
            nuovoArray.push(lista[i]);
        }
    }
    console.log(lista, min, max);
    return nuovoArray;
}

var nomi = ['filippo', 'marco', 'giorgio', 'valerio', 'michele', 'luigi'];
var min = 1;
var max = 3;
filterArray(nomi, min, max);
console.log(filterArray(nomi, min, max));
var risultato = filterArray(nomi, min, max);
console.log(risultato);