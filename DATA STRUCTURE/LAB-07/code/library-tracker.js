const library = [];

function addBook(title, author, isbn, genre) {
  // Check if ISBN already exists
  if (library.some(book => book.isbn === isbn)) {
    console.log("A book with this ISBN already exists.");
    return;
  }
  const book = { title, author, isbn, genre, status: "Available" };
  library.push(book);
}

function viewBooks() {
  if (library.length === 0) {
    console.log("No books in the library.");
  } else {
    console.log("\n=== ALL BOOKS ===");
    library.forEach(book => {
      console.log(`Title: ${book.title}, Author: ${book.author}, ISBN: ${book.isbn}, Genre: ${book.genre}, Status: ${book.status}`);
    });
  }
}

function searchBooks(query) {
  const results = library.filter(book => 
    book.title.toLowerCase().includes(query.toLowerCase()) || 
    book.author.toLowerCase().includes(query.toLowerCase())
  );  
    if (results.length === 0) {
      console.log("No books found.");
    } else {
      console.log("\n=== SEARCH RESULTS ===");
      results.forEach(book => {
        console.log(`Title: ${book.title}, Author: ${book.author}, ISBN: ${book.isbn}, Genre: ${book.genre}, Status: ${book.status}`);
      });
    }
}

// Implement remaining functions (update, delete, search by author)
function updateBook(isbn, newTitle, newAuthor, newGenre) {
  const bookIndex = library.findIndex(book => book.isbn === isbn);
  if (bookIndex === -1) {
    console.log("Book not found.");
    return;
  }
  library[bookIndex] = { ...library[bookIndex], title: newTitle, author: newAuthor, genre: newGenre };
}

function deleteBook(isbn) {
  const bookIndex = library.findIndex(book => book.isbn === isbn);
  if (bookIndex === -1) {
    console.log("Book not found.");
    return;
  }
  library.splice(bookIndex, 1);
}

function searchByAuthor(author) {
  const results = library.filter(book => book.author.toLowerCase().includes(author.toLowerCase()));
  if (results.length === 0) {
    console.log("No books found by this author.");
  } else {
    console.log("\n=== SEARCH RESULTS ===");
    results.forEach(book => {
      console.log(`Title: ${book.title}, Author: ${book.author}, ISBN: ${book.isbn}, Genre: ${book.genre}, Status: ${book.status}`);
    });
  }
}
