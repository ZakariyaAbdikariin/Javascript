function checkSchool() {
    const age = Number(document.getElementById("ageInput").value);
    const result = document.getElementById("result");

    // Invalid input check
    if (isNaN(age) || age < 0) {
        result.innerHTML = "❌ <strong>Invalid input.</strong><br>Please enter a valid age.";
        result.style.color = "red";
    }

    // Nursery (0–4)
    else if (age >= 0 && age <= 4) {
        result.innerHTML = `
            👶 <strong>Nursery School</strong><br>
            Age Range: 0–4 years<br>
            Focus: Play-based learning, social skills, early reading and numbers.
        `;
        result.style.color = "#1e90ff";
    }

    // Primary School (5–11)
    else if (age > 4 && age <= 11) {
        result.innerHTML = `
            📘 <strong>Primary School</strong><br>
            Age Range: 5–11 years (Reception – Year 6)<br>
            Subjects: English, Maths, Science, History, Geography<br>
            Key Stage: KS1 & KS2
        `;
        result.style.color = "#2ecc71";
    }

    // Secondary School (12–16)
    else if (age > 11 && age <= 16) {
        result.innerHTML = `
            📚 <strong>Secondary School</strong><br>
            Age Range: 12–16 years (Year 7 – Year 11)<br>
            Key Stage: KS3 & KS4<br>
            Important Exams: GCSEs (usually taken at age 16)
        `;
        result.style.color = "#f39c12";
    }

    // College / Sixth Form (17–18)
    else if (age > 16 && age <= 18) {
        result.innerHTML = `
            🎓 <strong>College or Sixth Form</strong><br>
            Age Range: 17–18 years<br>
            Qualifications: A-Levels, BTEC, T-Levels<br>
            Preparation for university, apprenticeships, or work.
        `;
        result.style.color = "#9b59b6";
    }

    // University (19+)
    else if (age > 18) {
        result.innerHTML = `
            🏛️ <strong>University</strong><br>
            Age Range: 19+ years<br>
            Degrees: Bachelor’s, Master’s, PhD<br>
            Focus: Advanced academic study and career specialisation.
        `;
        result.style.color = "#e74c3c";
    }
}