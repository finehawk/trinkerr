let input = "abcd";
const unwant = "bc";

// Output: "dab"

let isUnwantRemoved = false;

while(!isUnwantRemoved) {
    let unwantRemove = false;
    console.log(input);
    for(let i =0; i<input.length; i++) {
        if(input.charAt(i) == unwant.charAt(0)) {
            if(unwant.length>1 && input.length-i-1>0) {
                for(let j = 1; j<unwant.length; j++) {
                    if(i + j <= input.length-1) {
                        if(unwant.charAt(j) == input.charAt(i+j));
                        else break;
                    } else {
                        break;
                    }
                    if(i+j+1 <= input.length-1) {
                        input = input.substring(0,i-1) +  input.substring(i+j+1,input.length-1);
                    } else {
                        input = input.substring(0,i-1)
                    }
                    unwantRemove = true;
                    // i = i -1;
                }
            }
        
        }
        if(unwantRemove) break;
        if(i >= input.length-1) isUnwantRemoved = true;
    }
}