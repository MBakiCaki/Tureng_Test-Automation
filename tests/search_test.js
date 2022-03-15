Feature('Search')

Scenario('Search Test', ({ I }) => {

    // english word
    I.amOnPage('https://tureng.com/tr/turkce-ingilizce');
    I.waitForElement('#searchTerm');
    I.fillField('searchTerm', 'book');
    I.pressKey('Enter');

    // wait max 3 sec for the result table to load
    I.waitForElement('#englishResultsTable', 3);
    I.see('kitap', '#englishResultsTable');

    
    //turkish word
    I.fillField('searchTerm', 'kalem');
    I.pressKey('Enter');

    I.waitForElement('#englishResultsTable', 3);
    I.see('pencil', '#englishResultsTable');
});