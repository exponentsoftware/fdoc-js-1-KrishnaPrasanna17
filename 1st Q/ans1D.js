function countWords(sentence){
    let wordset = sentence.split(" ")
    for(let w1 of wordset){
      let last = w1[w1.length-1]
      if(last == "."){
        let nw = w1.split(".")
        wordset[wordset.indexOf(w1)]= nw[0]
      }
      if(last == "?"){
        let nw = w1.split("?")
        wordset[wordset.indexOf(w1)]= nw[0]
      }
    }
    let count =0;
    let ar1=[];
    for(let word1 of wordset){
      let ct =0;
      for(let word2 of wordset){
        if(word1.toLowerCase() == word2.toLowerCase()){
          ct++
        }
      }
      if(count == 1){
        count++
      }else{
        if(ar1.includes(word1)==false){
          ar1.push(word1)
        }
      }
    }
    count = count+ar1.length
    return count
  }

  const sentence =  `I am a teacher and I love teaching. There is nothing as more rewarding as educating and empowering people. I found teaching more interesting than any other jobs. Does this motivate you to be a teacher?`
  console.log(countWords(sentence)); 
