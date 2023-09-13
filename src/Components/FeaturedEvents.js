import React from "react";
import { useMediaQuery } from "@mui/material";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import Card from "react-animated-3d-card";


import Badge from 'react-bootstrap/Badge';
import Stack from 'react-bootstrap/Stack';



export default function DividerStack() {
  const isMediumScreen = useMediaQuery("(min-width: 600px)");
  const itemsToShow = isMediumScreen ? 7 : 3;

  return (
    <>
      <br />
      <div className="container over">
        <div className="row">
          <h3>Featured Events</h3>
          {/* <a href="#" id="view" className="d-flex justify-content-end">
            View all
          </a> */}
        </div>
        <h6>See what's popular across thousands of Events</h6>

        <br></br>
        <div style={{ overflow: "hidden", maxHeight: "400px" }}>
          <div
            style={{
              overflow: "auto",
              height: "100%",
              width: "100%", 
              scrollbarWidth: "none", 
              WebkitOverflowScrolling: "touch", 
            }}
          >
            <Grid
              container
              justifyContent="space-around"
              alignItems="center"
              spacing={{ xs: 15, md: 10 }}
              columns={{ xs: 30, sm: 30, md: 30 }}
            >
              {listItems.slice(0, itemsToShow)}
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
    title: "Big Sale Day",
    text: "Get ready for the biggest sale of the year!",
    startDateTime: "2023-09-15 08:00 AM",
    location: "Online",
    bagde: "primary",
  },
  {
    title: "Big Billion Days",
    text: "Shop your heart out during the Big Billion Days!",
    startDateTime: "2023-09-20 10:00 AM",
    location: "Various Stores",
    bagde: "secondary",
  },
  {
    title: "Black Friday Sale",
    text: "Don't miss out on amazing Black Friday deals!",
    startDateTime: "2023-11-25 12:00 AM",
    location: "Online and In-Store",
    bagde: "success",
  },
  {
    title: "Summer Clearance",
    text: "Get ready for hot summer deals and discounts!",
    startDateTime: "2023-06-15 09:30 AM",
    location: "Mall",
    bagde: "warning",
  },
  {
    title: "Holiday Shopping Spree",
    text: "Start your holiday shopping with great offers!",
    startDateTime: "2023-12-10 11:00 AM",
    location: "Downtown",
    bagde: "danger",
  },
  {
    title: "Tech Expo",
    text: "Explore the latest technology trends at the Tech Expo!",
    startDateTime: "2023-10-05 09:00 AM",
    location: "Convention Center",
    bagde: "info",
  },
  {
    title: "Fashion Show",
    text: "Witness the latest fashion trends at our Fashion Show!",
    startDateTime: "2023-09-30 07:00 PM",
    location: "Fashion Arena",
    bagde: "light",
  },
];
const listItems = cards.map((item) => (
  <Grid item xs={2} sm={4} md={4} key={item.title}>
  <Card
    style={{
      overflow: "hidden",
      width: "300px",
      height: "220px",
      cursor: "pointer",
      backgroundSize: 'cover', 
      backgroundSize: 'cover', 
    backgroundColor: "#f5f5f9", 
    border: "2px solid black", 
    }}
  >
    <CardContent>


      <Badge pill bg={item.bagde}>
        {item.title}
      </Badge>
      <Typography gutterBottom variant="h5" component="div">
        {item.title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {item.text}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Start Date & Time: {item.startDateTime}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Location: {item.location}
      </Typography>
    </CardContent>
  </Card>
</Grid>
  ));



{/* <Grid item xs={2} sm={4} md={4} key={item.title}> */}
