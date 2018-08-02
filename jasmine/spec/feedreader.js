$(function() {
  describe('RSS Feeds', function() { // 'parent' suite

    it('are defined.', function() {
      expect(allFeeds).toBeDefined(); // Ensure feeds is defined
      expect(allFeeds.length).not.toBe(0); // Checks to see if feed is empty
    });

    it('have URL defined and URL is not empty.', function() {
      allFeeds.forEach(function(feed) {
        expect(feed.url).toBeDefined(); // Ensure URL defined
        expect(feed.length).not.toBe(0); // Ensure feed not empty
      })
    })

    it('have name defined and name is not empty.', function() {
      allFeeds.forEach(function(feed) {
        expect(feed.name).toBeDefined(); // Ensure name defined
        expect(feed.name).not.toBe(''); // Ensure feed isn't empty string

      });
    });
  });

  describe('The menu', function() { // Suite for the menu

    it('element is hidden by default.', function() { // Ensure menu hidden by default
      expect($('body').hasClass('menu-hidden')).toBe(true);
    });

    it('visibility changes when menu icon clicked.', function() { // Click on menu to make sure class applied
      const checkVis = $('.menu-icon-link'); // Menu icon element
      checkVis.click(); // Click on element
      expect($('body').hasClass('menu-hidden')).toBe(false); // Check class
      checkVis.click(); // Click on element
      expect($('body').hasClass('menu-hidden')).toBe(true); // Check class
    });

  });

  describe('Initial Entries', function() { // Suite for 'Initial Entries'

    beforeEach(function(e) { // Call loadFeed before each in suite
      loadFeed(0, e);
    })

    it('"loadFeed()" is called and completed task, a single element is contained in the .feed container.', function(e) {
      const entEl = $('.entry'); // Entry element
      expect(entEl.length).toBeGreaterThan(0); // Element not empty
      e();
    })
  })

  describe('New Feed Selection', function() { // Suite for the new feed section
    let currentURL, nextURL; // Define vars

    beforeEach(function(e) {
      currentURL = $('.entry-link').attr('href'); // href of currentURL
      loadFeed(1, e); // Call loadFeed();
    })

    it('"loadFeed" function loaded a new feed and the content changes.', function(e) {
      nextURL = $('.entry-link').attr('href'); // href of next URL
      expect(nextURL).not.toBe(currentURL); // Compare URL's
      e();
    });
  });
}());