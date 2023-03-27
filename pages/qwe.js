const pageCommands = {
    search(word) {
        this
            .setValue('@searchBar', word,browser.Keys.ENTER) //поиск по слову
            //.click('@submitButton');
        return this; // возвращает текущий объект и можно делать цепочки вызовов
    }
};
module.exports = {
    url: 'http://testshop.sedtest-school.ru/',
    commands: [pageCommands],
    elements: {
        welcome: '#nav_link_main', //приветствие 
        searchBar: 'body > div.container > div:nth-child(1) > div.col-md-9.mt-2 > form > div > input',  //поле поиска 
        //submitButton: {selector:'[name="go"]'}, // кнопка для поиска
        pageTitle: '#nav_link_main' //заголовок страницы 
    }
}
