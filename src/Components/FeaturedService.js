import React from "react";
import { useMediaQuery } from "@mui/material";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import Card from "react-animated-3d-card";
import { Link } from "react-router-dom";



import CardMedia from "@mui/material/CardMedia";
export default function DividerStack() {
  const isMediumScreen = useMediaQuery("(min-width: 600px)");
  const itemsToShow = isMediumScreen ? 6 : 3;

  return (
    <>
    <br />
    <div className="container">
      <div className="row">
        <h3>Featured Services</h3>
       
        <Link to="/services" className="d-flex justify-content-end">
          View all
        </Link>
      </div>
      <h6>See what's popular across thousands of Auctions</h6>

      <br />

      <div
        style={{
          overflow: "hidden",
          height: "400px",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <div
          style={{
            overflow: "auto",
            maxHeight: "450px", 
            scrollbarWidth: "none", 
            WebkitOverflowScrolling: "touch", 
          }}
        >
          <Grid
            container
            justifyContent="space-around"
            alignItems="center"
            border="5px solid orange" 

            spacing={{ xs: 21, md: 30 }}
            columns={{ xs: 30, sm: 30, md: 30 }}
          >
            {cards.slice(0, itemsToShow) // Limit the number of cards based on screen size
              .map((card) => (
                <Grid item xs={2} sm={4} md={4} key={card.title}>
                  <Card
                    style={{
                      width: "250px",
                      height: "450px",
                      cursor: "pointer",
                      overflowX: "auto", 
                      overflowX: "auto", 
                      backgroundImage: 'url("")',
                      backgroundSize: 'cover', 
                      backgroundColor: "#f5f5f9", 
                      border: "2px solid orange", 
                    }}
                  >
                    <CardContent>
                    <CardMedia
        component="img"
        height="200"
        image={card.image}
        alt="ProductImage"
      />

<Typography gutterBottom variant="h6" component="div">
  {card.serviceName}
</Typography>

<h6 className="mb-0">{card.serviceType}</h6>

<h6 className="mb-0">{card.productNumber}</h6>
<p className="mb-0"> {card.description}</p>
<div className="d-flex flex-column">



</div>

                    </CardContent>
                  </Card>
                </Grid>
              ))}
          </Grid>
        </div>
      </div>
      <hr />
    </div>
  </>
  );
}
const cards = [
  {
    title: "Data Engineering",
    serviceName: "Data Engineering Service",
    serviceType: "Data Engineering",
    description: "Expert data engineering solutions for your data needs.",
    image: "https://th.bing.com/th/id/OIP.qRHVESh0Ti9lzFbIE-W2JwHaDg?pid=ImgDet&rs=1",
  },
  {
    title: "Data Analytics",
    serviceName: "Data Analytics Service",
    serviceType: "Data Analytics",
    description: "Advanced data analytics to derive insights from your data.",
    image: "https://www.hkmp.com/wp-content/uploads/2021/04/69015594_s.jpg",
  },
  {
    title: "Cybersecurity",
    serviceName: "Cybersecurity Service",
    serviceType: "Cybersecurity",
    description: "Protect your digital assets with top-notch cybersecurity services.",
    image: "https://www.mea-markets.com/wp-content/uploads/2021/01/cybersecurity.jpg",
  },
  {
    title: "Cloud Computing",
    serviceName: "Cloud Computing Service",
    serviceType: "Cloud Computing",
    description: "Efficient and scalable cloud computing solutions.",
    image: "https://th.bing.com/th/id/OIP.SEaowd0Lszjg-4OWn7IRXwHaDv?pid=ImgDet&rs=1",
  },
  {
    title: "Web Hosting",
    serviceName: "Web Hosting Service",
    serviceType: "Web Hosting",
    description: "Reliable web hosting for your websites and applications.",
    image: "https://th.bing.com/th/id/OIP.PjzxktlqE_scj-y2z1-UKgHaD4?pid=ImgDet&rs=1",
  },
  {
    title: "Website Development",
    serviceName: "Website Development Service",
    serviceType: "Website Development",
    description: "Customized website development services tailored to your needs.",
    image: "https://miro.medium.com/max/1200/1*pE2fOVDikEUwiQJlh4ggzg.jpeg",
  },
  {
    title: "Digital Marketing",
    serviceName: "Professional Digital Marketing",
    serviceType: "Marketing",
    description: "Capturing Market with professional Digital Marketings.",
    image: "https://th.bing.com/th/id/R.5298291dcf99cd72c9444a2d4699e30b?rik=Rr5OUXVDuUEdmw&riu=http%3a%2f%2flite16.com%2fblog%2fwp-content%2fuploads%2f2021%2f07%2fdigital-marketing-4111002_1920-min.jpg&ehk=5LWIMswahzq2Y1E2HktnQEmylq%2fyx7qMdFWdRdjC3jY%3d&risl=&pid=ImgRaw&r=0",
  },
  {
    title: "Graphic Design",
    serviceName: "Graphic Design Service",
    serviceType: "Graphic Design",
    description: "Creative graphic design services for branding and marketing.",
    image: "https://clearmindgraphics.com/site/wp-content/uploads/2017/06/shutterstock_296987657-scaled.jpg",
  },
 
  {
    title: "Content Writing",
    serviceName: "Content Writing Service",
    serviceType: "Content Writing",
    description: "High-quality content writing services for websites and blogs.",
    image: "https://bizztor.com/wp-content/uploads/2018/07/want56984-1jxh1e1512586524.jpg",
  },
  {
    title: "Event Planning",
    serviceName: "Event Planning Service",
    serviceType: "Event Planning",
    description: "Expert event planning services for memorable occasions.",
    image: "https://cdn.earlytorise.com/wp-content/uploads/2018/06/event_planning.jpg",
  },
 
  {
    title: "Consulting Services",
    serviceName: "Consulting Services",
    serviceType: "Consulting",
    description: "Professional consulting services for various industries.",
    image: "https://th.bing.com/th/id/OIP.gzTOeU0ojSYk1px9ePekUAHaE8?pid=ImgDet&rs=1g",
  },
  {
    title: "SEO Services",
    serviceName: "SEO Services",
    serviceType: "SEO",
    description: "Improve your website's visibility with our SEO services.",
    image: "https://thesocialmediamonthly.com/wp-content/uploads/2020/09/search-engine-optimisation-scaled-1.jpg",
  },
  {
    title: "Legal Services",
    serviceName: "Legal Services",
    serviceType: "Legal",
    description: "Comprehensive legal services for individuals and businesses.",
    image: "https://thumbs.dreamstime.com/b/legal-services-concept-d-illustration-title-document-88959287.jpg",
  },
  {
    title: "Financial Planning",
    serviceName: "Financial Planning Service",
    serviceType: "Financial Planning",
    description: "Expert financial planning services for a secure future.",
    image: "https://th.bing.com/th/id/OIP.m0ZCKKTk5YaWaOAMFGLu0AHaHa?pid=ImgDet&rs=1",
  },
];

const listItems = cards.map((item) => (
    <Grid item xs={2} sm={4} md={4} key={item.title}>
      <Card
        style={{
            overflow:"hidden",
          width: "200px",
          height: "200px",
          cursor: "pointer",
        }}
      >
      

                


      </Card>
    </Grid>
  ));



{/* <Grid item xs={2} sm={4} md={4} key={item.title}> */}
