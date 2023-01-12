let myLibrary = [];
let container = document.getElementById('booksList');

function displayBooks(){
    myLibrary.forEach(function(book){
        let bookContainer = document.createElement('div');
        let bookTitle = document.createElement('h1');
        let bookAuthor = document.createElement('h2');
        let bookPages = document.createElement('p');
        let bookRead = document.createElement('p');
        let deleteButton = document.createElement('button');
        deleteButton.id = `${book.id}`;
        deleteButton.addEventListener("click", deleteBook);
        function deleteBook(){
            let indexOfObject = myLibrary.findIndex(object => {
                return object.id === book.id;
            })
            myLibrary.splice(indexOfObject, 1);
            bookContainer.remove();
            container.innerHTML='';
            displayBooks();
        }

        deleteButton.innerText = 'Delete';
        deleteButton.classList.add('deleteButton');
        bookTitle.innerText = `${book.title}`;
        bookAuthor.innerText = `by ${book.author}`;
        bookPages.innerText = `${book.pages} pages`;
        bookRead.innerText = `${book.read}`;
        bookContainer.appendChild(bookTitle);
        bookContainer.appendChild(bookAuthor);
        bookContainer.appendChild(bookPages);
        bookContainer.appendChild(bookRead);
        bookContainer.appendChild(deleteButton);
        container.appendChild(bookContainer);
    })
}

function closeForm(){
    let formContainer = document.querySelector('.formContainer');
    let newBookButton = document.querySelector('.newBook');
    newBookButton.style.filter = 'blur(0px)';
    container.style.filter = 'blur(0px)';
    formContainer.style.visibility = 'hidden';
}

function Book(title, author, pages, read, id) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = id;
}

Book.prototype.addBookToLibrary = function(){
    let book = {};
    book.title = this.title;
    book.author = this.author;
    book.pages = this.pages;
    book.read = this.read;
    book.id = this.id;
    myLibrary.push(book);
}

function displayForm(){
    let formContainer = document.querySelector('.formContainer');
    let newBookButton = document.querySelector('.newBook');
    newBookButton.style.filter = 'blur(4px)';
    container.style.filter = 'blur(4px)';
    formContainer.style.visibility = 'visible';
}

let submitButton = document.querySelector('.submitButton');
submitButton.addEventListener('click', getFormInfo);

function getFormInfo(){
    let title = document.querySelector('#title').value;
    let author = document.querySelector('#author').value;
    let pages = document.querySelector('#pages').value;
    let read = document.querySelector('input[name="read"]:checked').value;
    let id = Math.floor(Date.now()*Math.random());
    let newBook = new Book (title, author, pages, read, id);
    newBook.addBookToLibrary();
    container.innerHTML='';
    displayBooks();
    event.preventDefault();
    closeForm();
}

displayBooks();