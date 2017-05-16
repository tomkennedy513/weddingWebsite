import { WeddingWebsitePage } from './app.po';

describe('wedding-website App', () => {
  let page: WeddingWebsitePage;

  beforeEach(() => {
    page = new WeddingWebsitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
