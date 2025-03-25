// // Remember, we're gonna use strict mode in all scripts now!
// "use strict";

// // Determine Temp Amplitude:

// const t1 = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
// const t2 = [13, -4, -2, -10, 'error', 49, 43, 27, 5, 1, 93, 35];


// // NOTE Steps to solve:
// // How to compute min and max in an array
// // What's a sensor error, what do we do?

// //  Sub Steps:
// // - How to ignore errors
// // - Find max value in temp array
// // - Find min value in temp array
// // - Subtract min from max and return it

// const calcTempAmplitude = function (temps) {
//     let max = temps[0];
//     let min = temps[0];

//     // Find min & max value's
//     for (let i = 0; i < temps.length; i++) {
//         const curTemp = temps[i];

//         if (curTemp > max) max = curTemp;
//         if (curTemp < min) min = curTemp;
//     }
//     console.log(`Temp max: ${max}`);
//     console.log(`Temp min: ${min}`);

//     return max-min
// }

// let tempAmp1 = calcTempAmplitude(t1)
// console.log(`Temp Amplitude: ${tempAmp1}`);

// // Problem 2:
// // Function should now receive two array's of temperatures
// // - How to merge the two arrays?

// // Sub Problem
// // - Merge two arrays?


// const t3 = t1.concat(t2)
// console.log(t3);

// let tempAmp2 = calcTempAmplitude(t3)
// console.log(`Temp Amplitude: ${tempAmp2}`);



// data_1 = [17, 21, 23]
// data_2 = [12, 5, -5, 0, 4]

// const printForecast = function (arr) {
//     let weather = ''
//     for (let i = 0; i < arr.length; i++) {
//         if (i < arr.length - 1)
//             weather += `... ${arr[i]}°C in ${i + 1} days `
//         else
//             weather += `... ${arr[i]}°C in ${i + 1} days ...`
//     }
//     console.log(weather);
// }

// printForecast(data_2)
// printForecast(data_1) 