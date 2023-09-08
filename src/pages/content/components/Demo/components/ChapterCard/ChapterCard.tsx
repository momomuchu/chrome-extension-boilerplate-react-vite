import React, { useState } from "react";

// Define the props interface
interface ChapterCardProps {
  chapterName: string;
  sections: { title: string; tag: string }[];
}

const ChapterCard: React.FC<ChapterCardProps> = ({ chapterName, sections }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const chapterContainerStyle = {
    borderRadius: "4px",
    overflow: "hidden",
    paddingBottom: '30px',

  };

  const chapterStyle = {
    padding: "10px 20px",
    backgroundColor: "#f4f4f4",
    cursor: "pointer",
    transition: "background-color 0.2s",
  };

  const sectionStyle = {
    borderRadius: "4px",
    marginTop: '10px',
    marginLeft: "30px",
    padding: "10px 20px",
    backgroundColor: "#f4f4f4",
    borderTop: "1px solid #e1e1e1",
  };

  const tagStyle = {
    backgroundColor: "#e1e1e1",
    padding: "2px 8px",
    borderRadius: "4px",
    marginLeft: "10px",
  };

  return (
    <div style={chapterContainerStyle}>
      <div style={chapterStyle} onClick={() => setDropdownOpen(!dropdownOpen)}>
        {chapterName}
      </div>
      {dropdownOpen && (
        <div>
          {sections.map((section, index) => (
            <div key={index} style={sectionStyle}>
              {section.title} <span style={tagStyle}>{section.tag}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ChapterCard;
