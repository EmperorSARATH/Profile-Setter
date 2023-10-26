import "../App.css";
import Image from "./Image";
import Details from "./Details";
import Appbar from "./Appbar";
import Projects from "./Projects";
import Ecommerce from "../images/Ecommerce.png";
import Crown from "../images/Crown.png";
import HealthCare from "../images/HealthCare.png";

const Home = () =>{
    const images = [Ecommerce, Crown, HealthCare];
  const Title = ["Crown Clothing", "E-commerce", "Health Care"];
  const Project_Description = {0:'This is first project',
1 :'This is second project',
2:'This is 3rd project'}
    return (
     <div className="background">
      <div className="Header-area">
        <Appbar />
        <h2 style={{fontFamily: "Georgia"}}>PORTFOLIO WEBSITE</h2>
      </div>
      <section>
        <div id="details" className="detail-disabled">
          <Details />
        </div>
        <div>
          <Image />
        </div>
      </section>
      <section>
        <ul className="Projectul">
        {
          Title.map((title, index) =>{
            return<l1 key={index}><Projects id="project" image={`${images[index]}`} Title={title} desc={Project_Description[index]} /></l1>
          })
        }   
        </ul>
      </section>
    </div>
    )
}
export default Home;