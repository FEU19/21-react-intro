import React, { useState } from 'react';
import './App.css';
import Space from './components/Space';

function App() {
    // Eventuella konstanter
    const price = 2000000;
    const infoList = [
        { name: 'Jupiter', nr: 5 },
        { name: 'Mars', nr: 4 },
        { name: 'Pluto', nr: 9 }
    ];

    // State-variabler överst
    const [selectedPlanet, setPlanet] = useState('Pluto');
    // Utan destructuring assignment:
    // const stateList = useState('Pluto');
    // const selectedPlanet = stateList[0];
    // const setPlanet = stateList[1];

    // Eventuella funktioner
    const setPlanetJupiter = () => setPlanet('Jupiter');
    // Utan arrow function:
    // function setPlanetJupiter() { return setPlanet('Jupiter'); }

    const jsxList = infoList.map(planet => (
        <div key={planet.name}>
            <strong>{planet.name}</strong> is number {planet.nr}.
        </div>
    ))

    // Returnera JSX
    return (
        <div className="App">
            <header className="App-header">
                <h1>React in Space</h1>
            </header>
            <main>
                <h2>Where do you want to go?</h2>
                <div>
                    <button onClick={setPlanetJupiter}> Jupiter </button>
                    <button onClick={() => setPlanet('Mars')}> Mars </button>
                    <button onClick={() => setPlanet('Pluto')}> Pluto </button>
                </div>
                <Space planet={selectedPlanet} cost={price} />

                <div className="planet-list">
                    {jsxList}
                </div>
            </main>
        </div>
    );
}
// React:     planet={'Jupiter'}  eller ="Jupiter"
// Vue:       :planet="'Jupiter'"
// Angular:   [planet]="'Jupiter'"

// React:     onClick
// Vue:       @click
// Angular:   (click)

export default App;
