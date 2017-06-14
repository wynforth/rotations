import { RotationsPage } from './app.po';

describe('rotations App', () => {
  let page: RotationsPage;

  beforeEach(() => {
    page = new RotationsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
