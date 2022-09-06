const getTheTitles = function(books) {
    const titles = [];
    books.forEach(books => titles.push(books.title));
    return titles;
    /*
        create array to hold titles
        for each book in array
            push title to array of titles
    */
};

// Do not edit below this line
module.exports = getTheTitles;
