const books = [
    {
        "title": "Harry Potter and the Philosopher's Stone",
        "ISBN": "9781408855652",
        "year": 1997,
        "genre": "Fantasy",
        "author": "J.K. Rowling",
        "stock": 10,
        "publisher": "Bloomsbury"
    },
    {
        "title": "Harry Potter and the Chamber of Secrets",
        "ISBN": "9781408855669",
        "year": 1998,
        "genre": "Fantasy",
        "author": "J.K. Rowling",
        "stock": 2,
        "publisher": "Bloomsbury"
    },
    {
        "title": "Cracking the Coding Interview",
        "ISBN": "9780984782857",
        "year": 2015,
        "genre": "Technical",
        "author": "Gayle Laakmann McDowell",
        "stock": 5
    },
    {
        "title": "The Alchemist",
        "ISBN": "9780062315007",
        "year": 1988,
        "genre": "Fantasy",
        "author": "Paulo Coelho",
        "stock": 3,
        "publisher": "HarperOne"
    },
    {
        "title": "Educated",
        "ISBN": "9780399590504",
        "year": 2018,
        "genre": "Memoir",
        "author": "Tara Westover",
        "stock": 7,
        "publisher": "Random House"
    },
    {
        "title": "Sapiens: A Brief History of Humankind",
        "ISBN": "9780062316097",
        "year": 2014,
        "genre": "History",
        "author": "Yuval Noah Harari",
        "stock": 4,
        "publisher": "Harper"
    },
    {
        "title": "Becoming",
        "ISBN": "9781524763138",
        "year": 2018,
        "genre": "Autobiography",
        "author": "Michelle Obama",
        "stock": 6,
        "publisher": "Crown"
    },
    {
        "title": "The Night Circus",
        "ISBN": "9780307744432",
        "year": 2011,
        "genre": "Fantasy",
        "author": "Erin Morgenstern",
        "stock": 5,
        "publisher": "Anchor Books"
    },
    {
        "title": "1984",
        "ISBN": "9780451524935",
        "year": 1949,
        "genre": "Dystopian",
        "author": "George Orwell",
        "stock": 8,
        "publisher": "Plume"
    },
    {
        "title": "The Martian",
        "ISBN": "9780804139021",
        "year": 2014,
        "genre": "Science Fiction",
        "author": "Andy Weir",
        "stock": 5,
        "publisher": "Crown Publishing Group"
    },
    {
        "title": "Where the Crawdads Sing",
        "ISBN": "9780735219090",
        "year": 2018,
        "genre": "Fiction",
        "author": "Delia Owens",
        "stock": 4,
        "publisher": "G.P. Putnam's Sons"
    },
    {
        "title": "Atomic Habits",
        "ISBN": "9780735211292",
        "year": 2018,
        "genre": "Self-help",
        "author": "James Clear",
        "stock": 7,
        "publisher": "Avery"
    },
    {
        "title": "The Power of Now",
        "ISBN": "9781577314806",
        "year": 1997,
        "genre": "Spirituality",
        "author": "Eckhart Tolle",
        "stock": 9,
        "publisher": "New World Library"
    },
    {
        "title": "The Catcher in the Rye",
        "ISBN": "9780316769488",
        "year": 1951,
        "genre": "Fiction",
        "author": "J.D. Salinger",
        "stock": 7,
        "publisher": "Little, Brown and Company"
    },
    {
        "title": "The Great Gatsby",
        "ISBN": "9780743273565",
        "year": 1925,
        "genre": "Fiction",
        "author": "F. Scott Fitzgerald",
        "stock": 8,
        "publisher": "Scribner"
    },
    {
        "title": "To Kill a Mockingbird",
        "ISBN": "9780061120084",
        "year": 1960,
        "genre": "Fiction",
        "author": "Harper Lee",
        "stock": 0,
        "publisher": "HarperPerennial Modern Classics"
    },
    {
        "title": "A Brief History of Time",
        "ISBN": "9780553380163",
        "year": 1988,
        "genre": "Science",
        "author": "Stephen Hawking",
        "stock": 6,
        "publisher": "Bantam"
    },
    {
        "title": "The Four Agreements",
        "ISBN": "9781878424310",
        "year": 1997,
        "genre": "Self-help",
        "author": "Don Miguel Ruiz",
        "stock": 7,
        "publisher": "Amber-Allen Publishing"
    },
    {
        "title": "The Lean Startup",
        "ISBN": "9780307887894",
        "year": 2011,
        "genre": "Business",
        "author": "Eric Ries",
        "stock": 9,
        "publisher": "Crown Business"
    },
    {
        "title": "Thinking, Fast and Slow",
        "ISBN": "9780374533557",
        "year": 2011,
        "genre": "Psychology",
        "author": "Daniel Kahneman",
        "stock": 5,
        "publisher": "Farrar, Straus and Giroux"
    }
]

const sendResponse = (code, body = null) => {
    const response = {
        code,
        body,
    };

    switch (code) {
        case 200:
            response.msg = "Ok";
            break;
        case 201:
            response.msg = "Created";
            break;
        case 400:
            response.msg = "Endpoint not valid";
            break;
        case 404:
            response.msg = "Not found";
            break;
        case 500:
            response.msg = "Internal Server Error";
            break;
        case 204:
            response.msg = "No content";
            break;
        default:
            response.msg = "Unknown status code";
    }

    return response;
};

const getBook = (nameOrISBN) => {
    try{
        if(!nameOrISBN){
            return sendResponse(400);
        }
        if(books.length === 0){
            return sendResponse(204);
        }
        const book = books.find(book => book.title.toLowerCase() === nameOrISBN.toLowerCase() || book.ISBN === nameOrISBN);
        if(book === undefined){
            return sendResponse(404);
        }
        return sendResponse(200, book);
    }catch(error){
        return sendResponse(500, error);
    }
};

const getBooks = () => {
    try{
        if(books.length === 0){
            return sendResponse(204);
        }
        return sendResponse(200, books);
    }catch(error){
        return sendResponse(500, error);
    }
};

const addBook = (title, ISBN, year, genre, author, stock, publisher) => {
    try{
        if(!title || !ISBN || !year || !genre || !author || !stock || !publisher){
            return sendResponse(400);
        }
        const newBook = {
            title: title,
            ISBN: ISBN,
            year: year,
            genre: genre,
            author: author,
            stock: stock,
            publisher: publisher
        };
        books.push(newBook);
        return sendResponse(201, JSON.stringify({newBook, books}));
    }catch(error){
        return sendResponse(500, error);
    }
};

const removeBookByTitleOrISBN = (nameOrISBN) => {
    try{
        if(!nameOrISBN){
            return sendResponse(400);
        }
        if(books.length === 0){
            return sendResponse(204);
        }
        const removedBook = books.find(book => book.title.toLowerCase() === nameOrISBN.toLowerCase() || book.ISBN === nameOrISBN);
        if(removedBook === undefined){         
            return sendResponse(404);
        }
        books.splice(books.indexOf(removedBook), 1);
        return sendResponse(200, JSON.stringify({removedBook, books}));
    }catch(error){
        return sendResponse(500, error);
    }
};

const filterBy = (filter, value) => {
    try{
        if(!filter || !value){
            return sendResponse(400);
        }
        filter = filter.toLowerCase();
        if(filter !== "genre" && filter !== "author" && filter !== "publisher"){
            return sendResponse(400);
        }
        if(books.length === 0){
            return sendResponse(204);
        }
        const filteredBooks = books.filter((book) => book[filter].toLowerCase() === value.toLowerCase());
        if(filteredBooks.length === 0){
            return sendResponse(404);
        }
        return sendResponse(200, filteredBooks);
    }catch(error){
        return sendResponse(500, error);
    }
};

const listBooks = () => {
    try{
        if(books.length === 0){
            return sendResponse(204);
        }
        const booksList = books.map(book =>({
            tittle: book.title,
            author: book.author,
            year: book.year
        }));
        return sendResponse(200, booksList);
    }catch(error){
        return sendResponse(500, error);
    }
};

const getBooksByYear = (year) => {
    try{
        if (!year){
            return sendResponse(400);
        }
        if(books.length === 0){
            return sendResponse(204);
        }
        const booksYear = books.filter((books) => books.year === year);
        if(booksYear.length === 0){
            return sendResponse(404);
        }
        return sendResponse(200, booksYear);
    }catch(error){
        return sendResponse(500, error);
    }
};

const genreFullAvailability = (genre) => {
    try{
        if (!genre){
            return sendResponse(400);
        }
        if(books.length === 0){
            return sendResponse(204);
        }
        const booksOfGenre = books.filter((book) => book.genre.toLowerCase() === genre.toLowerCase());
        if(booksOfGenre.length === 0){
            return sendResponse(404);
        }
        const availability = booksOfGenre.every((book) => book.stock > 0);
        let message = "All books of genre "+genre.toLowerCase()+" have stock: ";
        return sendResponse(200, { [message]: availability });
    }catch(error){
        return sendResponse(500, error);
    }
};

const genrePartialAvailability = (genre) => {
    try{
        if (!genre){
            return sendResponse(400);
        }
        if(books.length === 0){
            return sendResponse(204);
        }
        const booksOfGenre = books.filter((book) => book.genre.toLowerCase() === genre.toLowerCase());
        if(booksOfGenre.length === 0){
            return sendResponse(404);
        }
        const availability = booksOfGenre.some((book) => book.stock > 0);
        let message = "At least one of books of genre "+genre.toLowerCase()+" have stock: ";
        return sendResponse(200, { [message]: availability });
    }catch(error){
        return sendResponse(500, error);
    }
};

const getCountBy = (property, value) => {
    try {
        if (!property || !value) {
            return sendResponse(400);
        }
        property = property.toLowerCase();
        value = value.toLowerCase();
        if (property !== "genre" && property !== "author" && property !== "publisher") {
            return sendResponse(400);
        }
        if (books.length === 0) {
            return sendResponse(204);
        }
        const count = books.reduce((acc, book) => {
            if (book[property].toLowerCase() === value) {
                acc++;
            }
            return acc;
        }, 0);
        if (count === 0) {
            return sendResponse(404);
        }
        return sendResponse(200, { [property]: { [value]: count } });
    } catch (error) {
        return sendResponse(500, error);
    }
};
