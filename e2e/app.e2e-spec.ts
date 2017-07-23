import { SearchSortPaginationAngular2Page } from './app.po';

describe('search-sort-pagination-angular2 App', () => {
  let page: SearchSortPaginationAngular2Page;

  beforeEach(() => {
    page = new SearchSortPaginationAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
