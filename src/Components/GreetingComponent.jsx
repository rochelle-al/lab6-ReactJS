import React from 'react';

function GreetingComponent(props) {
  const { name, children } = props;

  return (
    <div>
      <h2>Hello {name || 'World'}</h2>
      {children && <p>{children}</p>}
    </div>
  );
}

export default GreetingComponent;
