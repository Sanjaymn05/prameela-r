import React from "react";
import styles from './CourseMaterialStyles.module.css'; // Import the CSS module

export default function CourseMaterial() {
  // Function to open PDF in a new tab
  const openPdf = (pdfUrl) => {
    window.open(pdfUrl, "_blank");
  };

  // Example data for subjects and their related PDFs
  const subjects = [
    {
      name: "Software Engineering and Product Management",
      pdfLinks: [
        "https://"
      ],
    },
    
    // Add more subjects here
  ];

  return (
    <section className={styles.main}>
      <h2 className={styles.heading}>Course Materials</h2>

      <div className={styles.courseMaterialList}>
        {subjects.map((subject, index) => (
          <div className={styles.subjectCard} key={index}>
            <h3>{subject.name}</h3>
            <div className={styles.pdfLinks}>
              {subject.pdfLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={() => openPdf(link)}
                  className={styles.pdfLinkBtn}
                >
                  Open Module {index + 1}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
