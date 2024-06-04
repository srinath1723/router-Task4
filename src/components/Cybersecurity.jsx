
import Card from './Card'; 



const Cybersecurity = () => {
  return (
    <div className="condent">
      <Card
        image="/Networking.jpg"
        title="Networking"
        description="Communication system connecting computers and devices for data exchange."
      /><Card
        image="/operating-system.jpg"
        title="operating system"
        description="Software managing hardware and providing user interface for interaction."
      /><Card
        image="/Programming-and-Scripting.jpeg"
        title="Programming and Scripting"
        description="Writing code to automate tasks and solve problems efficiently."
      />
      <Card
        image="/Cryptography.jpg"
        title="Cryptography"
        description="Techniques for secure communication through encryption and decryption methods."
      />
      <Card
        image="/Security-Tools-and-Technologies.jpg"
        title="Security Tools and Technologies"
        description=" Software and techniques safeguarding systems from cyber threats efficiently."
      />
    </div>
  );
}

export default Cybersecurity;
