const pageScraper = require('./pageScraper');
async function scrapeAll(browserInstance){
	let browser;
	try{
		browser = await browserInstance;
		let scrapedData = {};
		// Call the scraper for different set of books to be scraped
		scrapedData['Travel'] = await pageScraper.scraper(browser, 'Travel');	
		scrapedData['Fiction'] = await pageScraper.scraper(browser, 'Fiction');
		scrapedData['HistoricalFiction'] = await pageScraper.scraper(browser, 'Historical Fiction');
		await browser.close();
		console.log(scrapedData);
	}
	catch(err){
		console.log("Could not resolve the browser instance => ", err);
	}
}

module.exports = (browserInstance) => scrapeAll(browserInstance)