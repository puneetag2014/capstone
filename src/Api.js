import React from "react";
import { useState } from "react";

const fetchAPI=function(date){
let times=[{label:"17:00",value:"17:00"},
{label:"18:00",value:"18:00"},
{label:"19:00",value:"19:00"},
{label:"20:00",value:"20:00"},
{label:"21:00",value:"21:00"},
{label:"22:00",value:"22:00"}
];

let times_final=[{}];
const random_no=1+Math.floor(6*Math.random());
console.log(random_no);
for (var i=0;i<random_no;i++)
    times_final[i]=times[Math.floor(6*Math.random())];
// console.log(times_final);
function removeDuplicates(arr) {
    // return arr.filter((item,
    //     index) => arr.indexOf(item) === index);
    return [...new Set(arr)];
}

let times_dupl_removed=[];
times_dupl_removed=removeDuplicates(times_final);
times_dupl_removed.sort((a,b) =>
(a.value > b.value) ? 1 : -1
// {
    // if (fa < fb) {
    //     return -1;
    // }
    // if (fa > fb) {
    //     return 1;
    // }
    // return 0;
// }
)
console.log(times_dupl_removed);
return times_dupl_removed;

// console.log(times);
    // return    {times};

}
const submitAPI=function(formData){

}
export {fetchAPI,submitAPI};