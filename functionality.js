let myLibrary = [];
let container = document.getElementById('booksList');

function displayBooks(){
    myLibrary.forEach(function(book){
        let bookContainer = document.createElement('div');
        bookContainer.innerText = `${book.title} by ${book.author}, has ${book.pages} pages and is ${book.read}`;
        container.appendChild(bookContainer);
    })
}

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.addBookToLibrary = function(){
    let book = {};
    book.title = this.title;
    book.author = this.author;
    book.pages = this.pages;
    book.read = this.read;
    myLibrary.push(book);
}

let newBook = new Book ('boos', 'me', 443, 'not read');
newBook.addBookToLibrary();

displayBooks();