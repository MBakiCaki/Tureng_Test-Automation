Feature('login');

Scenario('Login Test', ({ I, loginPage }) => {
    // w/ page object model

    loginPage.openLoginPage();
    loginPage.enterCredentials(loginPage.fields.validMail, loginPage.fields.validPass);
    I.click(loginPage.buttons.oturumAc);
    
    //see username is displayed
    I.see('John', '.dropdown-toggle');
    
});

Scenario('Invalid Login Test', ({ I, loginPage }) => {
    // w/o page object model

    //go to login page
    I.amOnPage('https://tureng.com/tr/turkce-ingilizce');
    I.waitForElement('//a[@class="hidden-xs"]');
    I.click('//a[@class="hidden-xs"]');
    I.seeElement('//h1[contains(text(),"Oturum Aç")]');

    //enter credentials and attempt login
    I.fillField('#EMail', 'invalid');
    I.fillField('#Password', '123');
    I.click('//input[contains(@value, "Oturum Aç")]');
    
    //username is not displayed
    I.dontSee('John', '.dropdown-toggle');
});
