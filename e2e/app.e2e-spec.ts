import { ExpenseLogPage } from './app.po';

describe('expense-log App', () => {
  let page: ExpenseLogPage;

  beforeEach(() => {
    page = new ExpenseLogPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
