
console.log("Merhaba Dünya!");

// JS type safe değildir!
let dolarDun = 9.20
dolarDun = "9.10"
console.log(dolarDun)

// const read-only
const myName = "Ozan"
console.log(myName)

let konutKredileri = ["Konut Kredisi", "Emlak Konut Kredisi", "Kamu Konut Kredisi", "Özel Konut Kredisi"]

console.log("<ul>")

for (let i = 0; i < konutKredileri.length; i++) {
    console.log("<li>" + konutKredileri[i] + "</li>")   
}

console.log("</ul>")


