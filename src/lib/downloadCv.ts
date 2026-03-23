import jsPDF from "jspdf"

export function downloadCvAsPdf() {
  const doc = new jsPDF({ unit: "mm", format: "a4" })
  const pageWidth = doc.internal.pageSize.getWidth()
  const margin = 20
  const contentWidth = pageWidth - margin * 2
  let y = 20

  const checkPage = (needed: number) => {
    if (y + needed > 275) {
      doc.addPage()
      y = 20
    }
  }

  const addSectionTitle = (title: string) => {
    checkPage(14)
    y += 4
    doc.setDrawColor(176, 141, 58)
    doc.setLineWidth(0.5)
    doc.line(margin, y, pageWidth - margin, y)
    y += 6
    doc.setFont("helvetica", "bold")
    doc.setFontSize(12)
    doc.setTextColor(20, 38, 30)
    doc.text(title, margin, y)
    y += 7
  }

  const addBullet = (text: string, indent = 0) => {
    checkPage(10)
    doc.setFont("helvetica", "normal")
    doc.setFontSize(9.5)
    doc.setTextColor(60, 60, 60)
    const x = margin + 4 + indent
    const lines = doc.splitTextToSize(text, contentWidth - 6 - indent)
    doc.text("\u2022", margin + indent, y)
    doc.text(lines, x, y)
    y += lines.length * 4.5 + 1.5
  }

  const addText = (text: string, bold = false, size = 10) => {
    checkPage(8)
    doc.setFont("helvetica", bold ? "bold" : "normal")
    doc.setFontSize(size)
    doc.setTextColor(40, 40, 40)
    const lines = doc.splitTextToSize(text, contentWidth)
    doc.text(lines, margin, y)
    y += lines.length * (size * 0.45) + 2
  }

  // ── Header ──
  doc.setFillColor(20, 38, 30)
  doc.rect(0, 0, pageWidth, 42, "F")

  doc.setFont("helvetica", "bold")
  doc.setFontSize(22)
  doc.setTextColor(255, 255, 255)
  doc.text("Dr. Atsede Maru Dessie", margin, 18)

  doc.setFont("helvetica", "normal")
  doc.setFontSize(11)
  doc.setTextColor(176, 141, 58)
  doc.text("PhD in Teaching Amharic | Lecturer & Researcher", margin, 26)

  doc.setFontSize(8.5)
  doc.setTextColor(200, 200, 200)
  doc.text("Bahir Dar, Ethiopia  |  dmatsede@gmail.com  |  +251 912 035 217  |  +251 935 482 210", margin, 34)

  y = 52

  // ── Personal Details ──
  addSectionTitle("Personal Details")
  const details = [
    ["Date of Birth", "July 23, 1976 G.C"],
    ["Nationality", "Ethiopian"],
    ["Marital Status", "Married"],
    ["Current Address", "Bahir Dar, Ethiopia"],
  ]
  details.forEach(([label, value]) => {
    checkPage(7)
    doc.setFont("helvetica", "bold")
    doc.setFontSize(9.5)
    doc.setTextColor(20, 38, 30)
    doc.text(`${label}:`, margin, y)
    doc.setFont("helvetica", "normal")
    doc.setTextColor(60, 60, 60)
    doc.text(value, margin + 40, y)
    y += 5.5
  })

  // ── Education ──
  addSectionTitle("Educational Qualifications")
  addBullet("Diploma in Amharic \u2014 Bahir Dar Teachers College (GPA: 3.21)")
  addBullet("Bachelor\u2019s Degree in Ethiopian Language & Literature (Amharic) \u2014 Addis Ababa University (July 2004, GPA: 2.81)")
  addBullet("Master\u2019s Degree (MA) in Teaching Amharic \u2014 Addis Ababa University (July 2010, GPA: 3.81)")
  addBullet("Ph.D. in Teaching Amharic (TeAm) \u2014 Bahir Dar University (July 2023, CGPA: 3.90)")

  // ── Professional Experience ──
  addSectionTitle("Professional Experience")

  addText("Bahir Dar University (June 2025 \u2013 Present)", true, 10)
  addBullet("Lecturer, researcher, and student\u2019s advisor at Bahir Dar University")

  addText("Preply Platform (January 2025 \u2013 Present)", true, 10)
  addBullet("One-to-one Amharic language tutor for foreign students on the Preply language learning platform")

  addText("University of Gondar (2018 \u2013 May 2025)", true, 10)
  addBullet("Lecturer and Assistant Professor")
  addBullet("Taught undergraduate courses and presented academic issues in weekly seminars")
  addBullet("Reviewed journal articles for Gondar and Bahir Dar university language-related journals")
  addBullet("Coordinated community service project: \u201CTraining Towards Improving Professional Competence on Folklore for Culture and Tourism Experts\u201D")
  addBullet("Taught undergraduate and graduate students (regular, summer, and distance programs)")
  addBullet("Advised and examined Master\u2019s theses for Amharic students")

  addText("Debre Markos Teachers College (2005 \u2013 2016)", true, 10)
  addBullet("Lecturer, Researcher, and Gender Unit Coordinator")
  addBullet("Taught Amharic courses including literature, linguistics, methodology, handwriting")
  addBullet("Developed and edited modules: linguistics, children\u2019s literature, reading, and writing")
  addBullet("Gender Unit Coordinator: quarterly planning, counseling, workshops, training, anti-harassment policy")

  addText("Junior School Teacher (1998 \u2013 2001)", true, 10)
  addBullet("Taught Amharic at a junior school in North Gondar Zone for 2.5 years")

  // ── Research ──
  addSectionTitle("Research Experience")
  addBullet("2023: PhD Dissertation \u2014 \u201CConceptOriented Reading Instruction in Amharic\u201D \u2014 Awarded Best Dissertation (Bahir Dar University)")
  addBullet("2012\u20132013: Factors Affecting Amharic Language Writing Skills in Grade 4 Students (Published)")
  addBullet("2012\u20132013: Early Grade Teachers\u2019 Practices in Formulating Instructional Objectives (Published)")
  addBullet("2012\u20132013: Factors Influencing Female Students\u2019 Academic Achievement (Awarded by Amhara Education Bureau)")
  addBullet("2025: Mega research at Gondar \u2014 \u201CPrimary School Teachers Teaching Reading and Writing (Literacy) Cognition and Challenges\u201D")
  addBullet("2025: Research article in PhD strengthening program in collaboration with colleagues")

  // ── Textbooks ──
  addSectionTitle("Textbook Development")
  addBullet("Co-authored and edited Grade 3, 4, and 11 Amharic textbooks and teacher guides")

  // ── Additional Qualifications ──
  addSectionTitle("Additional Qualifications")
  addBullet("Certified Freelance Language Translator (August 2025)")
  addBullet("Certified Professional Language Teacher (September 2025)")
  addBullet("Certified Data Analysis (August 2024)")
  addBullet("Higher Diploma License: Certified Professional Teacher Educator \u2014 Bahir Dar University (July 2006)")

  // ── Languages & Skills ──
  addSectionTitle("Language Proficiency & Skills")
  addBullet("Fluent in Amharic and English; Beginner level Ge\u2019ez")
  addBullet("Computer & Statistics: Microsoft Word, Excel, PowerPoint, SPSS, AMOS")

  // ── References ──
  addSectionTitle("Professional References")
  addBullet("Mr. Menegesh Kebede \u2014 Former Vice Dean, Debre Markos Teachers College | +251 910 123 456")
  addBullet("Dr. Marew Alemu \u2014 Associate Professor, Bahir Dar University (PhD Advisor) | marewalemu@gmail.com")
  addBullet("Dr. Agegnehu Tesefa \u2014 Associate Professor, Former Dean of Social Sciences, University of Gondar")

  // ── Footer on each page ──
  const pageCount = doc.getNumberOfPages()
  for (let i = 1; i <= pageCount; i++) {
    doc.setPage(i)
    doc.setFontSize(7.5)
    doc.setTextColor(160, 160, 160)
    doc.text(
      `Dr. Atsede Maru Dessie \u2014 Curriculum Vitae  |  Page ${i} of ${pageCount}`,
      pageWidth / 2,
      290,
      { align: "center" }
    )
  }

  doc.save("Dr-Atsede-Maru-Dessie-CV.pdf")
}
