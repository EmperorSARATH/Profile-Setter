import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Goku from "../images/Goku.jpg";
import "../App.css";

const Skills = () => {
  let skills = ["React", "Javascript", "Java","Node.js","Python","Springboot","PostgresSql","Sql","MongoDb"];
  let image = [
    "https://th.bing.com/th/id/OIP.LRCbygP9AZfeK3cNWE-OIQHaE8?pid=ImgDet&rs=1",
    "https://fossbytes.com/wp-content/uploads/2017/01/Javascript.png",
    "https://th.bing.com/th/id/R.c2656bd56d27b85fccfceb307298f28e?rik=vfgjAHxsh7UiSA&riu=http%3a%2f%2fimage.digitalinsightresearch.in%2fuploads%2fimagelibrary%2fcbr%2fjava.jpg&ehk=vn97rntDxEtOc3Cbaz4ljrRGWJJhTekLa6AxVl8q%2bDU%3d&risl=&pid=ImgRaw&r=0",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvfxcLHtiGru_bAMofVWcaIhMh9O-dFcMP-g&usqp=CAU",
    "https://www.ntuclearninghub.com/documents/39367/4216797/Python-Symbol.png/369e410e-a90f-f887-c2dc-61f7ef761476/",
    "https://res.cloudinary.com/practicaldev/image/fetch/s--0zVsm1Mi--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/k2novbwantrw54gz173z.png",
    "https://miro.medium.com/v2/resize:fit:610/0*epnKnkKuLx2RAajt",
    "https://miro.medium.com/v2/resize:fit:1200/1*RK50G3R8xeRtANWAkJE6Mw.png",
    "https://webimages.mongodb.com/_com_assets/cms/kuzt9r42or1fxvlq2-Meta_Generic.png"
  ];
  return (
    <div>
      <h1>Skills page</h1>
      {skills.map((skill, index) => {
        return (
          <ul key={skill} className="skill-list" style={{alignItems:"center"}}>
            <li>
              <Card sx={{ maxWidth: 300}}>
                <CardActionArea className="Skill-card">
                  <CardMedia
                    className="img"
                    component="img"
                    height="140"
                    image={image[index]}
                    alt="green iguana"
                    sx={{width: 300, height: 200}}
                  />
                </CardActionArea>
              </Card>
            </li>
          </ul>
        );
      })}
    </div>
  );
};

export default Skills;
