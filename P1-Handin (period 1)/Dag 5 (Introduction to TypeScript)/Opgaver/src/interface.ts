interface IBook {
  readonly title: string;
  author: string;
  published?: Date;
  pages?: number;
}

function printBook(book: IBook) {
  console.log(
    book.title + " " + book.author + " " + book.published + " " + book.pages
  );
}

let obj = {
  title: "Harry Potter",
  author: "J.K Rowling",
  published: new Date(2010, 5, 3),
};

printBook(obj);

class Book implements IBook {
  title: string;
  author: string;
  published?: Date;
  pages?: number;

  constructor(title: string, author: string, published?: Date, pages?: number) {
    this.title = title;
    this.author = author;
    this.published = published;
    this.pages = pages;
  }
  get details(): string {
    return (
      this.title +
      " " +
      " " +
      this.author +
      " " +
      this.published +
      " " +
      this.pages
    );
  }
}
//TEST BOOK
let b1 = new Book("Harry Potter", "J.K Rowling", new Date(2009, 4, 1), 500);
console.log(b1.details);
