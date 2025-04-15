const myLibrary = [];

function Book(title, author, year, pages, read) {
    // book constructor, all need unique id with crypto.randomUUID()
    this.title = title;
    this.author = author;
    this.year = year;
    this.pages = pages;
    this.read = read;
}
//unused info function
// Book.info = function() {
//     let readYet = 'you have read.';
//     if (this.read = false) {
//         readYet = 'you have not read.';
//     }
//     return (`${this.title} was written by ${this.author} in ${this.year}. ${this.pages} pages, ` + readYet);
// }

function addBookToLibrary() {
    //take params, create book and store into myLibrary

}

function displayBooks() {
    //loop through array and display books into a table or cards
    for (const book in myLibrary) {
        
    }
}

function removeBook() {

}

//manual books for design
const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 1937, 310, false);
const IT = new Book('IT', 'Stephen King', 1986, 1138, false);
myLibrary.push(theHobbit, IT);