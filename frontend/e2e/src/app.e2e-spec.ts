import { my_appPage } from './my_app.po';
import { browser, logging } from 'protractor';

describe('workspace-project my_app', () => {
  let page: my_appPage;

  beforeEach(() => {
    page = new my_appPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('frontend my_app is running!');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
