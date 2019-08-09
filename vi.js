var a=["abcd","abcde","abc","a","ab"];
for (var i=0; i<a.length; i++){
    for (var j=0; j<a.length-1; j++){
        var f=a[j].length;
        var g=a[j+1].length;
        if (f<g){
            var small=a[j];
            a[j]=a[j+1];
            a[j+1]=small;
        }
    }
}
console.log(a);
