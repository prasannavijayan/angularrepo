import { SimpleWebNGPage } from './app.po';

describe('simple-web-ng App', () => {
  let page: SimpleWebNGPage;

  beforeEach(() => {
    page = new SimpleWebNGPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
