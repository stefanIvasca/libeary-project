let myLibrary = [];
let container = document.getElementById('booksList');

function displayBooks(){
    myLibrary.forEach(function(book){
        let bookContainer = document.createElement('div');
        let bookTitle = document.createElement('h1');
        let bookAuthor = document.createElement('h2');
        let bookPages = document.createElement('p');
        let bookRead = document.createElement('p');
        bookTitle.innerText = `${book.title}`;
        bookAuthor.innerText = `${book.author}`;
        bookPages.innerText = `${book.pages} pages`;
        bookRead.innerText = `${book.read}`;
        bookContainer.appendChild(bookTitle);
        bookContainer.appendChild(bookAuthor);
        bookContainer.appendChild(bookPages);
        bookContainer.appendChild(bookRead);
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