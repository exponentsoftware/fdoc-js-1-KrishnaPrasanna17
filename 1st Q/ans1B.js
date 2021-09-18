let paragraph = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`;

function cleanText(paragraph)
{
    let sentence = " ";
    for (let i of paragraph) {
      if (
        (i.charCodeAt() >= 65 && i.charCodeAt() <= 90) || // A to Z
        (i.charCodeAt() >= 97 && i.charCodeAt() <= 122) || // a to z
        i.charCodeAt() == 32 || // for space
        i.charCodeAt() == 46 // for dot(.)
      ) {
        sentence = sentence + i;
      }
    }
    return sentence;
  }
  console.log(cleanText(paragraph));