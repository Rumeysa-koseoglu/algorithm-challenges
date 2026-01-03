//* Longest Substring Without Repeating Characters

// To solve this problem we will use 'sliding window' method

function lengthOfLongestSubstring(s) {
  // We use 'Set' to store characters and this structure allows us to keep only one of each character
  // This allows us to check for "duplicated" (repeated) characters quickly
  let seenChars = new Set();
  // We start left edge of the sliding window from index 0
  let left = 0;
  // This is the length record for the longest substring we will record. It is 0 at the begining
  let maxLength = 0;

  //"right" variable is the right edge of the window, and s.length is : all characters from leading to trailing of the series
  for (let right = 0; right < s.length; right++) {
    let newChar = s[right]; // We store the current character. (which may be a letter, digit, symbol or space)
    while (seenChars.has(newChar)) {
      // If this character already exist in 'seenChars', that means 'substring' rule has broken. Thats why we narrow the left of the window until the duplicated character is left out.
      seenChars.delete(s[left]); // Remove the character on the left from the seenChars
      left++; // Move the left edge of the window to the right once.
    }
    seenChars.add(newChar); // Since we are sure that 'newChar' is unique now, we can add it to the seenChars
    maxLength = Math.max(maxLength, right - left + 1); // We calculate current length of the window in every step (right - left + 1). And with 'Math.max' we update this length by comparing it with biggest record till now
  }
  return maxLength; //After scanning ends we return the largest length value we have
}

console.log(lengthOfLongestSubstring("a b3c!3--yab c#b2b"));
