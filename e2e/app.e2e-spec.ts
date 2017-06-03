import { WorkshopIndraPage } from './app.po';

describe('workshop-indra App', () => {
  let page: WorkshopIndraPage;

  beforeEach(() => {
    page = new WorkshopIndraPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
