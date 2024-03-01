const path = require('path');
const {config} = require("./wdio.shared.conf");

config.port = 4723;
config.runner = 'local',

config.specs = [
    '../test/specs/android/**/*.js'
];

config.capabilities = [{
    // capabilities for local Appium web tests on an Android Emulator
    'appium:platformName': 'Android',
    // browserName: 'Chrome',
    'appium:deviceName': 'nightwatch-android-11',
    'appium:platformVersion': '11.0',
    'appium:automationName': 'UiAutomator2',
    'appium:app': path.join(process.cwd(), 'app/android/ApiDemos-debug.apk')
}];

// services: ['appium'], //changed
config.services = ['appium'],
config.appium = {
    command: 'appium',
},

exports.config = config;