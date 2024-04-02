const axios = require("axios");

const queryApi = async () => {
    let response = await axios.get("https://www.googleapis.com/books/v1/volumes?q=atomic+habits&langRestrict=en");
    // console.log(response.data)

    response.data.items.forEach(book => {
        if( book.volumeInfo.title &&
            book.volumeInfo.authors &&
            book.volumeInfo.publisher &&
            book.volumeInfo.publishedDate &&
            (book.volumeInfo.industryIdentifiers && book.volumeInfo.industryIdentifiers[0].type.includes("ISBN")) &&
            (book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail) &&
            book.volumeInfo.language === "en" &&
            book.volumeInfo.description
            )  
            {
                console.log(book.volumeInfo.title);
                console.log(book.volumeInfo.authors);
                console.log(book.volumeInfo.publisher);
                console.log(book.volumeInfo.publishedDate);
                console.log(book.volumeInfo.description);
                console.log(book.volumeInfo.industryIdentifiers[0]);
                console.log(book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail);
                console.log("==============================================================================");
            }
    });

}

queryApi();