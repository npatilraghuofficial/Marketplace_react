import React, { useState } from "react";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";
import Card from "react-animated-3d-card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";

import "bootstrap/dist/css/bootstrap.min.css";

export default function DividerStack() {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 4; // Adjust the number of items per page as needed
  const pageCount = Math.ceil(cards.length / itemsPerPage);

  const handlePageClick = ({ selected }) => {
    console.log("Current Page:", selected);
    setCurrentPage(selected);
  };
  
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentCards = cards.slice(startIndex, endIndex);

  return (
    <>
      <br />
      <div className="container">
        <div className="row">
          <h3>Trending Auctions</h3>
          
        </div>
        <h6>See what's popular across thousands of Auctions</h6>
        <br />

        <div className="row">
          {currentCards.map((card, index) => (
            <div key={index} className="col-md-2 mb-4">
              <Card
                style={{
                  width: "350px",
                  height: "500px",
                  cursor: "pointer",
                  overflowX: "auto",
                  backgroundImage: 'url("")',
                  backgroundSize: "cover",
                }}
              >
                <CardContent>
                  <CardMedia
                    component="img"
                    height="200"
                    image={card.image}
                    alt="Auction Item Image"
                  />

                  <Typography gutterBottom variant="h6" component="div">
                    {card.title}
                  </Typography>
                  <h6 className="mb-0">{card.productName}</h6>
                  <h6 className="mb-0">{card.productNumber}</h6>
                  <h6 className="mb-0">Initial Bidding: {card.initialBidding}</h6>
                  <div className="d-flex flex-column">
                    <span className="badge bg-primary">Auction ID: {card.auctionId}</span>
                    <span className="badge bg-success">Start Date: {card.startDate}</span>
                    <span className="badge bg-danger">End Date: {card.endDate}</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
        <hr />

        {/* React-Paginate with Bootstrap classes */}
        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageClick}
          containerClassName={"pagination justify-content-center"}
          activeClassName={"active"}
          previousClassName={"page-item"}
          nextClassName={"page-item"}
          previousLinkClassName={"page-link"}
          nextLinkClassName={"page-link"}
          pageClassName={"page-item"}
          pageLinkClassName={"page-link"}
        />
      </div>
    </>
  );
}

const cards = [
  {
    title: "Auction Item 1",
    auctionId: "12345",
    productName: "Product 1",
    productNumber: "P001",
    startDate: "2023-09-15",
    endDate: "2023-09-20",
    initialBidding: 100,
    image: "https://media.ldlc.com/ld/products/00/05/88/62/LD0005886202_1.jpg",
  },
  {
    title: "Auction Item 2",
    auctionId: "67890",
    productName: "Product 2",
    productNumber: "P002",
    startDate: "2023-09-18",
    endDate: "2023-09-25",
    initialBidding: 150,
    image:"https://brain-images-ssl.cdn.dixons.com/2/2/10165822/u_10165822.jpg",
  },
  {
    title: "Auction Item 3",
    auctionId: "67890",
    productName: "Product 3",
    productNumber: "P003",
    startDate: "2023-09-18",
    endDate: "2023-09-25",
    initialBidding: 150,
    image:"https://th.bing.com/th/id/OIP.B7XEaC7UBDMzcjYQjrhHZAHaHa?pid=ImgDet&rs=1"
  },
  {
    title: "Auction Item 4",
    auctionId: "67894",
    productName: "Product 4",
    productNumber: "P002",
    startDate: "2023-09-18",
    endDate: "2023-09-25",
    initialBidding: 154,
    image:"https://th.bing.com/th/id/OIP.4LKQ2-Q2L4_q-6mWxUgu_AHaHd?pid=ImgDet&rs=1"
  },
  {
    title: "Auction Item 5",
    auctionId: "67890",
    productName: "Product 2",
    productNumber: "P002",
    startDate: "2023-09-18",
    endDate: "2023-09-25",
    initialBidding: 150,
    image:"https://i.pinimg.com/originals/be/3b/38/be3b38e5979d4642643443eac9eedd3c.jpg"
  },
  {
    title: "Auction Item 6",
    auctionId: "67890",
    productName: "Product 2",
    productNumber: "P002",
    startDate: "2023-09-18",
    endDate: "2023-09-25",
    initialBidding: 150,
    image:"https://th.bing.com/th/id/OIP.9oJ6vUE8ulj3WWFvMxXkygHaHa?pid=ImgDet&rs=1",
  },
  {
    title: "Auction Item 7",
    auctionId: "67890",
    productName: "Product 2",
    productNumber: "P002",
    startDate: "2023-09-18",
    endDate: "2023-09-25",
    initialBidding: 150,
    image:"https://th.bing.com/th/id/OIP.jWWfe03XZqzW3f4qkcl_xAHaEK?pid=ImgDet&rs=1",
  },
  {
    title: "Auction Item 8",
    auctionId: "67890",
    productName: "Product 2",
    productNumber: "P002",
    startDate: "2023-09-18",
    endDate: "2023-09-25",
    initialBidding: 150,
    image:"https://th.bing.com/th/id/OIP.8msqONHjANcUHVBEbfdohQHaFj?pid=ImgDet&rs=1",
  },

  {
    title: "Auction Item 8",
    auctionId: "67890",
    productName: "Product 2",
    productNumber: "P002",
    startDate: "2023-09-18",
    endDate: "2023-09-25",
    initialBidding: 150,
    image:"https://i1.wp.com/sarkisiansjewelry.com/wp-content/uploads/2018/11/Round-Diamond-Halo-Engagement-Ring-LT7877-2.jpg?fit=2348%2C2348&ssl=1",
  },

  
];
