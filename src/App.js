import "./App.css";
import Image from "./Component/Image";
import Details from "./Component/Details";
import Appbar from "./Component/Appbar";
import Projects from "./Component/Projects";
import Ecommerce from "./images/Ecommerce.png";
import Crown from "./images/Crown.png";
import HealthCare from "./images/HealthCare.png";

function App() {
  const images = [Ecommerce, Crown, HealthCare];

  const Title = ["Crown Clothing", "E-commerce", "Health Care"];
  const Project_Description = {0:'This is first project',
1 :'This is second project',
3:'This is 3rd project'}
  return (
    <div className="background">
      <div className="Header-area">
        <Appbar />
        <h2>PORTFOLIO WEBSITE</h2>
      </div>
      <section>
        <div id="details">
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
       
        {/* <Projects image1={`${Crown}`} Title={Title[0]} />
        <Projects image2={`${Ecommerce}`} Title={Title[1]} />
        <Projects image2={`${HealthCare}`} Title={Title[2]} />
        <Projects image2={'https://thumbs.dreamstime.com/b/projects-concept-black-chalkboard-d-rendering-handwritten-top-view-office-desk-lot-business-office-supplies-79906734.jpg'} /> */}
      </section>
    </div>
  );
}

export default App;
