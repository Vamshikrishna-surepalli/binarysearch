let arr=[1,2,3,4,5]
let x=5
function binarySearch(arr,x,startIndex,endIndex){
        let middleIndex=Math.floor((startIndex+endIndex)/2)
        let flag=false
        if(startIndex>endIndex){
            flag=false
            return flag;
        }
        if(arr[middleIndex]==x){
            flag=true
            return flag;
        }
        if(x>arr[middleIndex]){
                return binarySearch(arr,x,middleIndex+1,endIndex)
        }else{
            return binarySearch(arr,x,startIndex,middleIndex-1)
        }
}
    if(binarySearch(arr,x,0,arr.length-1)){
        console.log("Element found");
    }else{
        console.log("Element not found");
    }