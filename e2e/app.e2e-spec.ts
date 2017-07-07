import { V3Page } from './app.po';

describe('v3 App', () => {
  let page: V3Page;

  beforeEach(() => {
    page = new V3Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
