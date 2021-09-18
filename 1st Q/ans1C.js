function countWords(para){
    var count = 0;
   let words = para.split(" "); 
     for (let word of words){
        // inner loop -- do the count
        if (word.length > 1){
           count += 1; 
        }
     }
     return count;
    }
    const para = `I am a teacher and I love teaching. There is nothing as more rewarding as educating and empowering people. I found teaching more interesting than any other jobs. Does this motivate you to be a teacher?`
    console.log(countWords(para));
