let n = 5;

for(let i=0; i<n; i++){
    // Start with empty string for each row
    let row = "";

    // 1️⃣ Print spaces first
    // Number of spaces = n - (i + 1)
    for(let j=0; j<n-(i+1); j++){
        row = row + "_"
    }

    // 2️⃣ Print stars
    // Number of stars = i + 1
    for(let k=0; k<=i; k++){
        row = row + "*"
    }

    // Print the completed row
    console.log(row)
}


// Out put
// ____*
// ___* *
// __* * *
// _* * * *
// * * * * *


// Note

// space => j
// star => k

// 🔹 Why Stars = i + 1

// We start counting rows from i = 0
// But stars start from 1, not 0
// Stars = i + 1 => k<=i or k<i+1

// 🔹 Why Spaces = n - (i + 1)

// Total positions in each row = n
// Each row contains: spaces + stars = n
// We already know: stars = i + 1

// So
// spaces = n - stars
// spaces = n - (i + 1)