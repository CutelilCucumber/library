let myLibrary = [];

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

function addBookToLibrary() {
    //check each entry for blanks except title, it is guarded with required
    let newTitle = document.getElementById('newTitle').value;
    let newRead = dataCheck(document.getElementById('newRead').checked);
    let newAuthor = dataCheck(document.getElementById('newAuthor').value);
    let newYear = dataCheck(document.getElementById('newYear').value);
    let newPages = dataCheck(document.getElementById('newPages').value);
    let newCover = dataCheck(document.getElementById('newCover').value);
    //load new book to library
    myLibrary.push(new Book(newTitle, newAuthor, newYear, newPages, newCover, newRead));
}

function dataCheck(content) {//replace empty inputs with Unknown
    if (content === ''){
        return 'Unknown';
    }
    return content;
}

function displayBooks() {
    //loop through array and display books into a table or cards
    for (const book of myLibrary) {//for each book of the array
        if (book.display === false) {//only if not currently displayed
            
            let newCard = document.createElement('div');//create new card
            newCard.classList.add('card');//add class card to it
            newCard.setAttribute('id', (book.id+'card'));//give new card the id of book title
            document.getElementById('cards').appendChild(newCard);//append card to cards
            
            newCard = document.createElement('div');//create text section for card
            newCard.classList.add('content');
            newCard.setAttribute('id', book.id);
            document.getElementById(book.id+'card').appendChild(newCard);

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

            newCard.addEventListener ('click', (e) => { //event listener to change read status
                myLibrary.forEach(item => {
                    //adjust the read value when a box is checked
                    if (document.getElementById(e.target.id).checked === true){
                        item.read = true;
                    } else {
                        item.read = false;
                    }
                    console.log(item.read);
                })
            })

            addInfo('p', book.author, book.id);//add author to card
            addInfo('p', ('Published: '+book.year), book.id);//add year to card
            addInfo('p', ('Pages: '+book.pages), book.id);//add pages to card
            addInfo('button', 'Remove Book', book.id);//add a remove button

            if (book.cover !== 'Unknown') {
                newCard = document.createElement('img');//add cover image to card
                newCard.setAttribute('src', book.cover);
                newCard.setAttribute('alt', book.title);
                document.getElementById((book.id+'card')).appendChild(newCard);
            }
            
            book.display = true;//make sure the book isnt duplicated
    }}
}
function addInfo(element, content, id) {
        let newElement = document.createElement(element)//create a element for the card
        newElement.appendChild(document.createTextNode(content));//add text to new element
        if (element === 'button') {
            newElement.setAttribute('id', (id+'button'));//add button to the unique id

            newElement.addEventListener ('click', (e) => {//add remove button event listener to all delete buttons
                if (confirm('Are you sure you want to remove this book?') === true){
                    removeBook(e.target.id.slice(0, -6))//send id without butten end
                }
            })
        }
        document.getElementById(id).appendChild(newElement);//add as a child to current card
}

function removeBook(contentID) {
    document.getElementById(contentID+'card').remove();//add card to id string and remove it and all children
    //use filter method to get new myLibrary without removed entry
    myLibrary = myLibrary.filter(entry => entry.id !== contentID);
}


//manual books for design
const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 1937, 310, 'https://m.media-amazon.com/images/I/712cDO7d73L.jpg',false);
const IT = new Book('IT', 'Stephen King', 1986, 1138, 'https://m.media-amazon.com/images/I/61pjyMrRCSL._AC_UF1000,1000_QL80_.jpg', false);
const howToFriends = new Book('How to Win Friends and Influence People', 'Dale Carnegie', 1937, 291, 'https://m.media-amazon.com/images/I/71vK0WVQ4rL.jpg', true);
myLibrary.push(theHobbit, IT, howToFriends);
displayBooks();

//assign some buttons for event listeners
const addButton = document.querySelector('[data-open-modal');
const modal = document.querySelector('[data-modal');
const form = document.getElementById('modal');
const recordData = document.getElementById('submit');

//open the form with addbutton
addButton.addEventListener('click', () => {
    modal.showModal();
})

//when the submit button is pressed
recordData.addEventListener('click', () => {
    addBookToLibrary()
    displayBooks()
})

//function to prevent regular submission
const submit = function(event) {
    event.preventDefault();
    modal.close();
}

//event listener on form submit
form.addEventListener('submit', submit, true);

// someone else's code to close modal if clicked out
modal.addEventListener('click', e => {
    const dialogDimensions = modal.getBoundingClientRect()
    if (
        e.clientX < dialogDimensions.left ||
        e.clientX > dialogDimensions.right ||
        e.clientY < dialogDimensions.top ||
        e.clientY > dialogDimensions.bottom
    ) {
        modal.close()
    }
})