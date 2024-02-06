class ListScreen {
    get createListBtn() {
        return $('//*[@name="Create List"]');
    }

    get listNameInput() {
        return $('//*[@name="List Name"]');
    }

    get createButton() {
        return $('~Create');
    }

    listNameField(name) {
        return $(`~${name}`);
    }
}

module.exports = new ListScreen();