function stringChop(str, size) {
  // your code here
	 if (!str) {
        return [];
    }
    const chunkSize = Number(size);
    if (!chunkSize || chunkSize <= 0) {
        throw new Error("Chunk size must be a positive number");
    }
    
    const result = [];
    let i = 0;
     while (i < str.length) {
        result.push(str.slice(i, i + chunkSize));
        i += chunkSize;
    }
    
    return result;
}

// Do not change the code below
// const str = prompt("Enter String.");
// const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
