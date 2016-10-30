/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('have defined URLs which are not empty', function() {

            allFeeds.forEach(function(obj) {
                expect(obj.url).toBeDefined();
                expect(obj.url).not.toBe(null);
            })
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('have names defined which are not empty', function() {
            allFeeds.forEach(function(obj) {
                expect(obj.name).toBeDefined();
                expect(obj.name).not.toBe(null);
            })
        });
    });


    /* TODO: Write a new test suite named "The menu" */
    describe('The menu', function() {


        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */

         it('is hidden by default', function() {

            //verify menu has appropriate CSS class
            expect( $('body').hasClass('menu-hidden') ).toBe(true);

            //validate slide-menu's width does not exceed it's negative x position
            var menu = $('.slide-menu');
            var position = menu.position();
            var width = menu.width();
            expect(position.left + width).toBeLessThan(0);
         });

         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
        
        it('changes visibility when clicked', function() {

            //grab the menu icon
            var menuIcon = $('.menu-icon-link');

            //simulate click event and test whether menu-hidden has been removed from class
            menuIcon.click();
            expect( $('body').hasClass('menu-hidden') ).toBe(false);

            //simulate second click event and test whether menu-hidden returns
            menuIcon.click();
            expect( $('body').hasClass('menu-hidden') ).toBe(true);        
        });
    });


    /* TODO: Write a new test suite named "Initial Entries" */
    describe('Initial Entries', function() {

        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */

        //wait for async loadFeed call to complete before executing test
        beforeEach(function(done) {
            loadFeed(0, function() {
                done();
            });
        });


        it('has at least a single entry within the feed container', function() {
            expect( $('.feed .entry').length ).toBeGreaterThan(0);
        });
    });


    /* TODO: Write a new test suite named "New Feed Selection" */
        
    describe("New Feed Selection", function() {

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
         
        //create two global variables
        var title, title1;

        //wait for feed to load, then...
        beforeEach(function(done) {
            //capture the article title from the first feed
            title = $('.entry').html();
            
            //call the CSS Tricks feed
            loadFeed(1, function() {
                //capture the article title from the second feed
                title1 = $('.entry').html();
                //call done
                done();
            });
        });

        //create our expectations
        it('updates content when a new feed is loaded', function() {
           
            //title is defined and not empty
            expect( title ).toBeDefined();
            expect( title ).not.toBe(null);

            //title1 is defined and not empty
            expect( title1 ).toBeDefined();
            expect( title1 ).not.toBe(null);

            //title and title1 are not the same
            expect( title ).not.toBe( title1 );
        });
    });
}());