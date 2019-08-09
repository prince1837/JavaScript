// var list1=[12,23,34,45,98,56,87,56]
// var m_num=0;
// for (i of list1){
// 	if(m_num<i){
// 		m_num=i
// 	};
// };
// console.log(m_num)





// const a=["hello",'bro..'];
// const b =['it,s','my','time'];
// const joinTheWords=(fast,second)=>{
// var sum=fast.concat(second);
// console.log(sum);
// }
// joinTheWords(a,b);




// for(var j=2; j<100;j++){
//     var a=0;
//     for(var i=2;i<j;i++){
//         if (j %i==0){
//             a+=1;
//         }
//     }
//     if ( a == 0 ){
//         console.log(j);
//     }
// }






// function reverse_a_number(n){
// n = n + "";
//     var a= n.split("").reverse().join("");
//     if (n==a){
//         return("palindrome hai");
//     }else{
//         return("Nahi hai");
//     }
// }
// console.log(reverse_a_number("nitin"));


// ==================================================================================================================================================================


// var a=["abcd","abcde","abc","a","ab"];
// for(var i=0; i<a.length; i++){
// 	for (var j=0; j<a.length-1; j++){
// 		var g = a[j].length;
// 		var h = a[j+1].length;
// 		if (g<h){
// 			var f1=a[j];
// 			a[j]=a[j+1];
// 			a[j+1]=f1;
// 		}
// 	}
// }
// console.log(a)





// const vowal =  ["a", "e", "i", "o", "u"];
// function vowelsAndConsonants(s) {
//     let vowalList =[];
//     let stringList = [];
//     for (var i of s){
//         if(vowal.includes(i)){
//             vowalList.push(i);
//         }else{
//             stringList.push(i);
//         }
//     }
//     for(var V_list of vowalList){
// 		console.log(V_list);
// 	}
//     for(var STR_list of stringList){
//         console.log(STR_list);
//     }
// }
// vowelsAndConsonants("javascriptloops")









// function newRecod(list){
//     for(var a=0;a<list.length;a++){
//         var top=[50,28,30,5,10,35]
//         top.push(list[a]);
//         var numArray = top.sort(function(a, b){return a - b;});
//         numArray.reverse();
//         console.log(numArray)
//         var conte=1;
//         for(var run=0;run<numArray.length;run++){
//             if (list[a]===numArray[run]){
//                 console.log("ranke",conte,"=",list[a]);
//             }else{
//                 conte +=1;
//             }
//         }
//     }
// }
// newRecod([20,40,90,45])







// const read=require("readline-sync");
// input = read.question("enter your words\n");
// list1="abcdefghijklmnopqrstuvwxyz"
// for(i of list1){
// 	if (input.includes(i)){
// 		b=list1.replace(i,'');
// 		list1=b
// 	}
// }
// console.log(list1)





// var empty=[1,2,3,2,6,5,4,5,4,6,7];
// empty.sort();
// var dict={};
// for (i of empty){
//     if (!dict[i]){
//         dict[i] = 1;
//     }else{
//         dict[i]+=1;
//     }
// }
// console.log(empty)
// console.log(dict);
// var pair=0;
// for (i in dict){
//     var count=(dict[i])
//     var c=count/2
//     if (c==1 || c>1 ){
//         pair+=c
//     }
// }
// console.log(pair)




// ======================================================================================================================================



const my_data=[{
	"name":"Naresh",
	"name1":"Sanjay",
	"name2":"narayan",
	"name3":"satayam",
	"name4":"Nalla"
}]
for (i of my_data){
	var data=Object.values(i)
	if(data[0]=="N"){
		console.log(i)
	}
}