import React from "react";
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
import Icon from "@mui/material/Icon"; // Import Icon component


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDesktop,
  faBriefcaseMedical,
  faTshirt,
  faChartLine,
  faCode,
  faBlender,
  faPalette,
} from "@fortawesome/free-solid-svg-icons";


export default function DividerStack() {
  return (
    <>
      <br />
      <div className="container">
        <div className="row">
          <h3>View All Categories</h3>
         
        </div>
        <h6>See what's popular across thousands of Auctions</h6>

        <br />

        <Box>
          <Grid
            container
            justifyContent="space-around"
            alignItems="center"
            spacing={{ xs: 2, md: 4 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {listItems}
          </Grid>
        </Box>
        <hr />
      </div>
    </>
  );
}

const cards = [
  {
    title: "Electronics and Gadgets",
    text: "Explore the latest tech gadgets",
    icon: faDesktop, // FontAwesome icon for Electronics and Gadgets
    category: "Electronics and Gadgets",
  },
  {
    title: "Wellness and Healthcare",
    text: "Stay healthy with our healthcare products",
    icon: faBriefcaseMedical, // FontAwesome icon for Wellness and Healthcare
    category: "Wellness and Healthcare",
  },
  {
    title: "Fashions and Apparel",
    text: "Upgrade your wardrobe with the latest fashion trends",
    icon: faTshirt, // FontAwesome icon for Fashions and Apparel
    category: "Fashions and Apparel",
  },
  {
    title: "Data Analytics and Engineering",
    text: "Explore data analytics and engineering tools",
    icon: faChartLine, // FontAwesome icon for Data Analytics and Engineering
    category: "Data Analytics and Engineering",
  },
  {
    title: "Software Development",
    text: "Enhance your coding skills with our software development resources",
    icon: faCode, // FontAwesome icon for Software Development
    category: "Software Development",
  },
  {
    title: "Appliances",
    text: "Discover the latest home appliances",
    icon: faBlender, // FontAwesome icon for Appliances
    category: "Appliances",
  },
  {
    title: "Paintings",
    text: "Experience the world of art with our paintings",
    icon: faPalette, // FontAwesome icon for Paintings
    category: "Paintings",
  },

    {
      title: "Programming Books",
      text: "A collection of programming books for all skill levels.",
      icon: "fa-code",
      category: "Books and Literature",
    },
    {
      title: "Basketball Equipment",
      text: "Get ready to hit the court with our basketball gear.",
      icon: "fa-basketball-ball",
      category: "Sports and Fitness",
    },
    {
      title: "Modern Art Prints",
      text: "Decorate your home with modern art prints.",
      icon: "fa-paint-brush",
      category: "Home Decor",
    },
    {
      title: "Board Games",
      text: "Fun and entertainment with a variety of board games.",
      icon: "fa-chess-board",
      category: "Toys and Games",
    },
    {
      title: "Gemstone Jewelry",
      text: "Elegant jewelry pieces with precious gemstones.",
      icon: "fa-gem",
      category: "Jewelry and Accessories",
    },
    {
      title: "Gourmet Chocolate",
      text: "Indulge in gourmet chocolates from around the world.",
      icon: "fa-utensils",
      category: "Gourmet Food",
    },
    {
      title: "Adventure Travel Packages",
      text: "Plan your next adventure with our travel packages.",
      icon: "fa-plane",
      category: "Travel and Adventure",
    },
    {
      title: "DIY Craft Kits",
      text: "Craft and create with our DIY kits and supplies.",
      icon: "fa-cut",
      category: "Crafts and DIY",
    },
    {
      title: "Pet Toys and Accessories",
      text: "Spoil your pets with toys and accessories.",
      icon: "fa-paw",
      category: "Pet Supplies",
    },
    {
      title: "Rare Coin Collection",
      text: "Discover rare and valuable coin collectibles.",
      icon: "fa-coins",
      category: "Collectibles",
    },
    {
      title: "Musical Instruments",
      text: "Explore a range of musical instruments for all genres.",
      icon: "fa-music",
      category: "Musical Instruments",
    },
    {
      title: "Antique Furniture",
      text: "Elegant antique furniture pieces for your home.",
      icon: "fa-hourglass",
      category: "Antiques and Vintage",
    },
    {
      title: "Professional Art Supplies",
      text: "High-quality art supplies for professional artists.",
      icon: "fa-palette",
      category: "Art Supplies",
    },
    {
      title: "Kitchen Appliances",
      text: "Upgrade your kitchen with modern appliances.",
      icon: "fa-blender",
      category: "Electrical Appliances",
    },
    {
      title: "Office Stationery",
      text: "Boost productivity with our office stationery.",
      icon: "fa-briefcase",
      category: "Office Supplies",
    },
    {
      title: "Beauty Products",
      text: "Look and feel your best with our beauty products.",
      icon: "fa-heart",
      category: "Health and Beauty Products",
    },
    {
      title: "Camping and Hiking Gear",
      text: "Gear up for outdoor adventures with camping and hiking equipment.",
      icon: "fa-compass",
      category: "Camping and Hiking Gear",
    },
  
  
  
];


const listItems = cards.map((item) => (
  <Grid item xs={2} sm={4} md={4} key={item.title}>
    <Card
      style={{
        width: "200px",
        height: "220px",
        cursor: "pointer",
      }}
    >
      <CardContent>
      <Typography gutterBottom variant="h5" component="div">
  <FontAwesomeIcon icon={item.icon} /> {item.title}
</Typography>
<Typography variant="body2" color="text.secondary">
  {item.text}
</Typography>
<Typography variant="body2" color="text.secondary">
  Category: {item.category}
</Typography>


       


      </CardContent>
    </Card>
  </Grid>
));