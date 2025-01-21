export class PageDTO<T> {
  readonly data: T;
  readonly total: number;
  readonly page: number;
  readonly size: number;

  constructor(data: T, total: number, page: number, size: number) {
    this.data = data;
    this.total = total;
    this.page = page;
    this.size = size;
  }
}
