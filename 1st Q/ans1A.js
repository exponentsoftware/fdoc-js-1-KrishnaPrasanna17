let para =  'I love teaching. If you do not love teaching what else can you love. I love JavaScript if you do not love something which can give life to your application what else can you love.';

function countWords(para,word1, word2)
    {
        // split the string by spaces in a
        let temp_array = para.split(" ");
    let word1_count = 0;
     let   word2_count = 0;
   
    // search for pattern in a
    for (let i of temp_array) {
        if (word1.toLowerCase() == i.toLowerCase()) {
          word1_count++;
        }
        if (word2.toLowerCase() == i.toLowerCase()) {
          word2_count++;
        }
      }
      if (word1_count >= word2_count) {
        return "The word " + word1 + " more frequently occurred than word " + word2;
      } else {
        return "The word " + word2 + " more frequently occurred than word" + word1;
      }
    }
    
    console.log(countWords(para, "love", "you"));