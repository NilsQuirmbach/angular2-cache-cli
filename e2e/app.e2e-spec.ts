import { Angular2CacheCliPage } from './app.po';

describe('angular2-cache-cli App', function() {
  let page: Angular2CacheCliPage;

  beforeEach(() => {
    page = new Angular2CacheCliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
