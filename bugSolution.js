function foo(a, b) {
  // Handle null or undefined values using optional chaining and nullish coalescing
  a = a ?? 0; // a ?? 0 will return a if a is not null or undefined, otherwise 0
  b = b ?? 0; // b ?? 0 will return b if b is not null or undefined, otherwise 0

  return a + b;
}

console.log(foo(null, 5)); // Output: 5
console.log(foo(5, null)); // Output: 5
console.log(foo(5, 5)); // Output: 10
console.log(foo(undefined, 5)); // Output: 5
console.log(foo(5, undefined)); // Output: 5