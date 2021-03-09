// Write a function rotate that rotates the elements of an array. All elements should be moved one position
//  to the left. The 0th element should be placed at the end of the array. The rotated array should be 
// returned.


function rotate(nums){
    
    let newArray = [];
    for (let i = nums.length-1; i >= 0; i--){
        newArray.push(nums[i]);
    }
    return newArray;        
      }

      let result = rotate([1,2,3,4]);
      console.log(result);
      
