import React from 'react';

export default props => (
    <div>
        <h1>Familia</h1>
        {/* Funciona somente para um elemento */}
        {React.cloneElement(props.children, {...props})}
    </div>
);