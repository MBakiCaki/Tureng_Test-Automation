const { I } = inject();

module.exports = {

    fields:{
      validMail : 'nojitod746@sofrge.com',
      validPass : '1654966'
    },
    selects:{},
    buttons:{
      oturumAc : '//input[contains(@value, "Oturum Aç")]'
    },

    openLoginPage : function() {

      I.amOnPage('https://tureng.com/tr/turkce-ingilizce');
      I.waitForElement('//a[@class="hidden-xs"]');
      I.click('//a[@class="hidden-xs"]');
      I.seeElement('//h1[contains(text(),"Oturum Aç")]');
    },

    enterCredentials : function(mail, pass){
      
      I.fillField('#EMail', mail);
      I.fillField('#Password', pass);
    },
    
    
}
