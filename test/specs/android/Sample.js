// const { expect } = require('@wdio/globals')
// const LoginPage = require('../pageobjects/login.page')
// const SecurePage = require('../pageobjects/secure.page')

// describe('My Login application', () => {
//     it('should login with valid credentials', async () => {
//         await LoginPage.open()

//         await LoginPage.login('tomsmith', 'SuperSecretPassword!')
//         await expect(SecurePage.flashAlert).toBeExisting()
//         await expect(SecurePage.flashAlert).toHaveTextContaining(
//             'You logged into a secure area!')
//     })
// })
describe('test', () => {
    it('test case 1', async () => {
        await driver.pause(15000);
        // driver.close();
        // driver.quit();
        // driver.end();

        // await driver.quit();

        const preferenceElement = await $('~Preference');
        await preferenceElement.click();
    })
})

