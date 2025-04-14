describe('ApiDemos Real UI Tests', () => {
  it('should navigate to Views and tap it', async () => {
    const views = await $('~Views');
    await views.click();
    const title = await $('android.widget.TextView');
    expect(await title.getText()).toContain('Views');
  });

  it('should open Controls > Light Theme', async () => {
    await $('~Views').click();
    await $('~Controls').click();
    await $('~1. Light Theme').click();
    const textField = await $('android.widget.EditText');
    expect(await textField.isDisplayed()).toBe(true);
  });

  it('should enter text into a text field', async () => {
    const input = await $('android.widget.EditText');
    await input.setValue('Hello Appium!');
    expect(await input.getText()).toBe('Hello Appium!');
  });

  it('should toggle checkbox and verify it is checked', async () => {
    const checkbox = await $('android.widget.CheckBox');
    const isCheckedBefore = await checkbox.getAttribute('checked');
    await checkbox.click();
    const isCheckedAfter = await checkbox.getAttribute('checked');
    expect(isCheckedBefore).not.toBe(isCheckedAfter);
  });

  it('should select a radio button', async () => {
    const radio = await $('android.widget.RadioButton');
    await radio.click();
    const isSelected = await radio.getAttribute('checked');
    expect(isSelected).toBe('true');
  });
});
