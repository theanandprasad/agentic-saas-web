/**
 * AI SaaS Agents Showcase Website Testing Script
 * 
 * This script helps test if all pages of the website load correctly.
 * It uses Puppeteer to open each page and check for basic elements.
 * 
 * To use this script:
 * 1. Make sure you have Node.js installed
 * 2. Run `npm install puppeteer`
 * 3. Run `node test-website.js`
 */

const puppeteer = require('puppeteer');

// Configuration
const baseUrl = 'http://localhost:3000'; // Change this to your development server URL
const pagesToTest = [
  { path: '/', name: 'Home Page', selector: '.hero' },
  { path: '/agents', name: 'Agents Page', selector: 'h1' },
  { path: '/use-cases', name: 'Use Cases Page', selector: 'h1' },
  { path: '/pricing', name: 'Pricing Page', selector: 'h1' },
  { path: '/about', name: 'About Page', selector: 'h1' },
  { path: '/contact', name: 'Contact Page', selector: 'h1' },
  { path: '/faq', name: 'FAQ Page', selector: 'h1' },
  { path: '/blog', name: 'Blog Page', selector: 'h1' },
  { path: '/demo', name: 'Demo Request Page', selector: 'h1' },
  { path: '/signup', name: 'Signup Page', selector: 'h1' },
  { path: '/login', name: 'Login Page', selector: 'h1' },
  { path: '/forgot-password', name: 'Forgot Password Page', selector: 'h1' },
];

// Test results
const results = {
  passed: 0,
  failed: 0,
  details: []
};

async function testPages() {
  console.log('Starting website testing...');
  console.log(`Base URL: ${baseUrl}`);
  console.log('-----------------------------------');

  const browser = await puppeteer.launch({ headless: 'new' });
  
  for (const page of pagesToTest) {
    const url = `${baseUrl}${page.path}`;
    console.log(`Testing ${page.name} at ${url}...`);
    
    try {
      const tab = await browser.newPage();
      await tab.goto(url, { waitUntil: 'networkidle2', timeout: 30000 });
      
      // Check if the page loaded by looking for a specific selector
      const element = await tab.$(page.selector);
      
      if (element) {
        console.log(`✅ ${page.name} loaded successfully`);
        results.passed++;
        results.details.push({
          page: page.name,
          url,
          status: 'PASS',
          message: 'Page loaded successfully'
        });
      } else {
        console.log(`❌ ${page.name} failed to load properly (selector not found: ${page.selector})`);
        results.failed++;
        results.details.push({
          page: page.name,
          url,
          status: 'FAIL',
          message: `Selector not found: ${page.selector}`
        });
      }
      
      await tab.close();
    } catch (error) {
      console.log(`❌ ${page.name} error: ${error.message}`);
      results.failed++;
      results.details.push({
        page: page.name,
        url,
        status: 'ERROR',
        message: error.message
      });
    }
  }
  
  await browser.close();
  
  // Print summary
  console.log('-----------------------------------');
  console.log('Testing completed!');
  console.log(`Passed: ${results.passed}/${pagesToTest.length}`);
  console.log(`Failed: ${results.failed}/${pagesToTest.length}`);
  
  if (results.failed > 0) {
    console.log('-----------------------------------');
    console.log('Failed tests:');
    results.details
      .filter(result => result.status !== 'PASS')
      .forEach(result => {
        console.log(`- ${result.page}: ${result.message}`);
      });
  }
}

testPages().catch(error => {
  console.error('Test script error:', error);
  process.exit(1);
}); 