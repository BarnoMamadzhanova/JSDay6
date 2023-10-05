

let booksList = `
[{
    "title" : "Percy Jackson and the Olympians",
    "autor" : "Rick Riordan",
    "availability" : "In stock online",
    "view" : "true",
    "cover" : "https://images.thalia.media/-/BF2000-2000/6e7d913edf794ac89e20594727362da8/percy-jackson-and-the-olympians-the-chalice-of-the-gods-taschenbuch-rick-riordan-englisch.jpeg",
    "price": "16$"
}, {
    "title" : "Enough",
    "autor" : "Cassidy Hutchinson",
    "availability" : "In stock online",
    "view" : "false",
    "cover" : "https://m.media-amazon.com/images/I/612APTp1ZHL._AC_UF1000,1000_QL80_.jpg",
    "price": "27$"
}, {
    "title" : "The Armor of Light: A Novel",
    "autor" : "Ken Follett",
    "availability" : "In stock online",
    "view" : "true",
    "cover" : "https://dynamic.indigoimages.ca/v1/books/books/059378961X/1.jpg?width=810&maxHeight=810&quality=85",
    "price": "26$"
}, {
    "title" : "Iron Flame",
    "autor" : "Rebecca Yarros",
    "availability" : "In stock online",
    "view" : "false",
    "cover" : "https://images.thalia.media/-/BF2000-2000/9372afe69efc413f95e446aa14a37691/iron-flame-taschenbuch-rebecca-yarros-englisch.jpeg",
    "price": "23$"
}, {
    "title" : "House of Sky and Breath",
    "autor" : "Sarah J. Maas",
    "availability" : "In stock online",
    "cover" : "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1633097753i/40132775.jpg",
    "price": "19$"
}, {
    "title" : "Fourth Wing",
    "autor" : "Rebecca Yarros",
    "availability" : "In stock online",
    "view" : "true",
    "cover" : "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1666994927i/61431922.jpg",
    "price": "21$"
}, {
    "title" : "House of Earth and Blood",
    "autor" : "Sarah J. Maas",
    "availability" : "In stock online",
    "view" : "true",
    "cover" : "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1559142847i/44778083.jpg",
    "price": "19$"
}, {
    "title" : "Wildfire",
    "autor" : "Hannah Grace",
    "availability" : "In stock online",
    "view" : "false",
    "cover" : "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1688314784i/101145836.jpg",
    "price": "17$"
}, {
    "title" : "How Does it Feel?",
    "autor" : "Jeneane O'Riley",
    "availability" : "In stock online",
    "view" : "false",
    "cover" : "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1676502146i/122447584.jpg",
    "price": "18$"
}, {
    "title" : "Happiness Falls",
    "autor" : "Angie Kim",
    "availability" : "In stock online",
    "view" : "true",
    "cover" : "https://www.booklistqueen.com/wp-content/uploads/happiness-falls-angie-kim.jpg",
    "price": "24$"
}]`

const booksPrint = document.querySelector('#books');
booksList = JSON.parse(booksList);
// console.log(booksList);


booksList.forEach((book) => {

    booksPrint.innerHTML += `
    
    <div class="card" style="max-width: 500px;">
    <div class="row g-0 text-bg-primary style="--bs-text-opacity: .5;"">
      <div class="col-md-4">
        <img src="${book.cover}" class="img-fluid rounded-start my-5" style="height: 180px; weight=300px;" alt="...">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title my-2" style="height: 40px;">${book.title}</h5>
          <p class="card-text my-2" style="height: 40px;">By ${book.autor}</p>
          <ul class="list-group list-group-flush my-2 p-2">
            <li class="list-group-item">Available: ${book.availability}</li>
            <li class="list-group-item">Price: ${book.price}</li>
          </ul>
          <a href="https://www.thalia.at/" class="btn btn-success" id="myBtn">Buy now</a>
        </div>
      </div>
    </div>
    </div>
    `    

})




// if(booksList.view == true){
    //     document.getElementById('#myBtn').innerHTML += `
    //     <a href="https://www.thalia.at/" class="btn btn-success">Viewed</a>`
    // }else {
    //     document.getElementById('#myBtn').innerHTML += `
    //     <a href="https://www.thalia.at/" class="btn btn-success">Let's go</a>`
    // }

// <div>
//      <div class="card my-4" style="width: 18rem;">
//          <img src="${book.cover}" class="card-img-top vw-75 vh-75"  alt="">
//          <div class="card-body">
//            <h4 class="card-title">${book.title}</h4>
//            <p class="card-text">By ${book.autor}</p>
//          </div>
//          <ul class="list-group list-group-flush my-2 p-2">
//             <li class="list-group-item">Available: ${book.availability}</li>
//             <li class="list-group-item">Price: ${book.price}</li>
//          </ul>
//          <a href="https://www.thalia.at/" class="btn btn-success">Buy now</a>
//     </div>
//     </div>