var buttorder = document.getElementById('order');
      var dataArr=JSON.parse(localStorage.getItem("basket"))  
      console.log("data",dataArr);
      
// console.log(butt,'buu'); 
function order () {
    console.log("hh")
    window.location.href ="./indexH.html"
  };
  buttorder.onclick=order

  function renderBooks(b=dataArr) {
    var cardsContainer = document.querySelector('.cards');
    cardsContainer.innerHTML = '';
    
    if (b.length === 0) {
        cardsContainer.innerHTML = '<p>No books found. Add your first book!</p>';
        return;
    }
    console.log(b,'b');
    
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
}
var total = dataArr.reduce(function(acc,ele) {
  console.log("boooooooooooo",typeof ele.price)
            return (
              
                acc=acc + ele.price
            );
        },0);
        console.log(total);
        
var tot = document.querySelector(".total")
tot.innerText= total
renderBooks()