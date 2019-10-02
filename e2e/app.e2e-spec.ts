import { AngCrudPage } from './app.po';

describe('ang-crud App', () => {
  let page: AngCrudPage;

  beforeEach(() => {
    page = new AngCrudPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
