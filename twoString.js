var s1 = "Jack";
var s2 = "Jill";

function match(s1, s2) {
    var count = 0;
    for(let i in s1) {
        s2.includes(s1[i]) ? count++ : false;
    }

    return count;
}

console.log(match(s1,s2));