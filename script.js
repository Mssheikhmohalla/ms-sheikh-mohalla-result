document.getElementById("searchBtn").addEventListener("click", function () {
    const rollNo = document.getElementById("rollNo").value.trim();
    const resultBox = document.getElementById("result");

    if (rollNo === "") {
        resultBox.innerHTML = "<p>Please enter a Roll Number.</p>";
        return;
    }

    fetch("data.json")
        .then(response => response.json())
        .then(data => {
            // Find student object by matching roll_no
            const student = data.find(s => s.roll_no == rollNo);

            if (student) {
                resultBox.innerHTML = `
                    <h3>Result</h3>
                    <p><strong>Roll No:</strong> ${student.roll_no}</p>
                    <p><strong>Name:</strong> ${student.name}</p>
                    <p><strong>Father's Name:</strong> ${student.fathers_name}</p>
                    <p><strong>Grand Total:</strong> ${student.grand_total}</p>
                    <p><strong>Grade:</strong> ${student.grade}</p>
                    <p><strong>Percentage:</strong> ${student.percentage}%</p>
                `;
            } else {
                resultBox.innerHTML = "<p>Result Not Found. Check roll number.</p>";
            }
        })
        .catch(error => {
            console.error("Error:", error);
            resultBox.innerHTML = "<p>Unable to load result data. Try again later.</p>";
        });
});
