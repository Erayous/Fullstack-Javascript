console.log("Before loop");

//Eksempel: VAR i denne sammenhæng bliver hoisted op. Derfor skal der bruges LET her som ikke bliver hoisted.

for (let i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(`value of i: ${i}`);
  }, 1000);
}

console.log("After Loop");
