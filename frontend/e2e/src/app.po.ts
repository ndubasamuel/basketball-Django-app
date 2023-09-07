import { browser, by, element } from 'protractor';

export class my_appPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  getTitleText(): Promise<string> {
    return element(by.css('my_app-root .content span')).getText() as Promise<string>;
  }
}
