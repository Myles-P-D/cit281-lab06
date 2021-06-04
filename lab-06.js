//creating and experimenting with classes

class Book 
{
    constructor(title, author, pubDate, isbn)
    {
        this.title = title;
        this.author = author;
        this.pubDate = pubDate;
        this.isbn = isbn;
    }
}

class Library 
{
    constructor (name) 
    {
        this._name = name
        this._books = [];
    }
    get books ()
    {
        return JSON.parse(JSON.stringify(this._books));
    }
    get count ()
    {
        return this._books.length;
    }
    addBook (book = [])
    {
        const { title = "", author = "", pubDate = "" , isbn =  ""} = book;
        if (title.length > 0 && author.length > 0)
        {
            const newBook = { title, author, pubDate, isbn };
            this._books.push(newBook);
        }
    }
    listBooks ()
    {
        for (const book of this._books)
        {
            const {title, author, pubDate, isbn} = book;
            console.log(`Title: ${title}, Author: ${author}, PubDate: ${pubDate}, ISBN: ${isbn}`);
        }
    }
    deleteBook(isbn)
    {
        let indexBookRemove = null; 
        for (let index = 0; index < this._books.length; index ++)
        {
            let currentBook = this._books[index];
            if (currentBook.isbn == isbn)
            {
                indexBookRemove = index;
                break; 
            }
        }
        this._books.splice(indexBookRemove, 1);
    }
}
//create library
const library = new Library("New York Times Best Seller List");

//create books 
const atomicHabits = new Book("Atomic Habits", "James Clear", "10/16/2018", "0735211299");
const theHillWeClimb = new Book("The Hill We Climb", "David Baldacci", "03/30/2021", "059346527X");
const oceanPrey = new Book("ocean Prey", "John Sandford", "04/13/2021", "1398505501");

library.addBook(atomicHabits);
library.addBook(theHillWeClimb);
library.addBook(oceanPrey);
console.log("* Library updated *");
console.log(`Book count: ${library.count}`);
library.listBooks();

//delete book(s)
console.log("* Library after delete *");
library.deleteBook("059346527X");
library.listBooks();

