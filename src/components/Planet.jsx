import React from 'react';

// Planet är en "ointelligent" komponent - den ska inte göra något med sina props, bara visa dem. Det kallas för en "presentational component".
// Planet behöver inte någon "key" eftersom den inte har någon lista
const Planet = ({ name, nr }) => (
    <div>
        <strong>{name}</strong> is number {nr}.
    </div>
)

export default Planet;
