const mockedBooks = [{
        "id": "1",
        "title": "my new book on java",
        "releaseDate": "2021-01-10"
    },
    {
        "id": "2",
        "title": "my new book on node",
        "releaseDate": "2021-01-15"
    },
    {
        "id": "3",
        "title": "my new book on express",
        "releaseDate": "2021-01-20"
    },
    {
        "id": "4",
        "title": "my new book on life choices",
        "releaseDate": "2021-01-25"
    }
];


const findBookById= (id) => {
    return mockedBooks.filter(book => book.id === id);
}

const save = (book) => {
    console.log(`book is being saved, ${JSON.stringify(book)}`)
    console.log(`last id is: ${JSON.stringify(mockedBooks)}`)
    const lastId = mockedBooks.at(-1).id;
    console.log(`last id is: ${lastId}`)
    return mockedBooks.push({...book, id: lastId});
}



const getAllBoks= () => {
    return mockedBooks;
}

module.exports = {
    findBookById,
    getAllBoks, 
    save    
}