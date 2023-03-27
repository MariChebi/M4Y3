module.exports = {
 before(browser) {
    browser
        .page.qwe()
        .navigate()
        .waitForElementVisible('@welcome', 'Главная title visible')
        .assert.textContains('@welcome', 'Главная', 'Главная title correct');
    },
    after(browser) {
      browser.end();
     },
     
     'Ищем ручку': function(browser) {
    browser
        .page.qwe()
        .search('ручка')
        .waitForElementVisible('@welcome', 'Главная title visible')
        .assert.textContains('@welcome', 'Главная', 'Главная title ok') 
        .setValue('@searchBar', ['яблоко',browser.Keys.ENTER])
       .waitForElementVisible('@pageTitle', 'Главная title visible');
    browser.end();
    }
};