let arr=[2,4,6,8,10,11,12];
function Modify(arr){
    let n=arr.length;
    let i=0,j=n-1;
while(i<j){
arr.push(arr[j]);
arr.push(arr[i]);
j=j-1;
i=i+1;
if(i==j){
    arr.push(arr[i]);
    break;
  }
}
arr.splice(0,n);
}
Modify(arr);
console.log(arr)
