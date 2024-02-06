const ListScreen = require('../../../screenObjects/ios/list.screen');
describe("find iOS Elements", () => {
    it("Create TO DO List", async ()=> {
        await ListScreen.createListBtn.click();
        await ListScreen.listNameInput.addValue("test list item 1");
        await ListScreen.createButton.click();

        await expect(await ListScreen.listNameField("test list item 1")).toBeExisting();
    });

})