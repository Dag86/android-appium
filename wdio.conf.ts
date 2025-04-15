export const config = {
  runner: 'local',
  port: 4723,
  specs: ['./tests/**/*.ts'],
  exclude: [],
  maxInstances: 1,

  capabilities: [
    {
      platformName: 'Android',
      'appium:automationName': 'UiAutomator2',
      'appium:deviceName': 'emulator-5554',
      'appium:app': './app/ApiDemos-debug.apk',
      'appium:appWaitActivity': '*',
      'appium:noReset': true
    }
  ],

  logLevel: 'info',
  bail: 0,
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,

  services: ['appium'],
  framework: 'mocha',

  reporters: [
    'spec',
    ['allure', {
      outputDir: 'reports/allure-results',
      disableWebdriverStepsReporting: false,
      disableWebdriverScreenshotsReporting: false
    }]
  ],

  mochaOpts: {
    ui: 'bdd',
    timeout: 60000
  },

  /**
   * Screenshot failed tests
   */
  afterTest: async function (test, context, { passed }) {
    if (!passed) {
      const name = test.title.replace(/\s+/g, '_').replace(/[^\w]/g, '');
      await browser.saveScreenshot(`./screenshots/${name}.png`);
    }
  }
};
