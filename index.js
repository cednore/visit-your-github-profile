const puppeteer = require("puppeteer-core");

const profileUrl = "https://github.com/cednore";
const visitCount = parseInt(process.argv[2]) || 1;

(async () => {
  const browser = await puppeteer.launch({
    executablePath: "/usr/bin/google-chrome-stable",
  });
  const page = await browser.newPage();
  await page.goto(profileUrl);

  for (let i = 1; i < visitCount; i++) {
    await page.reload();
  }

  await browser.close();
})();
