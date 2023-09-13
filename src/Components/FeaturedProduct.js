import CardContent from "@mui/material/CardContent";

import { Link } from "react-router-dom";
 

import React from "react";
import { useMediaQuery } from "@mui/material";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Card from "react-animated-3d-card";

import CardMedia from "@mui/material/CardMedia";

export default function DividerStack() {
  const isMediumScreen = useMediaQuery("(min-width: 600px)");
  const itemsToShow = isMediumScreen ? 7 : 3;

  return (
    <>
      <br />
      <div className="container">
        <div className="row">
          <h3>Featured Products</h3>
         
          <Link to="/trending" className="d-flex justify-content-end">
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
              maxHeight: "500px", // Adjust maxHeight as needed
              scrollbarWidth: "none", // Hide scrollbar for Firefox
              WebkitOverflowScrolling: "touch", // Enable smooth scrolling on iOS
            }}
          >
            <Grid
              container
              justifyContent="space-around"
              alignItems="center"
              spacing={{ xs: 21, md: 30 }}
              columns={{ xs: 30, sm: 30, md: 30 }}
            >
              {cards
                .slice(0, itemsToShow) // Limit the number of cards based on screen size
                .map((card) => (
                  <Grid item xs={2} sm={4} md={4} key={card.title}>
                    <Card
                      style={{
                        width: "250px",
                        height: "400px",
                        cursor: "pointer",
                        overflowX: "auto", 
                        overflowX: "auto", 
                        backgroundImage: 'url("")', 
                        backgroundSize: 'cover', 
                        backgroundSize: 'cover', 
                      backgroundColor: "#f5f5f9", // Light gray background color
                      border: "2px solid green", // Add a thin border
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
    {card.title}
  </Typography>

  <h6 className="mb-0">{card.productName}</h6>
 
  <h6 className="mb-0">{card.productNumber}</h6>
  <h6 className="mb-0">Price: {card.initialBidding}</h6>
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
    title: "Product1",
    auctionId: "12345",
    productName: "Product 1",
    productNumber: "P001",
    startDate: "2023-09-15",
    endDate: "2023-09-20",
    initialBidding: 100,
    image: "https://media.ldlc.com/ld/products/00/05/88/62/LD0005886202_1.jpg",
  },
  {
    title: "Product2",
    auctionId: "67890",
    productName: "Product 2",
    productNumber: "P002",
    startDate: "2023-09-18",
    endDate: "2023-09-25",
    initialBidding: 150,
    image:"https://brain-images-ssl.cdn.dixons.com/2/2/10165822/u_10165822.jpg",
  },
  {
    title: "Product3",
    auctionId: "67890",
    productName: "Product 3",
    productNumber: "P003",
    startDate: "2023-09-18",
    endDate: "2023-09-25",
    initialBidding: 150,
    image:"https://th.bing.com/th/id/OIP.B7XEaC7UBDMzcjYQjrhHZAHaHa?pid=ImgDet&rs=1"
  },
  {
    title: "Product4",
    auctionId: "67894",
    productName: "Product 4",
    productNumber: "P002",
    startDate: "2023-09-18",
    endDate: "2023-09-25",
    initialBidding: 154,
    image:"https://th.bing.com/th/id/OIP.4LKQ2-Q2L4_q-6mWxUgu_AHaHd?pid=ImgDet&rs=1"
  },
  {
    title: "Product5",
    auctionId: "67890",
    productName: "Product 2",
    productNumber: "P002",
    startDate: "2023-09-18",
    endDate: "2023-09-25",
    initialBidding: 150,
    image:"https://i.pinimg.com/originals/be/3b/38/be3b38e5979d4642643443eac9eedd3c.jpg"
  },
  {
    title: "Product6",
    auctionId: "67890",
    productName: "Product 2",
    productNumber: "P002",
    startDate: "2023-09-18",
    endDate: "2023-09-25",
    initialBidding: 150,
    image:"https://th.bing.com/th/id/OIP.9oJ6vUE8ulj3WWFvMxXkygHaHa?pid=ImgDet&rs=1",
  },
  {
    title: "Product7",
    auctionId: "67890",
    productName: "Product 2",
    productNumber: "P002",
    startDate: "2023-09-18",
    endDate: "2023-09-25",
    initialBidding: 150,
    image:"https://th.bing.com/th/id/OIP.jWWfe03XZqzW3f4qkcl_xAHaEK?pid=ImgDet&rs=1",
  },
  {
    title: "Product8",
    auctionId: "67890",
    productName: "Product 2",
    productNumber: "P002",
    startDate: "2023-09-18",
    endDate: "2023-09-25",
    initialBidding: 150,
    image:"https://th.bing.com/th/id/OIP.8msqONHjANcUHVBEbfdohQHaFj?pid=ImgDet&rs=1",
  },

  {
    title: "Product8",
    auctionId: "67890",
    productName: "Product 2",
    productNumber: "P002",
    startDate: "2023-09-18",
    endDate: "2023-09-25",
    initialBidding: 150,
    image:"https://i1.wp.com/sarkisiansjewelry.com/wp-content/uploads/2018/11/Round-Diamond-Halo-Engagement-Ring-LT7877-2.jpg?fit=2348%2C2348&ssl=1",
  },

  
];

const listItems = cards.map((item) => (
  <Grid item xs={2} sm={4} md={4} key={item.title}>
    <Card
      style={{
        width: "200px",
        height: "180px",
        cursor: "pointer"
      }}
    >
      <CardContent>
      <CardMedia
          component="img"
          height="200"
          image={item.image}
          alt="ProductImage"
        />

        <Typography gutterBottom variant="h5" component="div">
          {item.title}
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          {item.productName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.productName}
        </Typography>
        <h6>{item.productNumber}</h6>
        <h6>{item.initialBidding}</h6>
      </CardContent>
    </Card>
  </Grid>
));



{/* <Grid item xs={2} sm={4} md={4} key={item.title}> */}
