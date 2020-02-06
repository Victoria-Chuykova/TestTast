exports.config = {
    framework: 'jasmine',
    directConnect: true,
    seleniumAddress:'http://localhost:4444/wd/hub',
    specs: [
        './tests/*.js'
    ],
	capabilities: {
        "browserName": "chrome",
        "chromeOptions": {
            "args": [
                "--disable-gpu",
                "--window-size=1920х1080",
                '--start-maximized'
            ],
        }
    },
	
	onPrepare : function () {
        let chai;

        browser.waitForAngularEnabled(false);
        chai = require('chai');
        global.helpers = require('./helpers/helpers.js');
        global.expect = chai.expect;
    }
}