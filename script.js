// Result Data (Replace with your own data)
const results = {
  "801": { name: "Student 1", father: "Father 1", marks: "450/500" },
  "802": { name: "Student 2", father: "Father 2", marks: "420/500" },
  "803": { name: "Student 3", father: "Father 3", marks: "390/500" }
};

// Search Button Click
document.getElementById("searchBtn").addEventListener("click", function() {
  const roll = document.getElementById("rollInput").value.trim();
  const resultDiv = document.getElementById("result");

  if (results[roll]) {
    const data = results[roll];
    resultDiv.innerHTML = `
      <strong>Roll Number:</strong> ${roll}<br>
      <strong>Name:</strong> ${data.name}<br>
      <strong>Father's Name:</strong> ${data.father}<br>
      <strong>Marks:</strong> ${data.marks}
    `;
  } else {
    resultDiv.innerHTML = "<span style='color:red;'>Result not found. Check Roll Number.</span>";
  }
});
