let http = require("http");
let nodeFetch = require("node-fetch");

interface IBook {
    title: string,
    readonly author: string,
    published?: Date,
    pages?: number
}

function logBook(book: IBook) {
    console.log(JSON.stringify(book))
}

// I never specify that this is of the type IBook, but because of duck-typing typescript knows that it is
const book = {
    title: "A book",
    author: "Not Kurt",
    published: new Date(),
    pages: 5000
};

logBook(book);

const book2: IBook = {
    title: "A book",
    author: "Not Kurt"
};

// book2.author = "Kurt";

logBook(book2);

class Book implements IBook {
    readonly author: string;
    private _pages: number;
    private _published: Date;
    private _title: string;

    constructor(author: string, pages: number, published: Date, title: string) {
        this.author = author;
        this._pages = pages;
        this._published = published;
        this._title = title;
    }

    get pages(): number {
        return this._pages;
    }

    set pages(value: number) {
        this._pages = value;
    }

    get published(): Date {
        return this._published;
    }

    set published(value: Date) {
        this._published = value;
    }

    get title(): string {
        return this._title;
    }

    set title(value: string) {
        this._title = value;
    }
}

const book3 = new Book("Hey", 20021, new Date(), "Summa Dat");
logBook(book3);
