function Vowels(str) {
    let count = 0;
    str = str.toLowerCase();
    for (let char of str) {
        if ('aeiou'.includes(char)) {
            count++;
        }
    }
    return count;
}
console.log( Vowels("Ehsan"));
console.log( Vowels("Haidari")); 