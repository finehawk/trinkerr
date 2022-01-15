// str1 = "123456"
// str2 = "312321"

// output = "435777"

const str1 = "123456";
const str2 = "123456";
let smallerString = "";
let largerString = "";
if(str1.length >= str2.length) {
    smallerString = str2;
    largerString = str1
} else {
    largerString = str2;
    smallerString = str1;
}
let addOne = false
let result = "";

let j = largerString.length-1;
for(let i = smallerString.length-1; i>=0; i--) {
    let add = parseInt(smallerString.charAt(i)) + parseInt(largerString.charAt(j));
    if(addOne) {
        add = add+1;
        addOne = false;
    }
    if(add>=10) {
        addOne = true;
         result +=  parseInt(String(add).charAt(1));
    } else {
        result += String(add);
    }
    if(i == 0 && addOne ==true) result += "1";
    j--;
     if(largerString.length > smallerString.length && i == 0) {
        result += largerString.substring(0,largerString.length-smallerString.length);
    }
}

let reverseResult = ""

for(let i = result.length-1; i>=0; i--) {
    reverseResult+=result.charAt(i);
}

console.log(reverseResult);
