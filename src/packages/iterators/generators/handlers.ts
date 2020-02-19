export const basicHandler = (generatorRef, state, setter) => () => {
  const iteration = generatorRef.current.next();
  const output = iteration.value;
  const isDone = iteration.done;
  // If generator is not done, concatenate and print
  if(!isDone) {
    setter(`${state} ${output}`);
  }
}

export const forHandler = (generatorRef, state, setter) => () => {
  const iterator = generatorRef.current;
  for(const i of iterator) {
    console.log(i);
    setter(`${state} ${i}`);
  }
}

export const infiniteHandler = (generatorRef, state, setter) => () => {
  const iteration = generatorRef.current.next();
  const output = iteration.value;
  setter(`${state} ${output}`);
}