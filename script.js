async function fetchResult() {
    let roll = document.getElementById("rollInput").value.trim();
    let resultDiv = document.getElementById("result");

    if (roll === "") {
        resultDiv.innerHTML = "<p>Please enter a Roll Number.</p>";
        return;
    }

    try {
        let response = await fetch("result.json");
        let data = await response.json();

        let student = data.find(s => s.Roll == roll);

        if (!student) {
            resultDiv.innerHTML = "<p style='color:red;'>No record found for Roll Number: " + roll + "</p>";
            return;
        }

        resultDiv.innerHTML = `
            <div class="result-box">
                <p><strong>Roll No:</strong> ${student.Roll}</p>
                <p><strong>Name:</strong> ${student.Name}</p>
                <p><strong>Grand Total:</strong> ${student.GrandTotal}</p>
                <p><strong>Grade:</strong> ${student.Grade}</p>
                <p><strong>Percentage:</strong> ${student.Percentage}%</p>
            </div>
        `;
    } catch (error) {
        resultDiv.innerHTML = "<p style='color:red;'>Failed to load result data.</p>";
    }
}
