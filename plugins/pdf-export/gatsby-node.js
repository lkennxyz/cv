const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');
const express = require('express');

exports.onCreatePage = ({ page, actions }, { path }) => {
  const { createPage, deletePage } = actions;
  const pagePath = page.path;
  if (path === pagePath) {
    deletePage(page);
    createPage({
      ...page,
      context: {
        downloadFile: `Liam Kennedy - CV.pdf`,
      },
    });
  }
};
// Only runs during Gatsby Build process (not dev)
exports.onPostBuild = async (options, { path }) => {
  console.log('\nPost Build - generating pdfs\n');
  await printPDF(path);
};
async function printPDF(pageName) {
  const app = express();
  app.use(express.static('public'));
  app.listen(process.env.PORT || 4040);
  const browser = await puppeteer.launch({ headless: true, defaultViewport: { width: 1000, height: 1414, isMobile: true } });
  const page = await browser.newPage();
  const htmlPath = path.join(
    __dirname,
    '..',
    '..',
    'public',
    pageName,
    'index.html',
  );
  const contentHtml = fs.readFileSync(htmlPath, 'utf8');
  await page.goto(`http://localhost:${process.env.PORT || '4040'}`, { waitUntil: 'networkidle2'});
  const result = await page.evaluate(() => window.innerWidth);
  const result2 = await page.evaluate(() => window.outerWidth);
  console.log(`inner: ${result}, outer: ${result2}, view: ${page.viewport().width}`);
  await page.addStyleTag({path: path.join(
    __dirname,
    '..',
    '..',
    'src',
    'styles',
    'pdfMode.css'
  )});
  await page.emulateMedia('screen');
  await page.pdf({
    format: 'A4',
    path: path.join(
      __dirname,
      '..',
      '..',
      'public',
      `Liam Kennedy - CV.pdf`,
    ),
  });
  await browser.close();
  return;
}