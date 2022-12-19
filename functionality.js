let myLibrary = [
    {
        title: "Ipoteza fericirii",
        author: "Jonathan Haidt",
        pages: 379,
        read: "read"
    },
    {
        title: "Sunt o baba comunista",
        author: "Dan NuStiuCum",
        pages: 253,
        read: "read"
    }
];

let container = document.getElementById('booksList');

function displayBooks(){
    myLibrary.forEach(function(book){
        let bookContainer = document.createElement('div');
        bookContainer.innerText = `${book.title} by ${book.author}, has ${book.pages} pages and is ${book.read}`;
        container.appendChild(bookContainer);
    })
}

displayBooks();



function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(){
    //do stuff here
}