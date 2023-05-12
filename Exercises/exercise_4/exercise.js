const books = [{title:"The River Between", author:"Ngũgĩ wa Thiong'o", year:1965, genre:"Tradition"},
{title:"The River and The Source", author:"Margaret Ogola", year:1994, genre:"Tradition"},
{title:"Binti", author:"Nnedi Okorafor", year:2015 , genre:"Science Fiction"}
];

function printBookInfo(array){

    let bookArr = [];
    for (let index = 0; index < `array.length`; index++) {

        let bookStr = array[index].title + " by " + array[index].author;

        if (array[index].year > 2000){
            bookStr += " - Modern";
        }

        if (array[index].genre === "Science Fiction"){
            bookStr += " - SciFi";
        }
    
        bookArr.push(bookStr);
    }

    return bookArr;
}

console.log(printBookInfo(books));