const { bookClass, library } = require("./index");

test("Function to add Book to store ", () => {
	let storedBooks = library;
	expect(bookClass.displayLibrary(bookClass)).toEqual(storedBooks);
});

test("Testing for adding a book to Store", () => {
	expect(bookClass.addBookToLibrary()).toHaveLength(library.length + 1);
});

test("Testing for Removing of a book from the Library", () => {
	expect(
		bookClass.removeBookFromStore("Principles of a Good Marriage"),
	).toHaveLength(library.length - 1);
});
test("Testing for Removing of a book from the Library", () => {
	expect(bookClass.borrowBookFromLibrary()).toHaveLength(2);
});
