var buttorder = document.getElementById('order');
      var dataArr=JSON.parse(localStorage.getItem("basket"))  
      console.log("data",dataArr);
      
// console.log(butt,'buu'); 
function order () {
    console.log("hh")
    window.location.href ="./indexH.html"
  };
  buttorder.onclick=order
 // appending cards to the ui 
    b.forEach(function(book) {
        var card = document.createElement('div');
                card.id =book.id

        card.className = 'card';
        card.innerHTML = `
            <h2>${book.title}</h2>
            <img class="img" src="${book.img}" alt="${book.title}">
            <div class="content">
                <p>Author: <span>${book.author}</span></p>
                <p>Price: <span>${book.price}</span></p>
                <p>Genre: <span>${book.genre}</span></p>
                <p>Description: <span>${book.description}</span></p>
            </div>
        `;
        cardsContainer.appendChild(card);
    });
var total = da.reduce(function(book,acc) {
            return (
                acc=acc + book.price
            );
        },0);
var tot = document.querySelector(".total")
tot.innerText= total
