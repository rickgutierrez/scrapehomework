
var request = require("request");

var cheerio = require("cheerio");

// Making a request 
request("https://www.navytimes.com", function(error, response, html) {

  // Load the body of the HTML into cheerio
  var $ = cheerio.load(html);

  // Empty array to save our scraped data
  var result = [];

  // With cheerio, find each h4-tag with the class "headline-link"
  $("h3.headline-link").each(function(i, element) {

    // Save the text of the h4-tag as "title"
    var title = $(this).text();

    // Find the h4 tag's parent a-tag, and save it's href value as "link"
    var link = $(element).parent().attr("href");

    // For each h4-tag, make an object with data we scraped and push it to the result array
    result.push({
      title: title,
      link: link
    });

  });

  // After the program scans each h3.headline-link, log the result
  console.log(result);
});