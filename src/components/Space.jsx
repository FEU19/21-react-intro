import React from 'react';

// props == { planet: 'Jupiter', cost: '2000000' }
const Space = (props) => (
    <div>Space! Let's go to {props.planet}, it only costs {props.cost}</div>
)

export default Space;
