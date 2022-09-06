const getTheTitles = function(books) {
    const titles = [];
    books.forEach(books => titles.push(books.title));
    return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
