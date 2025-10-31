document.getElementById("searchForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let rollNo = document.getElementById("rollInput").value.trim();
    
    fetch("results.json")
        .then(response => response.json())
        .then(data => {
            // Convert rollNo to number because JSON roll_no is number
            let student = data.find(s => s.roll_no == rollNo);

            if (student) {
                document.getElementById("result").innerHTML = `
                    <p><strong>Roll No:</strong> ${student.roll_no}</p>
                    <p><strong>Name:</strong> ${student.name}</p>
                    <p><strong>Father's Name:</strong> ${student.fathers_name}</p>
                    <p><strong>Total Marks:</strong> ${student.grand_total}</p>
                    <p><strong>Grade:</strong> ${student.grade}</p>
                    <p><strong>Percentage:</strong> ${student.percentage}%</p>
                `;
            } else {
                document.getElementById("result").innerHTML = 
                `<p style="color:red;">No result found for Roll No: ${rollNo}</p>`;
            }
        })
        .catch(error => console.error(error));
});
