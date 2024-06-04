import Card from "./Card";



const Datascience = () => {
  return (
    <div className="condent">
      
      <Card
        image="/Machine-Learning.jpg"
        title="Machine Learning"
        description=" Algorithms enabling computers to learn from data autonomously."
      /><Card
        image="/Deep-Learning.jpg"
        title="Deep Learning"
        description="Advanced machine learning paradigm using neural networks for cognition."
      /><Card
        image="/R-Programming.webp"
        title="R-Programming"
        description="Statistical computing language for data analysis, visualization, and modeling."
      /><Card
        image="/Data-Visualization-Tools.jpg"
        title="Data Visualization Tools"
        description=" Software for presenting data insights graphically, aiding comprehension."
      />
      <Card
        image="/power-bi.webp"
        title="power bi"
        description="Business analytics tool for data visualization and interactive reports."
      />
      
      
    </div>
  );
}

export default Datascience
