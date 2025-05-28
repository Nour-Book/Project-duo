var mybooks=[
    {   id:0,
        title:"Moonwalking with Einstein",
        img:"https://upload.wikimedia.org/wikipedia/en/5/59/Moonwalking_with_einstein.jpg",
        author:"Joshua Foer",
        price:50,
        genre:"Nonfiction",
        description:"The Art and Science of Remembering Everything"
    },
    {   id:1,
        title:"Technique de Vente",
        img:"https://5livres.fr/wp-content/uploads/2019/08/Technique-de-Vente-Les-Strategies-Gagnantes-Etape-par-Etape.jpg",
        author:"Victor Cabrera",
        price:22,
        genre:"commerce",
        description:"Les Strategies Gagnantes Etape par Etape"
    },
    {   id:2,
        title:"Psycho-Cybernétique",
        img:"https://tse3.mm.bing.net/th?id=OIP.58Mp400VL4YwLT7hIZz3vwHaLm&pid=Api&P=0&h=180",
        author:"Maxwell Maltz",
        price:55,
        genre:"Nonfiction",
        description:"Dominez ce Pouvoir Interne qui peut changer votre vie pour toujours"
    },
    {   id:3,
        title:"Pistachio Theory",
        img:"https://www.noor-book.com/publice/covers_cache_webp/6/e/b/6/9f2c45ff22eb6c827113e74bba35b0e3.png.webp",
        author:"Fahad Amer AlAhmadi",
        price:25,
        genre:"Human Development And Self-development",
        description:"The Pistachio Theory book is one of the books on human development"
    }

]
   var butt = document.getElementById('addbutton');
console.log(butt,'buu');
function add () {
    console.log("hh")
    window.location.href ="add.html"
  };
butt.onclick=add


var buttBsk = document.getElementById('basketButton');

console.log(butt,'buu');
function change () {
    console.log("hh")
    window.location.href ="Basket.html"
  };
  buttBsk.onclick=change
  





// load books from local storage
var books = JSON.parse(localStorage.getItem('books')) || [
        {   id:1,
        title:"Moonwalking with Einstein",
        img:"https://upload.wikimedia.org/wikipedia/en/5/59/Moonwalking_with_einstein.jpg",
        author:"Joshua Foer",
        price:50,
        genre:"Nonfiction",
        description:"The Art and Science of Remembering Everything"
    },
    {   id:2,
        title:"Technique de Vente",
        img:"https://5livres.fr/wp-content/uploads/2019/08/Technique-de-Vente-Les-Strategies-Gagnantes-Etape-par-Etape.jpg",
        author:"Victor Cabrera",
        price:22,
        genre:"commerce",
        description:"Les Strategies Gagnantes Etape par Etape"
    },
    {   id:3,
        title:"Psycho-Cybernétique",
        img:"https://tse3.mm.bing.net/th?id=OIP.58Mp400VL4YwLT7hIZz3vwHaLm&pid=Api&P=0&h=180",
        author:"Maxwell Maltz",
        price:55,
        genre:"Nonfiction",
        description:"Dominez ce Pouvoir Interne qui peut changer votre vie pour toujours"
    },
    {   id:4,
        title:"Pistachio Theory",
        img:"https://www.noor-book.com/publice/covers_cache_webp/6/e/b/6/9f2c45ff22eb6c827113e74bba35b0e3.png.webp",
        author:"Fahad Amer AlAhmadi",
        price:25 ,
        genre:"Human Development And Self-development",
        description:"The Pistachio Theory book is one of the books on human development"
    }

];
console.log("Loaded books:", books);
// process URL parameters
var urlParams = new URLSearchParams(window.location.search);
console.log("URL Params:", urlParams.toString());
if (urlParams.has('title_book')) {
    var newBook = {
        id:mybooks[mybooks.length-1].id+1,
        title: urlParams.get("title_book"),
        img: urlParams.get("img"),
        author: urlParams.get("author"),
        price: urlParams.get("price"),
        genre: urlParams.get("genre"),
        description: urlParams.get("description")
    };
    
    mybooks.push(newBook);
    localStorage.setItem('books', JSON.stringify(books));
    
    // clear URL params after processing
    window.history.replaceState({}, document.title, window.location.pathname);
}

// render ALL books (including new ones)
function renderBooks(b=mybooks) {
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
                  <button class="btn_basket"><img src="../media/basket.png"></button>
            </div>
        `;
        cardsContainer.appendChild(card);
    });
}
// taking the input and lower case it and chechk if the values of the books key includes this word that we get it from the searchInput 
function checkSearch() {
    var searchInput = document.getElementById('searchInput');
    
    searchInput.addEventListener('input', function() {
        var searchTerm = this.value.toLowerCase().trim();
        var filteredBooks = mybooks.filter(function(book) {
            return (
                book.title.toLowerCase().includes(searchTerm) ||
                book.author.toLowerCase().includes(searchTerm) ||
                book.genre.toLowerCase().includes(searchTerm) ||
                book.description.toLowerCase().includes(searchTerm)
            );
        });
        renderFilteredBooks(filteredBooks);
    });
}
// append the filtred card with the array we get it from the checkSearch 
function renderFilteredBooks(filteredBooks) {
    var cardsContainer = document.querySelector('.cards');
    cardsContainer.innerHTML = '';
    
    if (filteredBooks.length === 0) {
        cardsContainer.innerHTML = '<p>No books match your search.</p>';
        return;
    }
    
    filteredBooks.forEach(function(book) {
        var card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
             <h2>${book.title}</h2>
            <img class="img" src="${book.img}" alt="${book.title}">
            <div class="content">
                <p>Author: <span>${book.author}</span></p>
                <p>Price: <span>${book.price}</span></p>
                <p>Genre: <span>${book.genre}</span></p>
                <p>Description: <span>${book.description}</span></p>
                  <button class="btn_basket"><img src="../media/basket.png"></button>
            </div>
        `;
        cardsContainer.appendChild(card);
    });
}

// initialize the page
document.addEventListener('DOMContentLoaded', function() {
    renderBooks();
    checkSearch();
    document.getElementById('addbutton').onclick = function() {
        window.location.href = "add.html";
    };
     document.getElementById('basketButton').onclick = function() {
        window.location.href = "Basket.html";
    };
console.log("All Books:", books);
});
var newArr=[]
localStorage.setItem("basket",JSON.stringify([]))
document.addEventListener('DOMContentLoaded',function (params) {
    
    var basketbtn=document.getElementsByClassName("btn_basket")
    //   console.log( "basketbtn",basketbtn);
      for (let index = 0; index < basketbtn.length; index++) {
        // console.log("element");
        
        const element = basketbtn[index];
           element.addEventListener("click",function(){
        var x = element.parentElement.parentElement.id
       console.log("xxxxxxxx",x);
        newArr.push(mybooks[x])
        var dataArr=JSON.parse(localStorage.getItem("basket"))  
        localStorage.setItem("basket",JSON.stringify(newArr))
        }
        )
        
      }
})
 
var Nonfiction=document.querySelector("#Nonfiction")
    
    Nonfiction.addEventListener("click", function() {
        var filternonfiction = mybooks.filter(function(book) {
            return (
                book.genre.toLowerCase()==="nonfiction"
            );
        });
        renderBooks(filternonfiction);
    });
    var Nonfiction=document.querySelector("#Commerce")
    
    Nonfiction.addEventListener("click", function() {
        var filtercommerce = mybooks.filter(function(book) {
            return (
                book.genre.toLowerCase()==="commerce"
            );
        });
        renderBooks(filtercommerce);
    });
    var Nonfiction=document.querySelector("#Science")
    
    Nonfiction.addEventListener("click", function() {
        var filterscience = mybooks.filter(function(book) {
            return (
                book.genre.toLowerCase()==="science"
            );
        });
        renderBooks(filterscience);
    });