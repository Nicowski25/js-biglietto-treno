//chiediamo il numero dei chilometri
const km = Number(prompt("Quanti chilometri vuoi percorrere"))
console.log(km)
//chiediamo l'età
const age = Number(prompt("quanti anni ha il passeggero"))
console.log(age)
//calcoliamo il costo iniziale del biglietto 
let price = km * 0.21
console.log(price)
//calcoliamo e applicahiamo lo sconto del 20% se il passeggero è minorenne
if (age < 18) {
    sconto = (price * 20 / 100)
    price = (price - sconto)
    const newPrice = price.toFixed(2)
    console.log(newPrice)
    console.log(`il prezzo del biglietto scontato è ${newPrice}€ perchè sei minorenne`)
}
else if (age > 65) { //calcoliamo e applicahiamo lo sconto del 20% se il passeggero è over 65
    sconto = (price * 40 / 100)
    price = (price - sconto)
    const newPrice = price.toFixed(2)
    console.log(newPrice)
    console.log(`il prezzo del biglietto scontato è ${newPrice}€ perchè sei over 65`)
}
else { //stampiamo il prezzo se il passeggero non ha agevolazioni
    console.log(`il prezzo del biglietto è ${price}€`)  
}