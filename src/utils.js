export const decrementCount = (count, setCount) => {
  if (count > 0) {
    setCount(count - 1);
  }
};