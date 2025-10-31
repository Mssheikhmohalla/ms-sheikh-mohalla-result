async function searchResult() {
    const rollInput = document.getElementById("rollno").value.trim();
    const resultDiv = document.getElementById("result");
    
    if (rollInput === "") {
        resultDiv.innerHTML = "<p>Please enter a Roll Number.</p>";
        return;
    }

    try {
        const response = await fetch("results 2.json"); // <-- Using correct JSON file
        const data = await response.json();

        const student = data.find(item => item["Roll No."] == rollInput);

        if (student) {
            resultDiv.innerHTML = `
                <p><strong>Name:</strong> ${student["Name"]}</p>
                <p><strong>Grand Total:</strong> ${student["Grand Total"]}</p>
                <p><strong>Grade:</strong> ${student["Grade"]}</p>
                <p><strong>Remark:</strong> ${student["Remark"]}</p>
            `;
        } else {
            resultDiv.innerHTML = "<p>Result not found. Please check the Roll Number.</p>";
        }

    } catch (error) {
        resultDiv.innerHTML = "<p>Error loading results. Please try again later.</p>";
    }
}
