function loopingTriangle() {
    pattern=""
    for (let i = 1; i <= 7; i++) {
        for (let j = 0; j < i; j++) {
          pattern += "#";
        }
        pattern += "\n";
      }
      return pattern
}
 console.log(loopingTriangle()) 