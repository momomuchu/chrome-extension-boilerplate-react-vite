import ChapterCard from "../../components/ChapterCard/ChapterCard";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";

const exampleData: any[] = [
  {
    chapterName: "Chapter 1: Introduction",
    sections: [
      { title: "Section 1.1", tag: "Beginner" },
      { title: "Section 1.2", tag: "Intermediate" },
      { title: "Section 1.3", tag: "Advanced" },
    ],
  },
  {
    chapterName: "Chapter 2: Getting Started",
    sections: [
      { title: "Section 2.1", tag: "Beginner" },
      { title: "Section 2.2", tag: "Intermediate" },
    ],
  },
  {
    chapterName: "Chapter 3: Advanced Topics",
    sections: [
      { title: "Section 3.1", tag: "Advanced" },
      { title: "Section 3.2", tag: "Advanced" },
      { title: "Section 3.3", tag: "Advanced" },
    ],
  },
];

const Start = () => {
  return (
    <div>
      <h1>Hello Start</h1>
      {exampleData.map((data, index) => (
        <ChapterCard
          key={index}
          chapterName={data.chapterName}
          sections={data.sections}
        />
      ))}
      <Link to="/login">login</Link>
      <Link to="/home">about</Link>
      <Link to="/course">contact</Link>
      <Link to="/startcourse">products</Link>
      <Footer></Footer>
    </div>
  );
};

export default Start;
