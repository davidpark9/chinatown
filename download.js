document
  .getElementById("downloadButton")
  .addEventListener("click", function () {
    console.log("Button clicked!");
    
    // Create a new jsPDF instance
    const pdf = new jsPDF();

    // PDF content
    pdf.text("Name, Email, Phone", 10, 10); // Header

    // Sample data
    const data = [
      ["John Doe", "john@example.com", "123-456-7890"],
      ["Jane Doe", "jane@example.com", "987-654-3210"],
    ];

    // Add data to PDF
    for (let i = 0; i < data.length; i++) {
      pdf.text(data[i].join(", "), 10, 20 + i * 10);
    }

    // Save the PDF with a specific name
    pdf.save("example.pdf");
  });
