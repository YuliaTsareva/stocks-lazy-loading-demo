import { StocksLazyLoadingDemoPage } from './app.po';

describe('stocks-lazy-loading-demo App', function() {
  let page: StocksLazyLoadingDemoPage;

  beforeEach(() => {
    page = new StocksLazyLoadingDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
