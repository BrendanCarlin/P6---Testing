#Udacity Project 6
##Feed-Reader Testing

##Project Requirements

This project requires the Jasmine framework to test functionality of a feed-reader provided by Udacity.  This project required that I write test suites and tests in the feedreader.js document to ensure the feed-reader passes the following expectations:

###'RSS Feeds' test suite
* Write a test that loops through each feed in the `allFeeds` object and ensures it has a URL defined and that the URL is not empty.
* Write a test that loops through each feed in the `allFeeds` object and ensures it has a name defined and that the name is not empty.

###'The menu' test suite
* Write a new test suite named `"The menu"`.
* Write a test that ensures the menu element is hidden by default.
* Write a test that ensures the menu changes visibility when the menu icon is clicked. This test should have two expectations: does the menu display when clicked and does it hide when clicked again.

###'Initial Entries' test suite
* Write a test suite named `"Initial Entries"`.
* Write a test that ensures when the `loadFeed` function is called and completes its work, there is at least a single `.entry` element within the `.feed` container.

###'New Feed Selection'
* Write a test suite named `"New Feed Selection"`.
* Write a test that ensures when a new feed is loaded by the `loadFeed` function that the content actually changes.

###Additional Requirements
* No test should be dependent on the results of another.
* Callbacks should be used to ensure that feeds are loaded before they are tested.
* Implement error handling for undefined variables and out-of-bound array access.# udacity-FEND-P6-feedreader_testing
