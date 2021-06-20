"use strict";
function printBook(book) {
    //  book.title = "Johns verden"
    console.log(book.title + " " + book.author + " " + book.published + " " + book.pages);
}
let obj = {
    title: "Min title",
    author: "Pelle",
    published: new Date(2010, 5, 3),
};
printBook(obj);
class Book {
    constructor(title, author, published, pages) {
        this.title = title;
        this.author = author;
        this.published = published;
        this.pages = pages;
    }
    get details() {
        return (this.title +
            " " +
            " " +
            this.author +
            " " +
            this.published +
            " " +
            this.pages);
    }
}
let b1 = new Book("Den Glade ko", "Flemming", new Date(2009, 4, 1), 500);
console.log(b1.details);
//# sourceMappingURL=interface1.js.map