let numbers = [1, 2, 3, 4,];
function isEven(value) {
	if (value%2 == 0)
		return true;
	else
		return false;
}
//numbers=numbers.filter(numbers % 2 != 0  );
// console.log(newNumbers);
// console.log("The doubled numbers are", newNumbers *2);


let monday = [
    {
        name     : 'Write a summary HTML/CSS',
        duration : 180
    },
    {
        name     : 'Some web development',
        duration : 120
    },
    {
        name     : 'Fix homework for class10',
        duration : 20
    },
    {
        name     : 'Talk to a lot of people',
        duration : 200
    }
];

let tuesday = [
    {
        name     : 'Keep writing summary',
        duration : 240
    },
    {
        name     : 'Some more web development',
        duration : 180
    },
    {
        name     : 'Staring out the window',
        duration  : 10
    },
    {
        name     : 'Talk to a lot of people',
        duration : 200
    },
    {
        name     : 'Look at application assignments new students',
        duration : 40
    }
];

let task = monday.concat(tuesday);
console.log("Collect two days' worth of tasks.");
console.log(task);
// console.log("Convert the task durations to hours, instead of minutes.");

//  monday = [
//     {
//         name     : 'Write a summary HTML/CSS',
//         duration : (180/60 )
//     },
//     {
//         name     : 'Some web development',
//         duration : 120/60
//     },
//     {
//         name     : 'Fix homework for class10',
//         duration : 20/60
//     },
//     {
//         name     : 'Talk to a lot of people',
//         duration : 200/60
//     }
// ];

// let tuesday = [
//     {
//         name     : 'Keep writing summary',
//         duration : 240/60
//     },
//     {
//         name     : 'Some more web development',
//         duration : 180/60
//     },
//     {
//         name     : 'Staring out the window',
//         duration  : 10/60
//     },
//     {
//         name     : 'Talk to a lot of people',
//         duration : 200/60
//     },
//     {
//         name     : 'Look at application assignments new students',
//         duration : 40/60
//     }
// ];

// let hour=monday.concat(tuesday);
// console.log(hour);


// // let hour =(duration % 60);
// // let duration =numbers
// // console.log(hour);

// console.log("Filter out everything that took two hours or more (remove from the collection")
// let days =hour.filter(d => d.duration >= 2);
for (var x=0;x<task.length;x++){
    task[x].hours = (parseInt(task[x].duration) / 60);
  }
console.log("Convert the task durations to hours, instead of minutes.");

console.log(task);




// console.log(days);
// console.log("Multiply the each duration by a per-hour rate
//  for billing (you can decide yourself what Maartje should make per hour) and sum it all up.");
var sum=0;
for (var x=0;x<task.length;x++){
  sum += (parseInt(task[x].duration) * 10 / 60);
}
console.log("Filter out everything that took two hours or more (remove from the collection)");
console.log(sum);
// for (var x in tasks){
//     for (var x=0;x<tasks.length;x++){

    for (var x=0;x<task.length;x++){
        task[x].hours = (parseInt(task[x].duration) / 60);
      }


      console.log(task);


      function checkHours(hours) {
        return hours < 2;
      }

      var hours = task.map( s => parseInt(s.duration) / 60 );
      
let filteredHours = hours.filter(checkHours)
var sum = 0;
for (var x in filteredHours){
        sum += parseFloat(filteredHours[x]) * 15;


}
console.log("The total amount is equal with: " + sum + "€");

