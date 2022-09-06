const puppeteer = require("puppeteer-core");

const profileUrl = "https://gpvc.arturio.dev/cednore";
const visitCount = parseInt(process.argv[2]) || 1;

(async () => {
  const browser = await puppeteer.launch({
    executablePath: "/usr/bin/google-chrome-stable",
  });
  const page = await browser.newPage();
  await page.goto(profileUrl);

  for (let i = 1; i < visitCount; i++) {
    console.log("🚀 ~ file: index.js ~ line 14 ~ i", i);
    await page.reload();
  }

  await browser.close();
})();
