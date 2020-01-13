// var officers = [
//   { id: 20, name: 'Captain Piett' },
//   { id: 24, name: 'General Veers' },
//   { id: 56, name: 'Admiral Ozzel' },
//   { id: 88, name: 'Commander Jerjerrod' }
// ];

// officers.forEach (function(x){
// 	console.log(x)
// })


// var personnel = [
//   {
//     id: 5,
//     name: "Luke Skywalker",
//     pilotingScore: 98,
//     shootingScore: 56,
//     isForceUser: true,
//   },
//   {
//     id: 82,
//     name: "Sabine Wren",
//     pilotingScore: 73,
//     shootingScore: 99,
//     isForceUser: false,
//   },
//   {
//     id: 22,
//     name: "Zeb Orellios",
//     pilotingScore: 20,
//     shootingScore: 59,
//     isForceUser: false,
//   },
//   {
//     id: 15,
//     name: "Ezra Bridger",
//     pilotingScore: 43,
//     shootingScore: 67,
//     isForceUser: true,
//   },
//   {
//     id: 11,
//     name: "Caleb Dume",
//     pilotingScore: 71,
//     shootingScore: 85,
//     isForceUser: true,
//   },
// ];



// let a;
// let B;
// let arry = []
// personnel.forEach(function(data){
// 	a=data.pilotingScore
// 	b=data.shootingScore
// 	arry.push(a+b)
// })
// console.log(arry)



// let arry=[]
// personnel.forEach((data)=>{
// 	arry.push(data.pilotingScore+data.shootingScore)
// })
// console.log(arry)




// var arry=personnel.map((data)=>{
// 	return data.pilotingScore+data.shootingScore
// })
// console.log(arry)



// var arry=personnel.filter((data)=>{
// 	return (data.isForceUser===true)
// }).map((data1)=>{
// 		return data1.pilotingScore+data1.shootingScore
// 	})
// console.log(arry)



// var pilots = [
//   {
//     id: 10,
//     name: "Poe Dameron",
//     years: 14,
//   },
//   {
//     id: 2,
//     name: "Temmin 'Snap' Wexley",
//     years: 30,
//   },
//   {
//     id: 41,
//     name: "Tallissan Lintra",
//     years: 16,
//   },
//   {
//     id: 99,
//     name: "Ello Asty",
//     years: 23,
//   }
// ];


// var totalYears = pilots.reduce(function (pilot, accumulator) {
//   return pilot + accumulator.years;
// },10);
// console.log(totalYears)



// var a = [2,3,4,5,6,7,9,11,12,13]
// var b=a.map((data)=>{
//     for (var i=2; i<=data; i++){
//         if (i<data){
//         	if(data%i == 0){
//             break
// 	        }
//         }
//         else{
// 	        var d='true'
// 	        break
// 	        }
//     }
//     if (d=='true'){
//         console.log(data);
//         // return data;
//     }
// })
// // console.log(b)



// var list = [1,2,3,4,5,6,7,8,9,11]
// var prime = list.map((item)=>{
//     var flag = true
//     for (var i=2; i<item; i++){
//         if (item%i==0){
//             flag=false
//             break
//         }
//     }if (item==1){flag = false}
//     if (flag){return item}
// })
// console.log(prime)




// var list = [1,2,3,4,5,6,7,8,9,11]
// var prime = list.map((item)=>{
//     var counter = 0
//     for (var i = 1; i<=item; i++){
//         if (item%i===0){
//             counter += 1
//             if (counter==3){break}
//         }
//     }
//     if (counter==2){return item}
// })
// console.log(prime)
