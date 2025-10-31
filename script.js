async function fetchResult() {
    const rollNo = document.getElementById("rollInput").value.trim();
    const resultBox = document.getElementById("result");

    if (!rollNo) {
        resultBox.innerHTML = "<p>Please enter a Roll Number.</p>";
        return;
    }

    try {
        const response = await fetch("results.json");
        const data = await response.json();

        if (data[rollNo]) {
            const student = data[rollNo];

            resultBox.innerHTML = `
                <h3>Result</h3>
                <p><strong>Roll No:</strong> ${rollNo}</p>
                <p><strong>Name:</strong> ${student.name}</p>
                <p><strong>Father's Name:</strong> ${student.fathers_name}</p>
                <p><strong>Grand Total:</strong> ${student.grand_total}</p>
                <p><strong>Grade:</strong> ${student.grade}</p>
                <p><strong>Percentage:</strong> ${student.percentage}</p>
            `;
        } else {
            resultBox.innerHTML = "<p>Result Not Found. Please check the roll number.</p>";
        }
    } catch (error) {
        resultBox.innerHTML = "<p>Error loading results file.</p>";
        console.error(error);
    }
}
