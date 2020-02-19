export function* basicGenerator() {
  yield 'Hello ';
  yield 'World'
}

export function* forGenerator() {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  yield 5;
  yield 6;
}

export function* infiniteGenerator() {
  let n = 0;

  while(true) {
    yield n += 2;
  }
}