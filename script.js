const body = document.body;
  
const container = document.createElement('div');
const header = document.createElement('div');
const nav = document.createElement('div');
const main = document.createElement('div');  

body.append(container);
container.append(header, nav, main);

container.setAttribute("class", "container");
header.setAttribute("class", "header");
nav.setAttribute("class", "nav");
main.setAttribute("class", "main");


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
headerInfo.setAttribute("class", "header-info");
header.append(headerInfo);

    const account = document.createElement("div");
    account.setAttribute("class", "header-acc");
    account.innerHTML = '<i class="fi fi-rr-user"></i>';    
    headerInfo.append(account);

    const cart = document.createElement("div");
    cart.setAttribute("class", "header-cart");
    cart.innerHTML = '<i class="fi fi-rr-shopping-cart"></i>';
    headerInfo.append(cart);


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
