function findLongestWord(str) {
  const words = str.match(/[a-zA-Z]+/g) || [];

  return words.reduce(
    (longest, word) => {
      const vowelCount = (word.match(/[aeiouAEIOU]/g) || []).length;
      return word.length > longest.word.length ||
        (word.length === longest.word.length && vowelCount > longest.vowelCount)
        ? { word, vowelCount }
        : longest;
    },
    { word: '', vowelCount: 0 }
  ).word;
}

const exampleSentence =
  'Smart people learn from everything and everyone, average people from their experience, stupid people already, have all the answers';
const res = findLongestWord(exampleSentence);
console.log('Result', res);

// Sorry I literally just got sick and almost lost my voice and it's super hard for me to speak.

/* 

Here are the test cases I would check the function for :

1. Input: ""
   Expected Output: ""
   Explanation: An empty input should result in an empty output.
   
2. Input: "123124 @$!%"
   Expected Output: ""
   Explanation: An empty string when there are no valid words to consider.

3. Input: "fly cry dry"
   Expected Output: "fly"
   Explanation: All words have the same length, but none contain vowels. The first word, "fly," should be selected.

4. Input: "a b c d e"
   Expected Output: "a"
   Explanation: Words consisting of single characters, and "a" is the first vowel.

*/
