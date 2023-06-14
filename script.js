function threeSum(arr, target) {

	for(let i = 0; i < arr.length; i++){
        for(let j = i+1; j < arr.length; j++){
            if(arr[i] > arr[j]){
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }

    let stop = arr.length - 3;
    let closeSum = 0;
    let mindiff = 999999;

    for(let i = 0; i <= stop; i++){
        let fixed = arr[i];
        let start = i+1;
        let end = arr.length - 1;

        while(start < end){
            let sum = fixed + arr[start] + arr[end];
            console.log(`sum ` + sum);

            if(sum == target){
                closeSum =  sum;
                break;
            }else if(sum < target){
                start = start + 1;
            }else if(sum > target){
                end = end - 1;
            }

            let diff = Math.abs(sum - target);

            if(diff < mindiff){
                mindiff = diff;
                closeSum = sum;
            }

        }


    }


    return closeSum;
  
}

module.exports = threeSum;
