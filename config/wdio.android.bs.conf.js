require('dotenv').config();
const {config} = require("./wdio.shared.conf");

// config.user = "testcoach_q13wOr";
// config.key = "e9khDj7necyrUq86oJzP";
config.user = process.env.BROWSERSTACK_USER;
config.key = process.env.BROWSERSTACK_KEY;

config.specs = [
    '../test/specs/android/**/*.js'
];

// config.capabilities = [{
//     // capabilities for local Appium web tests on an Android Emulator
//     "platformName": "Android",
//     // browserName: 'Chrome',
//     // 'appium:deviceName': 'nightwatch-android-11',
//     "deviceName": "Samsung Galaxy Note 20",
//     // 'appium:platformVersion': '11.0',
//     'platformVersion': '10.0',
//     'appium:automationName': 'UiAutomator2',
//     'appium:app': "bs://2490cb280dbf8a600ee4da6044b91b3877acf5db"
// }];

config.capabilities =  [{
    'bstack:options' : {
        "platformVersion": "10.0",
        "deviceName" : "Samsung Galaxy S20",    
    },
    'appium:automationName': 'UiAutomator2',
    'appium:app': "bs://2490cb280dbf8a600ee4da6044b91b3877acf5db",
    "platformName" : "Android"
}];

// services: ['appium'], //changed
config.services = ['browserstack'],

exports.config = config;