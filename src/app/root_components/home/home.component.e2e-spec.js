describe('Home', function () {

  beforeEach(function () {
    browser.get('/');
  });

  it('should have <hsp-home>', function () {
    var home = element(by.css('app hsp-home'));
    expect(home.isPresent()).toEqual(true);
    expect(home.getText()).toEqual("Home Works!");
  });

});
