import { listeners as testMock } from './test.mock';
import { listeners as PersonMock } from './person.mock';

export const mocks = [
  ...testMock,
  ...PersonMock,
];
