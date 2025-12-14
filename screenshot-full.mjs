import puppeteer from 'puppeteer';

const browser = await puppeteer.launch({ headless: true });
const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 2 });
await page.goto('http://localhost:3000', { waitUntil: 'networkidle0' });
await page.screenshot({ path: 'hero.png' });

await page.evaluate(() => document.getElementById('about')?.scrollIntoView());
await new Promise(r => setTimeout(r, 300));
await page.screenshot({ path: 'about.png' });

await page.evaluate(() => document.getElementById('certifications')?.scrollIntoView());
await new Promise(r => setTimeout(r, 300));
await page.screenshot({ path: 'certs.png' });

await page.evaluate(() => document.getElementById('skills')?.scrollIntoView());
await new Promise(r => setTimeout(r, 300));
await page.screenshot({ path: 'skills.png' });

await browser.close();
console.log('Done');
