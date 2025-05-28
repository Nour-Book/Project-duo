var books=[
    {
        title:"Moonwalking with Einstein",
        img:"https://upload.wikimedia.org/wikipedia/en/5/59/Moonwalking_with_einstein.jpg",
        Author:"Joshua Foer",
        Price:"50DT",
        Genre:"Nonfiction",
        descreption:"The Art and Science of Remembering Everything"
    },
    {
        title:"Technique de Vente",
        img:"https://5livres.fr/wp-content/uploads/2019/08/Technique-de-Vente-Les-Strategies-Gagnantes-Etape-par-Etape.jpg",
        Author:"Victor Cabrera",
        Price:"22DT",
        Genre:"",
        descreption:"Les Strategies Gagnantes Etape par Etape"
    },
    {
        title:"Psycho-Cybernétique",
        img:"https://tse3.mm.bing.net/th?id=OIP.58Mp400VL4YwLT7hIZz3vwHaLm&pid=Api&P=0&h=180",
        Author:"Maxwell Maltz",
        Price:"55DT",
        Genre:"",
        descreption:"Dominez ce Pouvoir Interne qui peut changer votre vie pour toujours"
    },
    {
        title:"Pistachio Theory",
        img:"https://www.noor-book.com/publice/covers_cache_webp/6/e/b/6/9f2c45ff22eb6c827113e74bba35b0e3.png.webp",
        Author:"Fahad Amer AlAhmadi",
        Price:"25DT",
        Genre:"Human Development And Self-development",
        descreption:"The Pistachio Theory book is one of the books on human development and self-development."
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
  

var buttorder = document.getElementById('order');
console.log(butt,'buu');
function order () {
    console.log("hh")
    window.location.href ="indexH.html"
  };
  buttorder.onclick=order



     var urlString = window.location.href; 
    var url = new URL(urlString);
    var params = new URLSearchParams(url.search);
    console.log("ssssssssssssssssssss",params)
   var title =params.get("title_book")
      var img =params.get("img")
    var author = params.get("author")
    var price = params.get("price")
    var genre = params.get("genre")
    var description = params.get("description")
   console.log("title",params.entries());
   var book={
        title:title,
        img : img,
        author : author,
        ptice : price ,
        genre : genre ,
        description : description
   }
   
books.push(book)