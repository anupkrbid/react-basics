import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));

const Header = () => (
  <div className="header">
    <div className="logo-container">
      <img
        className="logo"
        src="https://img.freepik.com/premium-vector/burger-icon-with-leaves-organic-concept_24640-19497.jpg?w=740"
      />
    </div>
    <div className="nav-items">
      <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Contact Us</li>
        <li>Cart</li>
      </ul>
    </div>
  </div>
);

const data = [
  {
    resturantName: 'Meghna Food',
    cuisine: 'North, South Indian',
  },

  {
    resturantName: 'KFC',
    cuisine: 'Amarican, Fast Food',
  },
];

const ResturantCard = ({ resturantName, cuisine }) => {
  return (
    <div className="resturant-card" style={{ backgroundColor: '#f0f0f0' }}>
      <img
        className="resturant-img"
        src="https://media.istockphoto.com/id/608005280/photo/mutton-rogan-josh-mutton-curry-indian-cuisine.jpg?s=2048x2048&w=is&k=20&c=0pTqPUVieOqLV-82u4X969mbkS3f-_-gRg8trqsrY0o="
      />
      <h3>{resturantName}</h3>
      <h4>{cuisine}</h4>
      <h4>4.4 Stars</h4>
      <h4>38 mins</h4>
    </div>
  );
};

const Body = () => (
  <div className="body">
    <div className="search">Search</div>
    <div className="search-results-container">
      {data.map((res) => (
        <ResturantCard
          key={res.resturantName}
          resturantName={res.resturantName}
          cuisine={res.cuisine}
        />
      ))}
    </div>
  </div>
);

const AppLayout = () => (
  <div className="app">
    <Header />
    <Body />
  </div>
);

root.render(<AppLayout />);
