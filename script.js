window.onload = () => {
  loadBooks();
};

const booksWrapper = document.getElementById("booksWrapper");

function loadBooks() {

  fetch("https://striveschool-api.herokuapp.com/books")
    .then((response) => {
      console.log(response.status);
      return response.json();
    })
    .then((books) => {
      for (const book of books) {
          console.log(books)
        booksWrapper.innerHTML += ` 
    <div class="totalCard col-12 col-md-6 col-lg-3 mb-2 text-center">
    <img src="${book.img}" class="card-img-top" alt="">
    <div class="card-body">
    <h5 class="card-title">${book.title}</h5>
    <p class="card-text"><em>${book.category}</em></p>
    <a href="#" class="btn btn-info" onclick=addToCart()>Add to Cart</a>
    <a href="#" class="btn btn-dark" onclick=removeCard()>Skip</a>
    </div>
    </div>`;
      }
    })
    .catch((error) => {
      console.error(error);
    });
}


/* const removeCard = function () {
    let removeCardItems = document.querySelector("btn-dark")
    for (let i=0; i < removeCardItems.length; i++) {
        let button = removeCardItems[i]
        button.addEventListener('click', function(event) {
            let buttonClicked = event.target
            buttonClicked.parentElement.parentElement.remove()
        }
    }
} */ // ! NOT WORKING !

const shoppingCart = document.querySelector("#shopping-cart");
const totalCard = document.querySelector(".totalCard")

function addToCart () {
    booksWrapper.classList.add("border")
}

