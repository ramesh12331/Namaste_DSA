let n = 5; // Number of rows

for (let i = 0; i < n; i++) {

    // Start with an empty row for each line
    let row = "";

    // Toggle variable to switch between 1 and 0
    let toggle = 1;

    // Inner loop runs (i + 1) times
    for (let j = 0; j <=i; j++) {

        // Add current toggle value to the row
        row = row + toggle;

        // Switch toggle: 1 → 0 or 0 → 1
        if (toggle == 1) {
            toggle = 0;
        } else {
            toggle = 1;
        }
    }

    // Print the completed row
    console.log(row);
}
