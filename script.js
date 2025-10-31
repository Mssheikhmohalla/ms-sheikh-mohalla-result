async function searchResult() {
    const rollInput = document.getElementById("rollNo").value.trim();
    const rollNo = parseInt(rollInput);

    const response = await fetch("results.json");
    const data = await response.json();

    const result = data.find(item => parseInt(item.roll_no) === rollNo);

    const output = document.getElementById("result");

    if (result) {
        output.innerHTML = `
            <p><strong>Roll No:</strong> ${result.roll_no}</p>
            <p><strong>Name:</strong> ${result.name}</p>
            <p><strong>Father's Name:</strong> ${result.fathers_name}</p>
            <p><strong>Grand Total:</strong> ${result.grand_total}</p>
            <p><strong>Grade:</strong> ${result.grade}</p>
            <p><strong>Percentage:</strong> ${result.percentage}</p>
        `;
    } else {
        output.innerHTML = "<p style='color:red;'>No Record Found</p>";
    }
}
