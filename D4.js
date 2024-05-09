/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/
function Area(l1, l2) {
  const risultato = l1 * l2;
  return risultato;
}
console.log(Area(2, 3));

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

function crazySum(n1, n2) {
  if (n1 === n2) {
    const risultato = 3 * (n1 + n2);
    return risultato;
  } else {
    const risultato = n1 + n2;
    return risultato;
  }
}
console.log(crazySum(2, 2));
/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

function crazyDiff(n1) {
  if (n1 > 19) {
    const differenzaAssoluta = Math.abs(n1 - 19);
    return differenzaAssoluta * 3;
  } else {
    const differenzaAssoluta = Math.abs(n1 - 19);
    return differenzaAssoluta;
  }
}
console.log(crazyDiff(2));

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/
function boundary(n) {
  if (n >= 20 && n <= 100) {
    trurisultato1 = "e";
    return risultato1;
  } else if (n === 400) {
    risultato2 = "true";
    return risultato2;
  } else {
    risultato3 = "false";
    return risultato3;
  }
}
console.log(boundary(1000));
/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/
function epify(stringa) {
  if (stringa.startsWith("EPICODE")) {
    return stringa;
  } else {
    return "EPICODE " + stringa;
  }
}
console.log(epify("EDDY"));

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/
function check3and7(n1) {
  if ((n1 > 0 && n1 % 3 === 0) || (n1 > 0 && n1 % 7 === 0)) {
    return "true";
  } else {
    return "false";
  }
}
console.log(check3and7(4));
/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/
console.log("-----------------ESERCIZIO 7-------------");
function reverseString(stringa) {
  const arrayCaratteri = stringa.split("");
  console.log(arrayCaratteri);
  const arrayCaratteriInversi = arrayCaratteri.reverse();
  console.log(arrayCaratteriInversi);
  const stringaInversa = arrayCaratteriInversi.join("");
  return stringaInversa;
}
console.log(reverseString("CIAO"));

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/
console.log("-----------------ESERCIZIO 8-------------");

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/
console.log("-----------------ESERCIZIO 9-------------");

function cutString(stringa) {
  const tring = stringa.slice(1, -1);
  return tring;
}
console.log(cutString("ABCDEFGHIJKLMNOPQRSTUVWXYZ"));
/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/
console.log("-----------------ESERCIZIO 10-------------");
function giveMeRandom(n) {
  const arrayNumeri = [];
  for (let index = 0; index < n; index++) {
    const num = Math.floor(Math.random() * 11);
    arrayNumeri.push(num);
  }

  return arrayNumeri;
}
console.log(giveMeRandom(5));
