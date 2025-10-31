async function searchResult() {
  const rollInput = document.getElementById("rollno").value.trim();
  const resultDiv = document.getElementById("result");

  if (rollInput === "") {
    resultDiv.innerHTML = "<p>Please enter a Roll Number.</p>";
    return;
  }

  try {
    const response = await fetch("results 2.json");
    const data = await response.json();

    const student = data[rollInput];

    if (student) {
      resultDiv.innerHTML = `
        <p><strong>Name:</strong> ${student["Name"]}</p>
        <p><strong>Father's Name:</strong> ${student["Father"]}</p>
        <p><strong>Grand Total:</strong> ${student["Total"]}</p>
        <p><strong>Grade:</strong> ${student["Grade"]}</p>
      `;
    } else {
      resultDiv.innerHTML = "<p>Result not found. Check Roll Number.</p>";
    }

  } catch (error) {
    resultDiv.innerHTML = "<p>Error loading data.</p>";
  }
}