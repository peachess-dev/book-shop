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

    const searchBarIcon = document.createElement("div");
    searchBarIcon.setAttribute("class", "search-icon");
    searchBarIcon.innerHTML = '<i class="fi fi-rs-search"></i>';   
    headerSearch.append(searchBarIcon);  


//header account and cart
const headerInfo = document.createElement("div");
headerInfo.className = "header-info";
header.append(headerInfo);

    const account = document.createElement("div");
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


//MAIN SECTION

function appendData(data) {
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
        itemFavourite.innerHTML = "<i class='fi fi-rs-heart'></i>";     
        itemAnnex.append(itemFavourite);
        //change button color
        itemFavourite.addEventListener("click", () => {
            if(itemFavourite.style.background === "#000") {
                itemFavourite.style.background = "#E9C48E"
            } else {
                itemFavourite.style.background = "#000"
            }
        })      

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

    }
}