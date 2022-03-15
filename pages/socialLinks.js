const { I } = inject();

module.exports = {

  buttons:{

    facebook : '//area[@alt ="Tureng Facebook"]',
    instagram : '//area[@alt ="Tureng Instagram"]',
    twitter : '//area[@alt ="Tureng Twitter"]',
    youtube : '//area[@alt ="Tureng Youtube"]'
  },

  verifyLink : function(socialMedia, urlContains){

    I.waitForElement('#sociallinks');
    I.click(socialMedia);
    I.wait(3);
    I.switchToNextTab(); 
    I.seeInCurrentUrl(urlContains);
    I.closeCurrentTab();
  }
}
