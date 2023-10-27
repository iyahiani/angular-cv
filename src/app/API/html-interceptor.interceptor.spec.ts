import { TestBed } from '@angular/core/testing';

import { HtmlInterceptorInterceptor } from './html-interceptor.interceptor';

describe('HtmlInterceptorInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      HtmlInterceptorInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: HtmlInterceptorInterceptor = TestBed.inject(HtmlInterceptorInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
