fetch("data.json")
  .then(response => response.json())
  .then(data => {
    document.getElementById("searchBtn").addEventListener("click", function () {
      const rollNo = document.getElementById("rollNo").value.trim();

      const student = data.find(s => s.ROLLNO == rollNo);

      if (student) {
        document.getElementById("result").innerHTML = `
          <p><strong>Name:</strong> ${student.NAME}</p>
          <p><strong>Father Name:</strong> ${student.FNAME}</p>
          <p><strong>Total Marks:</strong> ${student.TOTAL}</p>
          <p><strong>Result:</strong> ${student.RESULT}</p>
        `;
      } else {
        document.getElementById("result").innerHTML = "<p>Result not found</p>";
      }
    });
  });
