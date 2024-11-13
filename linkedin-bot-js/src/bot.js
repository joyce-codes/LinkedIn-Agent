require('dotenv').config();  // This loads the .env file
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;  // Access the API key

const puppeteer = require('puppeteer');
require('dotenv').config();

const EMAIL = process.env.LINKEDIN_EMAIL;
const PASSWORD = process.env.LINKEDIN_PASSWORD;

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  // Go to LinkedIn login page
  await page.goto('https://www.linkedin.com/login');

  // Log in to LinkedIn
  await page.type('#username', EMAIL);
  await page.type('#password', PASSWORD);
  await page.click('[type="submit"]');

  await page.waitForNavigation(); // Wait for login to complete

  console.log("Logged in successfully!");


  // Browser closes when done
  await browser.close();
})();


//Function to scrape LinkedIn profile data
async function scrapeProfile(page, profileUrl) {
    await page.goto(profileUrl);
    await page.waitForSelector('h1'); // Wait for the profile name to load
  
    // Extract profile data
    const name = await page.$eval('h1', el => el.textContent.trim());
    console.log("Name:", name);
  
    // Add more selectors to extract job titles, connections, etc. later
  }
  
  (async () => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
  
    await page.goto('https://www.linkedin.com/login');
    await page.type('#username', EMAIL);
    await page.type('#password', PASSWORD);
    await page.click('[type="submit"]');
    await page.waitForNavigation();
  
    // Call scrapeProfile with a sample LinkedIn profile URL
    const profileUrl = 'https://www.linkedin.com/in/sample-profile/';
    await scrapeProfile(page, profileUrl);
  
    await browser.close();
  })();
  