

let booksList = `
[{
    "title" : "Percy Jackson and the Olympians",
    "autor" : "Rick Riordan",
    "availability" : "In stock online",
    "cover" : ""
    "price": "16$"
}, {
    "title" : "Enough",
    "autor" : "Cassidy Hutchinson",
    "availability" : "In stock online",
    "price": "27$"
}, {
    "title" : "The Armor of Light: A Novel",
    "autor" : "Ken Follett",
    "availability" : "In stock online",
    "price": "26$"
}, {
    "title" : "Iron Flame",
    "autor" : "Rebecca Yarros",
    "availability" : "In stock",
    "price": "23$"
}, {
    "title" : "House of Sky and Breath",
    "autor" : "Sarah J. Maas",
    "availability" : "In stock online",
    "price": "19$"
}, {
    "title" : "Fourth Wing",
    "autor" : "Rebecca Yarros",
    "availability" : "In stock",
    "price": "21$"
}, {
    "title" : "House of Earth and Blood",
    "autor" : "Sarah J. Maas",
    "availability" : "In stock online",
    "price": "19$"
}, {
    "title" : "Wildfire",
    "autor" : "Hannah Grace",
    "availability" : "Online",
    "price": "17$"
}, {
    "title" : "How Does it Feel?",
    "autor" : "Jeneane O'Riley",
    "availability" : "In stock",
    "price": "18$"
}, {
    "title" : "Happiness Falls",
    "autor" : "Angie Kim",
    "availability" : "Online",
    "cover" : "https://www.booklistqueen.com/wp-content/uploads/happiness-falls-angie-kim.jpg"
    "price": "24$"
}]`

const booksPrint = document.querySelector('#books');
booksList = JSON.parse(booksList);
console.log(booksList);