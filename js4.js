function P(str) {
    str = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    return str === str.split('').reverse().join('');
}

console.log(P("madam"));         
console.log(P("racecar"));       
console.log(P("hello"));         
console.log(P("A man, a plan, a canal, Panama")); 