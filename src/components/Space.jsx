import React from 'react';

// props == { planet: 'Jupiter', cost: '2000000' }
const Space = ({ planet, cost }) => (
    <div>Space! Let's go to {planet}, it only costs {cost}</div>
)

export default Space;
