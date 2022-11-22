fetch('books.json')
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            appendData(data);
        })
        .catch(function(err) {
            console.log(err);
        });

//BODY

const body = document.body;
  
const container = document.createElement('div');
container.className = "container";

const header = document.createElement('div');
header.className = "header sticky";

const nav = document.createElement('div');
nav.className = "nav";

const main = document.createElement('div');  
main.className = "main";
main.id = "main-container";

body.append(container);
container.append(header, nav, main);


//HEADER

//header logo
const headerLogo = document.createElement("div");
headerLogo.setAttribute("class", "header-logo");
header.append(headerLogo);

    const logoImg = document.createElement("div");
    logoImg.setAttribute("class", "logo-img")

    const logoText = document.createElement("div");
    logoText.setAttribute("class", "logo-text");

    headerLogo.append(logoImg, logoText);

        const logo = document.createElement("img");
        logo.setAttribute("class", "logo");
        logo.src = "../book-shop/images/logo.svg";
        logoImg.append(logo);

        const h1 = document.createElement("h1")
        h1.setAttribute("class", "h1");
        h1.innerText = "Book Shop";
        logoText.append(h1);

// header search bar
const headerSearch = document.createElement("div");
headerSearch.setAttribute("class", "header-search");
header.append(headerSearch);

    const searchBar = document.createElement("input");
    searchBar.setAttribute("class", "search-bar");
    searchBar.setAttribute("type", "text");   
    headerSearch.append(searchBar);

    const searchBarIcon = document.createElement("button");
    searchBarIcon.setAttribute("class", "search-icon");
    searchBarIcon.innerHTML = '<i class="fi fi-rr-search"></i>';   
    headerSearch.append(searchBarIcon);  


//header account and cart
const headerInfo = document.createElement("div");
headerInfo.className = "header-info";
header.append(headerInfo);

    const account = document.createElement("button");
    account.className = "header-acc";
    account.innerHTML = '<i class="fi fi-rr-user"></i>';    
    headerInfo.append(account);

    const cart = document.createElement("button");
    cart.className = "header-cart";
    cart.innerHTML = '<i class="fi fi-rr-shopping-cart"></i>';
    headerInfo.append(cart);

// sticky header
window.onscroll = function() {stickyHeader()};
const sticky = header.offsetTop;
function stickyHeader() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}    


// NAVIGATION BAR
const books = document.createElement("a");
books.setAttribute("class", "nav-link");
const booksText = document.createTextNode("Books");
books.appendChild(booksText);
books.title = "Books";
books.href = "";
nav.append(books);

const bestsellers = document.createElement("a");
bestsellers.setAttribute("class", "nav-link");
const bestsellersText = document.createTextNode("Bestsellers");
bestsellers.appendChild(bestsellersText);
bestsellers.title = "Bestsellers";
bestsellers.href = "";
nav.append(bestsellers);

const eBooks = document.createElement("a");
eBooks.setAttribute("class", "nav-link");
const eBooksText = document.createTextNode("eBooks");
eBooks.appendChild(eBooksText);
eBooks.title = "eBooks";
eBooks.href = "";
nav.append(eBooks);

const audioBooks = document.createElement("a");
audioBooks.setAttribute("class", "nav-link");
const audioBooksText = document.createTextNode("Audiobooks");
audioBooks.appendChild(audioBooksText);
audioBooks.title = "Audiobooks";
audioBooks.href = "";
nav.append(audioBooks);

const toys = document.createElement("a");
toys.setAttribute("class", "nav-link");
const toysText = document.createTextNode("Toys&Games");
toys.appendChild(toysText);
toys.title = "Toys&Games";
toys.href = "";
nav.append(toys);

// SHOPPING CART
//add shopping cart 
var shoppingCart = document.createElement("div");
shoppingCart.className = "shopping-cart";     
shoppingCart.style.display = "none";
header.append(shoppingCart);   
         
// toggle shopping cart
cart.addEventListener("click", () => {
    if(shoppingCart.style.display === "none") {
         shoppingCart.style.display = "flex"
    } else {
         shoppingCart.style.display = "none"
    }
})    

// total sum section
let totalSum = 0;
const total = document.createElement("div")
total.className = "sum-total";
total.innerHTML = `Total: $${totalSum}`;
shoppingCart.append(total);

// checkout button
const checkout = document.createElement("button");
checkout.className = "checkout-btn";
checkout.innerHTML = "proceed checkout";
shoppingCart.append(checkout); 


//MAIN SECTION

function appendData(data) {

    // render books catalog
    const mainContainer = document.getElementById("main-container");
    for (let i = 0; i < data.length; i++) {         
        const item = document.createElement("div");
        item.className = "item";        
        mainContainer.append(item);

        const itemImg = document.createElement("div");
        itemImg.className = "item-img";
        const bookImg = document.createElement("img");
        bookImg.src = data[i].imageLink;
        itemImg.append(bookImg);

        const itemName = document.createElement("div");
        itemName.className = "item-name";
        const bookName = document.createElement("p");
        bookName.innerHTML = data[i].title;
        itemName.append(bookName);    
        
        const itemAuthor = document.createElement("div");
        itemAuthor.className = "item-author";
        const bookAuthor = document.createElement("p");
        bookAuthor.innerHTML = data[i].author;
        itemAuthor.append(bookAuthor); 

        const showMore = document.createElement("button");
        showMore.className = "show-btn";
        showMore.type = "button";
        showMore.innerHTML = "Show more";

        const itemDescription = document.createElement("div");
        itemDescription.className = "item-description";
        itemDescription.style.display = "none";
        itemDescription.innerHTML = data[i].description;
            const itemClose = document.createElement("button");
            itemClose.className = "close-btn";
            itemClose.innerHTML = '<i class="fi fi-rr-cross-small"></i>';
            itemDescription.append(itemClose);
        item.append(itemDescription);
        
        const itemAnnex = document.createElement("div");
        itemAnnex.className = "item-annex";
        
        const itemPrice = document.createElement("div");
        itemPrice.className = "item-price";
        const bookPrice = document.createElement("p");
        bookPrice.innerHTML = data[i].price + "$";
        itemPrice.append(bookPrice);
        itemAnnex.append(itemPrice); 

        const itemFavourite = document.createElement("button");
        itemFavourite.className = "item-favourite";        
        itemFavourite.innerHTML = "<i class='fi fi-rr-heart'></i>";     
        itemAnnex.append(itemFavourite);
        
        const itemCart = document.createElement("button");
        itemCart.className = "item-cart";        
        itemCart.innerHTML = "<i class='fi fi-rr-shopping-cart'></i>";
        itemAnnex.append(itemCart);       
    
        item.append(itemImg, itemName, itemAuthor, showMore, itemAnnex);         
        
        
     //show and hide book description 
     showMore.addEventListener("click", () => {
        if(itemDescription.style.display === "none") {
            itemDescription.style.display = "flex"
        } else {
            itemDescription.style.display = "none"
        }
    }) 
    
    itemClose.addEventListener("click", () => {
        if(itemDescription.style.display === "none") {
            itemDescription.style.display = "flex"
        } else {
            itemDescription.style.display = "none"
        }
    })

    //declaring shopping cart variables 
    const cartRow = document.createElement("div");
    cartRow.className = "cart-row";

    const cartRowDiv = document.createElement("div");
    cartRowDiv.className = "cart-row-div";

    const cartRowTitle = document.createElement("h2");
    cartRowTitle.className = "cart-row-title";
    cartRowTitle.innerHTML = data[i].title;

    const cartRowAuthor = document.createElement("h2");
    cartRowAuthor.className = "cart-row-author";
    cartRowAuthor.innerHTML = data[i].author;

    const cartRowPrice = document.createElement("h2");
    cartRowPrice.className = "cart-row-price";
    cartRowPrice.innerHTML = data[i].price + "$"

    const cartDeleteBtn = document.createElement("button");
    cartDeleteBtn.className = "cart-delete-btn";
    cartDeleteBtn.innerHTML = '<i class="fi fi-rr-cross-small"></i>';


    // render items in shopping cart
    itemCart.addEventListener("click", addToCart) 
    function addToCart() {        
        shoppingCart.appendChild(cartRow);        
        cartRow.append(cartRowDiv);            
        cartRowDiv.append(cartRowTitle);            
        cartRowDiv.append(cartRowAuthor);            
        cartRowDiv.append(cartRowPrice);              
        cartRow.append(cartDeleteBtn);                

        // shopping cart delete items 
        cartDeleteBtn.addEventListener("click", () => {
        shoppingCart.removeChild(cartRow)

        reduceTotalSum()
        })

        updateTotalSum()
    }

    //update total sum
        function updateTotalSum() { 
        let newPrice = data[i].price
            totalSum += newPrice
            console.log(totalSum)
            total.innerHTML = `Total: $${totalSum}`
        } 
    // reduce total sum
        function reduceTotalSum() {
            let newPrice = data[i].price
            totalSum -= newPrice
            console.log(totalSum)
            total.innerHTML = `Total: $${totalSum}`
        }   
       
    }

    // redirect to order page
    checkout.onclick = function () {
        location.href = '../book-shop/order.html';
      };
}




