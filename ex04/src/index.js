// Only change code below this line
const milili = [10, 25, 4];

function myArr(mili) {
    "use strict";
    for(var i=0; i<mili.length-1; i++) {
        for(var j=i+1; j<mili.length; j++) {
            if(mili[i] > mili[j]) {
                let temp = mili[i];
                mili[i] = mili[j]
                mili[j] = temp;
            }
        }
    }
    return mili;
}
// Using mili = [4, 10, 25] would be invalid

console.log(myArr(milili));
// Only change code above this line
module.exports = myArr;