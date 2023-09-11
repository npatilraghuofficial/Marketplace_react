// // src/components/HorizontalScroll.js
// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './HorizontalScroll.css'; // Create this CSS file for custom styling if needed

// const HorizontalScroll = () => {
//   // Sample card data (you can replace this with your own data)
//   const cards = [
//     {
//       id: 1,
//       title: 'Card 1',
//       image: 'https://cdn.wallpapersafari.com/89/62/alBz6X.jpg', // Replace with the image URL for Card 1
//     },
//     {
//       id: 2,
//       title: 'Card 2',
//       image: 'https://example.com/image2.jpg', // Replace with the image URL for Card 2
//     },
//     {
//       id: 3,
//       title: 'Card 3',
//       image: 'https://cdn.wallpapersafari.com/89/62/alBz6X.jpg', // Replace with the image URL for Card 3
//     },
//     {
//         id: 4,
//         title: 'Card 4',
//         image: 'https://cdn.wallpapersafari.com/89/62/alBz6X.jpg', // Replace with the image URL for Card 3
//       },

//       {
//         id: 5,
//         title: 'Card 5',
//         image: 'https://cdn.wallpapersafari.com/89/62/alBz6X.jpg', // Replace with the image URL for Card 3
//       },

//       {
//         id: 6,
//         title: 'Card 6',
//         image: 'https://cdn.wallpapersafari.com/89/62/alBz6X.jpg', // Replace with the image URL for Card 3
//       },
//     // Add more cards with unique titles and image URLs
//   ];

//   return (
//     <>
//     <div className="container">
//     <h3>Explore Popular Categories  <a href="#" id='view'> View all</a>
// </h3>
//     <div className="container_scroll">
//       <div className="row flex-row flex-nowrap overflow-auto">
//         {cards.map((card) => (
//           <div className="col-3" key={card.id}>
//             <div className="card">
//               <img
//                 src={card.image}
//                 className="card-img-top"
//                 alt={card.title}
//               />
//               <div className="card-body">
//                 <h5 className="card-title">{card.title}</h5>
//                 {/* Add other card content here */}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//     <hr/>
//     </div>
//     </>
//   );
// };

// export default HorizontalScroll;

import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Card from "react-animated-3d-card";

const useStyles = makeStyles((theme) => ({
    container: {
      overflowX: "auto", // Add horizontal scrolling
    },}));


export default function DividerStack() {
    const classes = useStyles();

  return (
    <>
    <br />
    <div className="container">
      <div className={classes.container}>
        <h3>
          Popular categories <a href="#" id="view"> View all</a>
          <h6>See what's popular across thousands of Auctions</h6>
        </h3>
        <br />
        <Box>
          <Grid
            container
            justifyContent="space-around"
            alignItems="center"
            spacing={{ xs: 10, md: 15}}
            columns={{ xs: 30, sm: 30, md: 30 }}
          >
            {cards
              .slice(0, 4) // Limit to 7 cards
              .map((card) => (
                <Grid item xs={5} sm={0} md={4} key={card.id}>
                  <Card
                    style={{
                      width: "200px",
                      height: "300px",
                      cursor: "pointer",
                      overflowX: "auto", // Add horizontal scrolling
                    }}
                  >
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {card.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {card.text}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
          </Grid>
        </Box>
        <hr />
      </div>
    </div>
  </>
  );
}
const cards = [
    {
        id: 1,
        title: "Popular categories",
        text: "C, C#, C++, Python, Dart, Java, HTML, Javascript, PHP, SQL",
      },
      {
        id: 2,
        title: "Popular categories",
        text:
          "ROS, OpenCL, CUDA, OpenCV, TensorFlow, Pytorch, .NET, Flutter, Unity, NodeJS, Express",
      },
  {  id: 3,
    title: "Build d",
    text:
      "ROS, OpenCL, CUDA, OpenCV, TensorFlow, Pytorch, .NET, Flutter, Unity, NodeJS, Express"
  }
,
  {  id: 4,
    title: "Build d",
    text:
      "ROS, OpenCL, CUDA, OpenCV, TensorFlow, Pytorch, .NET, Flutter, Unity, NodeJS, Express"
  },
  {
    id: 5,
    title: "Build d",
    text:
      "ROS, OpenCL, CUDA, OpenCV, TensorFlow, Pytorch, .NET, Flutter, Unity, NodeJS, Express"
  }
  , {  id: 6,
    title: "Build d",
    text:
      "ROS, OpenCL, CUDA, OpenCV, TensorFlow, Pytorch, .NET, Flutter, Unity, NodeJS, Express"
  }
  

];
const listItems = cards.map((item) => (
  <Grid item xs={5} sm={0} md={4} key={item.title}>
    <Card
      style={{
        width: "200px",
        height: "300px",
        cursor: "pointer",
        overflowX: "auto", // Add horizontal scrolling
      }}
    >
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.text}
        </Typography>
      </CardContent>
    </Card>
  </Grid>
));


