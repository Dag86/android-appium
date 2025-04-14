describe('Android App Launch', () => {
  it('should launch app successfully', async () => {
    const currentActivity = await driver.getCurrentActivity();
    console.log('Current App Activity:', currentActivity);
    expect(currentActivity).toBeTruthy();
  });
});
