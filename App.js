import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));

// ---------------------------------------------------------------------

const heading = React.createElement('h1', { id: 'heading' }, 'Reacp Recap 🚀');
// root.render(heading);

// ---------------------------------------------------------------------

// JSX - is not HTML in JS, it is a HTML link syntax
// Parcel is transpiling the JSX to React.createElement using Babel
// which then converts into JS object using React
// before it reaches the browser

// React Element
const jsxHeading = <h1 id="heading">Recap React 🚀 JSX</h1>;
// root.render(jsxHeading);

// ----------------------------------------------------------------------

// React Components
// Class Based Components - OLD
// Functional Components - NEW

// Functional Component
const HeadingComponent = () => {
  return <h1>React Functional Component1 🚀</h1>;
};
const num = 10000;

// Component Composiion
const HeadingComponentShortHandSyntax = () => (
  <div>
    <HeadingComponent></HeadingComponent>
    <HeadingComponent />
    {HeadingComponent()}
    <h1>React Functional Component2 🚀</h1>
    <h2>{num}</h2>
  </div>
);

// root.render(<HeadingComponent />);
root.render(<HeadingComponentShortHandSyntax />);

// ----------------------------------------------------------------------
