const myLibrary = [];

function Book(title, author, year, pages, read) {
    // book constructor, all need unique id with crypto.randomUUID()
    this.title = title;
    this.author = author;
    this.year = year;
    this.pages = pages;
    this.read = read;
    this.display = false;
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
    for (const book in myLibrary) {//for each book in the array
        if (book.display === false) {//only if not currently displayed
            
            let newElement = document.createElement('div');//create new card
            newElement.classList.add('card');//add class card to it
            document.getElementById('cards').appendChild(newElement);//append card to cards
            


            book.display = true;
    }}
}

function removeBook() {

}

//manual books for design
const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 1937, 310, false);
const IT = new Book('IT', 'Stephen King', 1986, 1138, false);
const howToFriends = new Book('How to Win Friends and Influence People', 'Dale Carnegie', 1937, 291, true);
myLibrary.push(theHobbit, IT, howToFriends);