import allure from '@wdio/allure-reporter';

describe('ApiDemos Real UI Tests (With Allure + Smart Waits)', () => {
  it('should navigate to Views and tap it', async () => {
    allure.startStep('Locate Views element');
    const views = await $('~Views');
    await views.waitForDisplayed({ timeout: 5000 });
    allure.endStep();

    allure.startStep('Take screenshot before clicking Views');
    await browser.saveScreenshot('./screenshots/views-screen.png');
    allure.endStep();

    allure.startStep('Click Views');
    await views.click();
    allure.endStep();

    const title = await $('android.widget.TextView');
    await title.waitForDisplayed({ timeout: 3000 });
    const text = await title.getText();
    allure.addStep(`Screen title: ${text}`);
    expect(text).toContain('Views');
  });

  it('should open Controls > Light Theme', async () => {
    const views = await $('~Views');
    await views.waitForDisplayed({ timeout: 5000 });
    await views.click();

    const controls = await $('~Controls');
    await controls.waitForDisplayed({ timeout: 5000 });
    await controls.click();

    const lightTheme = await $('~1. Light Theme');
    await lightTheme.waitForDisplayed({ timeout: 5000 });
    await browser.saveScreenshot('./screenshots/light-theme.png');
    await lightTheme.click();

    const textField = await $('android.widget.EditText');
    await textField.waitForDisplayed({ timeout: 5000 });
    expect(await textField.isDisplayed()).toBe(true);
  });

  it('should enter text into a text field', async () => {
    const input = await $('android.widget.EditText');
    await input.waitForDisplayed({ timeout: 5000 });

    const text = 'Hello Appium!';
    allure.startStep(`Set value: ${text}`);
    await input.setValue(text);
    allure.endStep();

    await browser.saveScreenshot('./screenshots/text-entered.png');

    const value = await input.getText();
    expect(value).toBe(text);
  });

  it('should toggle checkbox and verify it is checked', async () => {
    const checkbox = await $('android.widget.CheckBox');
    await checkbox.waitForDisplayed({ timeout: 5000 });

    const isCheckedBefore = await checkbox.getAttribute('checked');
    await checkbox.click();
    await browser.saveScreenshot('./screenshots/checkbox-toggled.png');
    const isCheckedAfter = await checkbox.getAttribute('checked');

    allure.addStep(`Checkbox toggled: before=${isCheckedBefore}, after=${isCheckedAfter}`);
    expect(isCheckedBefore).not.toBe(isCheckedAfter);
  });

  it('should select a radio button', async () => {
    const radio = await $('android.widget.RadioButton');
    await radio.waitForDisplayed({ timeout: 5000 });

    await radio.click();
    await browser.saveScreenshot('./screenshots/radio-selected.png');

    const isSelected = await radio.getAttribute('checked');
    allure.addStep(`Radio button selected: ${isSelected}`);
    expect(isSelected).toBe('true');
  });
});
