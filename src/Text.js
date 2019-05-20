function process(str) {
    document.getElementById("reversedText").innerText = reverseString(str);
    document.getElementById("charCount").innerText = charCount(str);
    document.getElementById("palindrome").innerText = checkPalindrome(str);
    document.getElementById("binaryValue").innerText = stringToBinary(str);
}

function reverseString(str){
    return str.split("").reverse().join("");
}

function charCount(str) {
    return str.length;
}

function checkPalindrome(str) {
    return str.toLowerCase().trim() === str.toLowerCase().trim().split('').reverse().join('')
}

function stringToBinary(str){
    return str.split('').map(function(char) {
            return char.charCodeAt(0).toString(2).padStart(8, 0)
        }).join(' ');
}

window.process = process;

export default {
    process: process,
    reverseString: reverseString,
    charCount: charCount,
    checkPalindrome: checkPalindrome,
    stringToBinary: stringToBinary
};