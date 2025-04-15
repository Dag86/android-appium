# Appium Android Testing

This project automates a native Android application using Appium and TypeScript. It is configured for test coverage, CI/CD integration, Allure reporting, and logging via ADB logcat.

---

## 📦 Project Structure
```
appium-android-testing/
├── app/                    # APKs to be tested
├── logs/                   # ADB logcat output
├── reports/                # Allure results and report output
├── screenshots/            # Screenshots from test failures
├── tests/                  # Test specs written in TypeScript
├── wdio.conf.ts            # WebdriverIO configuration file
├── package.json
└── tsconfig.json
```

---

## 🧪 Run Tests
### Run Tests Only
```bash
npm run test
```

### Run Tests With Logcat
```bash
npm run test:withlog
```
> This starts logcat and runs the test in parallel. On Windows, logcat will run in the background. If it hangs, run tests in a separate terminal after starting logcat.

---

## 🖥️ ADB Logcat
ADB logcat output is stored at:
```
logs/logcat.txt
```
You can view it in any text editor or tail it live:
```bash
tail -f logs/logcat.txt
```

---

## 📊 Allure Reports
### Generate and Open Report
```bash
npm run report
```
- Generates and opens the report from `reports/allure-results`.
- Screenshots from failed tests are automatically attached.

---

## 📱 Inspecting Elements on Emulator
To inspect elements:
1. Install Appium Inspector:
   - macOS:
     ```bash
     brew install --cask appium-inspector
     ```
   - Windows:
     - Download from: https://github.com/appium/appium-inspector/releases
     - Install the `.exe` manually

2. Launch Appium server:
   ```bash
   npx appium
   ```

3. Open Appium Inspector and set:
   - Remote Host: `localhost`
   - Port: `4723`
   - Desired Capabilities:
     ```json
     {
       "platformName": "Android",
       "deviceName": "emulator-5554",
       "automationName": "UiAutomator2",
       "app": "./app/ApiDemos-debug.apk"
     }
     ```

4. Click **Start Session** and inspect your emulator.

---

## ✅ Tech Stack
- WebdriverIO (v9)
- Appium (v2)
- TypeScript
- Mocha
- Allure Reporter
- ADB (Android Debug Bridge)

---

## 🧰 Useful Commands
```bash
npm run emulator:start     # Start Android Emulator
npm run logcat             # Start ADB logcat to logs/logcat.txt
npm run test               # Run test suite
npm run report             # Generate + Open Allure report
```

---

## 💡 Notes
- Make sure the emulator is already running before starting tests.
- The `screenshots/` folder is auto-created and stores screenshots on test failure.
- The `logs/` directory must exist beforehand for `logcat` output to work.

---

Happy Testing 🚀
