describe("find iOS Elements", () => {
    it("find element by accessibility id", async ()=> {
        await $('~Alert Views').click();
        await $('~Simple').click();
        await expect(await driver.getAlertText()).toContain('A Short Title Is Best');
    });

    it("find element by xpath", async ()=> {
        //xpath - tagname[@attributeName=value]
        // attribute name can be name, value, label
        await $("//XCUIElementTypeStaticText[@name='Alert Views']").click();
        await $("//XCUIElementTypeStaticText[@label='Simple']").click();
        // tag name can be replaced with *
        // await $("//*[@name='Alert Views']").click();
        // await $("//*[@label='Simple']").click();

        //accessibility id
        // await $('~Simple').click();
        await expect(await driver.getAlertText()).toContain('A Short Title Is Best');
    });

    it("find element by class chain", async ()=> {
        // const alertText = "**/XCUIElementTypeStaticText[`name='Alert Views'`]";
        const alertText = "**/XCUIElementTypeStaticText[`name CONTAINS 'Alert'`]";
        // const alertText = "**/XCUIElementTypeStaticText[`label='Alert Views'`]";
        // const alertText = "**/XCUIElementTypeStaticText[`value='Alert Views'`]";
        await $(`-ios class chain:${alertText}`).click();
        await $('~Simple').click();
        await expect(await driver.getAlertText()).toContain('A Short Title Is Best');
    });

    it("find element by predicate string", async ()=> {
        const alertText = "name == 'Alert Views'";
        // const alertText = "label == 'Alert Views'";
        // const alertText = "value == 'Alert Views'";
        await $(`-ios predicate string:${alertText}`).click();
        await $('~Simple').click();
        await expect(await driver.getAlertText()).toContain('A Short Title Is Best');
    });

    it("Enter text in input field", async ()=> {
        const alertText = "name == 'Alert Views'";
        // const alertText = "label == 'Alert Views'";
        // const alertText = "value == 'Alert Views'";
        await $(`-ios predicate string:${alertText}`).click();
        await $('~Search').click();
        await $('~Default').click();
        await $("//XCUIElementTypeSearchField").addValue('Test Input');
        await expect($("//XCUIElementTypeSearchField")).toHaveAttr('value');
        await $('~Clear Text').click();
        await expect($("//XCUIElementTypeSearchField")).not.toHaveAttr('value');
    });

    it.only("Work with dialog/ Alert box", async ()=> {

        await $('~Alert Views').click();
        await $('~Okay / Cancel').click();

        // click by accessiblity id element finding
        await $('~OK').click();

        //accept ro dismiss alert 
        // const alertText = await driver.getAlertText();
        // await driver.acceptAlert();

        await driver.dismissAlert();

        await expect($("~OK")).not.toExist('value');
    });

    it("Work with vertical scrolling", async ()=> {
        const elementIdCheck = await $("~Red Color Component Value");
        await driver.execute('mobil:scroll', {element: elementIdCheck.elementId, direction: 'down'})
        await driver.execute('mobil:scroll', {direction: 'up'})
    });
})
