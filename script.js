const myLibrary = [];

function Book(title, author, year, pages, cover, read) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.pages = pages;
    this.cover = cover;
    this.read = read;
    this.id = crypto.randomUUID();
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
    for (const book of myLibrary) {//for each book of the array
        if (book.display === false) {//only if not currently displayed
            
            let newCard = document.createElement('div');//create new card
            newCard.classList.add('card');//add class card to it
            newCard.setAttribute('id', book.id);//give new card the id of book title
            document.getElementById('cards').appendChild(newCard);//append card to cards
            
            addInfo('h2', book.title, book.id);//add title to card

            newCard = document.createElement('label');//add label for checkbox
            newCard.appendChild(document.createTextNode('Read: '))
            newCard.setAttribute('for', (book.id+'read'));
            document.getElementById(book.id).appendChild(newCard);

            newCard = document.createElement('input');//add checkbox for read
            newCard.setAttribute('type', 'checkbox');
            newCard.setAttribute('id', (book.id+'read'));
            newCard.setAttribute('name', (book.id+'read'));
            if (book.read === true) {//check if true
                newCard.setAttribute('checked','');
            }
            document.getElementById(book.id).appendChild(newCard);

            addInfo('p', book.author, book.id);//add author to card
            addInfo('p', ('Published: '+book.year), book.id);//add year to card
            addInfo('p', ('Pages: '+book.pages), book.id);//add pages to card

            newCard = document.createElement('img');//add cover image to card
            newCard.setAttribute('src', book.cover);
            newCard.setAttribute('alt', book.title);
            document.getElementById(book.id).appendChild(newCard);
            
            book.display = true;//make sure the book isnt duplicated
    }}
}
function addInfo(element, content, id) {
        let newElement = document.createElement(element)//create a element for the card
        newElement.appendChild(document.createTextNode(content));//add text to new element
        document.getElementById(id).appendChild(newElement);//add as a child to current card
}

function removeBook() {

}

//manual books for design
const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 1937, 310, 'https://m.media-amazon.com/images/I/712cDO7d73L.jpg',false);
const IT = new Book('IT', 'Stephen King', 1986, 1138, 'https://m.media-amazon.com/images/I/61pjyMrRCSL._AC_UF1000,1000_QL80_.jpg', false);
const howToFriends = new Book('How to Win Friends and Influence People', 'Dale Carnegie', 1937, 291, 'https://m.media-amazon.com/images/I/71vK0WVQ4rL.jpg', true);
myLibrary.push(theHobbit, IT, howToFriends);
displayBooks();