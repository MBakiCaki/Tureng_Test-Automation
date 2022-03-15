Feature('socialLinks');

Scenario('Test Social Media Links', async ({ I, socialLinksPage }) => {

   // Open tureng main page
    I.amOnPage('https://tureng.com/tr/turkce-ingilizce');
    
    socialLinksPage.verifyLink(socialLinksPage.buttons.facebook, 'facebook.com')
    I.wait(3);
    
    socialLinksPage.verifyLink(socialLinksPage.buttons.instagram, 'instagram.com')
    I.wait(3);
    
    socialLinksPage.verifyLink(socialLinksPage.buttons.twitter, 'twitter.com')
    I.wait(3);

    socialLinksPage.verifyLink(socialLinksPage.buttons.youtube, 'youtube.com')

});
