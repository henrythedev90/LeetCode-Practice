const lowest = (nums) => {
  let lowest = Infinity;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < lowest) {
      lowest = nums[i];
    }
  }
  console.log(lowest);
};

const highest = (nums) => {
  let highestNum = -Infinity;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > highestNum) {
      highestNum = nums[i];
    }
  }
  console.log(highestNum);
};

let sampleArray = [99, 3, 1000, 77, 100, 1, 0.5, 999];

lowest(sampleArray);
highest(sampleArray);
