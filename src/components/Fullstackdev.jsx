import Card from "./Card";



const Fullstackdev = () => {
  return (
    <div className="condent">
      
      <Card
        image="/PngItem_2069813.png"
        title="HTML & Css"
        description="Essential for structuring and styling web content beautifully. "
      />
      <Card
        image="/image.png"
        title="JavaScript"
        description="Versatile language for dynamic web development and interactivity."
      />
      <Card
        image="/React.png"
        title="Front-End Frameworks(React)"
        description="JavaScript library for building interactive user interfaces efficiently."
      />
      <Card
        image="/Expressjs.png"
        title="Server-Side Frameworks(Express.js (Node.js))"
        description="Minimalist web framework for Node.js to build server-side applications."
      />
       <Card
        image="/MySQL.png"
        title="Databases MySQL (SQL)"
        description="Popular relational database management system for structured data storage. "
      />
        <Card
        image="/MongoDB.png"
        title="Databases MongoDB (NoSQL)"
        description="NoSQL database for flexible, scalable, and high-performance data storage."
      />
        
    </div>
   
  );
}

export default Fullstackdev;
