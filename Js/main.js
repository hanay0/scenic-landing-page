// giving the navbar a class to be colored with scrolling
$(window).scroll(function() {
    $('nav').toggleClass('greyish', $(this).scrollTop() > 50);
});


// let letters = {
//     'Yasmeen': 'Ahmed',
//     B: 3, 
//     c: 5
// }

// function objectToArray() {
//     for(const [key, value] of Object.entries(letters)) {
//         console.log(`${key} : ${value}`);
//     }
// }


// objectToArray();

// ---------------leetcode --------------------------------
// example one

// function twoSum(nums, target) {
//     numsIndexs = {};

//     // loop through nums array
//     for(let i = 0; i < nums.length; i++) {
//         let currentDifference = target - nums[i];

//         if(numsIndexs[currentDifference] !== undefined && numsIndexs[currentDifference] !== i) {
//             return [i, numsIndexs[currentDifference]];
//         } else {
//             numsIndexs[nums[i]] = i;
//         }
//     }
// };


// ----------------------------------------------------
// exaample two

// let x = 123555;
// let xToString= x.toString();

// function reversedNums(x) {
//     return (
//         parseFloat(x
//         .toString()
//         .split('')
//         .reverse()
//         .join('')
//         ) * Math.sign(x)
//     )
// }

// console.log(reversedNums(-42.36));


// ----------------------------------------------------------
// example three

