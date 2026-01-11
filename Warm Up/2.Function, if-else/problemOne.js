// Create a function which accepts the age and tells whether a person is eligible to vote or not

function eligibleToVote(age){
     // Check if age is less than 18
    if(age < 18){
        // If age is below 18, the person cannot vote
        console.log("Not Eligible for vote")
    }else{
        // If age is 18 or above, the person can vote
        console.log("Eligible for vote")
    }
}

// Calling the function with age 10
eligibleToVote(10) // Output: Not Eligible for vote

// Calling the function with age 20
eligibleToVote(20) // Output: Eligible for vote