const library = [
	{
		id: 1,
		name: "Principles of a Good Marriage",
		borrowed: true,
		tag: "relationship",
		author: "Kingsley Okonkwo",
	},
	{
		id: 2,
		name: "Passion for Trust",
		borrowed: false,
		tag: "relationship",
		author: "Mighty Glamour",
	},
	{
		id: 3,
		name: "Behind the crown",
		borrowed: true,
		tag: "Prose",
		author: "Obi Okeke",
	},
];

class Book {
	constructor(id, name, borrowed, tag, author) {
		this.id = id;
		this.name = name;
		this.borrowed = borrowed;
		this.tag = tag;
		this.author = author;
	}

	displayLibrary() {
		const bookStore = library;
		bookStore.forEach((book) => {
			console.log(
				`${book.id} ${book.name} => ${book.author} => ${book.borrowed}`,
			);
		});

		return bookStore;
	}
	addBookToLibrary() {
		const bookStore = library;
		const newBook = new Book(
			4,
			" Intro To Nutrition",
			false,
			"nutrition",
			"Chioma Egbo",
		);

		const updatedLibrary = [...bookStore, newBook];
		console.table(updatedLibrary);

		return updatedLibrary;
	}

	borrowBookFromLibrary() {
		const bookStore = library;
		const borrowedBook = bookStore.filter((book) => book.borrowed);

		borrowedBook.forEach((book, index) => {
			console.table(`${index + 1} ${book.name} => ${book.author}`);
		});
		return borrowedBook;
	}
	removeBookFromStore(bookName) {
		const bookStore = library;
		const remainingListOfBooks = bookStore.filter(
			(book) => book.name !== bookName,
		);

		console.table(remainingListOfBooks);
		return remainingListOfBooks;
	}
}

console.log(
	"+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++",
);
console.log("Here is a list Books in the Library");
console.log(
	"++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++",
);

let bookClass = new Book();
bookClass.displayLibrary();
console.log("\n\n");

console.log("list of borrowedBooks");
console.log("\n");
bookClass.borrowBookFromLibrary();

console.log("\n\n");
console.log(
	"Here is the new list of books After it has been added to the library",
);

bookClass.addBookToLibrary();

console.log("\n\n");
console.log("List Available After Removal");

bookClass.removeBookFromStore("Principles of a Good Marriage");

module.exports = {
	bookClass,
	library,
};
