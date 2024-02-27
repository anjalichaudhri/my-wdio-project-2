const {config} = require("./wdio.shared.conf");

config.port = 4723;

config.specs = [
    './test/specs/ios/**/*.js'
];

config.capabilities = [{
    // capabilities for local Appium web tests on an Android Emulator
    'appium:platformName': 'ios',
    // browserName: 'Chrome',
    'appium:deviceName': 'iPhone 11',
    'appium:platformVersion': '11.0',
    'appium:automationName': 'XCUITest',
    'appium:app': path.join(process.cwd(), 'app/ios/ApiDemos-debug.ipa')
}];

// services: ['appium'], //changed
config.services = ['appium'],
config.appium = {
    command: 'appium',
},

exports.config = config;