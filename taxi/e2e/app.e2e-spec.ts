import { TaxiPage } from './app.po';

describe('taxi App', () => {
  let page: TaxiPage;

  beforeEach(() => {
    page = new TaxiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
