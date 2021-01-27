export function* basicGenerator() {
  yield 'Hello ';
  yield 'World'
}
export const basicCode = `
function* basicGenerator() {
  yield 'Hello ';
  yield 'World'
}

// Setting up
const generator = basicGenerator();

// When clicking "Next"
const iteration = generator.next();
const output = iteration.value;

`

export function* forGenerator() {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  yield 5;
  yield 6;
}
export const forCode = `
function* forGenerator() {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  yield 5;
  yield 6;
}

// Setting up
const generator = forGenerator();

// When clicking "Run"
for(const i of generator) {
  console.log(i);
}

`

export function* infiniteGenerator() {
  let n = 0;

  while(true) {
    yield n += 2;
  }
}
export const infiniteCode = `
export function* infiniteGenerator() {
  let n = 0;

  while(true) {
    yield n += 2;
  }
}

// Setting up
const generator = infiniteGenerator();

// When clicking "Next"
const iteration = generator.next();
const output = iteration.value;

`