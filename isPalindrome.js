const isPalindrome = (string) => {
    for(let i = 0; i < string.length; i++){
        const lo = string[i].toLowerCase();
        const hi = string[string.length - i - 1].toLowerCase();

        if(lo !== hi) return false;
    }

    return true;
}

console.log(isPalindrome('race car'))