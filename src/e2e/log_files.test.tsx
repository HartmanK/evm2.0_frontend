import React from 'react';
import puppeteer from 'puppeteer';

const iPhone = puppeteer.devices['iPhone 6'];
const timeout = process.env.SLOWMO ? 30000 : 10000;
describe('Test log files page', () => {
  test('test mobile version', async () => {
    let browser = await puppeteer.launch({
      headless: false,
    });
    const page = await browser.newPage();
    await page.emulate(iPhone);
    await page.goto('http://localhost:3000/logs');
    // other actions...
  });

  test('capture screenshot of experiment_run page', async () => {
    let browser = await puppeteer.launch({
      headless: false,
    });
    const page = await browser.newPage();
    await page.goto('http://localhost:3000/logs');
    await page.screenshot({ path: 'log_file_page.png' });
  });

  // test('download file',async () => {
  //     let browser = await puppeteer.launch({
  //       headless: false,
  //     });
  //     const page = await browser.newPage();
  //     await page.goto('http://localhost:3000/logs');
  //     await page.screenshot({path: 'log_file_page.png'});
  //     await browser.close();
  //   })
});
