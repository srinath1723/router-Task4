import Card from "./Card";

const Career = () => {
  return (
    <div className="condent">
      <Card
        image="/Technical-Skills.webp"
        title="Technical Skills"
        description=" Proficiency in specific areas of technology for problem-solving and innovation."
      /><Card
        image="/Project-Management.jpg"
        title="Project Management"
        description="Organizing tasks, resources, and timelines to achieve project goals efficiently."
      /><Card
        image="/Analytical-Skills.png"
        title="Analytical Skills"
        description="Ability to interpret data, solve problems, and make informed decisions."
      />
    </div>
  );

  
}

export default Career
