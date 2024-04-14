const heading = React.createElement(
  'h1',
  { id: 'heading' },
  'Hello World from React!'
);

const parent = React.createElement('div', { id: 'parent' }, [
  React.createElement('div', { id: 'child' }, heading),
  React.createElement('h2', { id: 'sibling' }, 'Im a sibling to child'),
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(parent);
