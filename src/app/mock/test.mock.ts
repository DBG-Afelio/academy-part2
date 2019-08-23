import { HttpResponse, HttpRequest, HttpErrorResponse } from '@angular/common/http';

const getTest = (request: HttpRequest<any>): HttpResponse<any> => {
    return new HttpResponse({
        status: 200,
        body: {
          message: 'the mocks stand up'
        }
    });
};

const getTestError = (request: HttpRequest<any>): HttpErrorResponse => {
  throw new HttpErrorResponse({
      status: 404,
      error : {message: 'error'}
  });
};

export const listeners = [
    { url: 'api/test/error', methods: 'GET', name: 'getTest', response: getTestError },
    { url: 'api/test', methods: 'GET', name: 'getTest', response: getTest }
];
