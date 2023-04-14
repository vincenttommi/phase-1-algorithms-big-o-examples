
//learning goals , identifying Big 0 runtimes:constat,linear,quadratic  and logarithmic
//Research the  Big  0 runtime  of bult-in methods
  sock = ["belt", "blouse", "pants", "shirt", "shorts", "sock", "underwear"];

//algorithm for finding sock

function findsock(sortedLaundry){


let start = 0;
//declaring an object and assiging  with ana integer 0;
let end = sortedLaundry.length;
//decalaring ana end objects and assigning with a method that  checks the 
//already arguments passed in parameter sortedLaundry

while(start <= end){

    let mid = Math.floor((start + end)/2);


    /// creating an object mid and assigning it with a math.floor function thata takes
    //arguments of start and end sums togethere then  divides the outcome into 2
    if(sortedLaundry[mid] === "sock")return "sock";


    if(sortedLaundry[mid] < "sock"){

     start = mid + 1;

}else{


 end =  mid -1 ;



}
}
}
