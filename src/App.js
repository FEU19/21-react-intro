import React, { useState } from 'react';
import './App.css';
import Space from './components/Space';

function App() {
    // State-variabler överst
    const price = 2000000;
    const [selectedPlanet, setPlanet] = useState('Pluto');

    // Eventuella funktion
    const setPlanetJupiter = () => setPlanet('Jupiter');

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
            </main>
        </div>
    );
}
// React:     planet={'Jupiter'}
// Vue:       :planet="'Jupiter'"
// Angular:   [planet]="'Jupiter'"

export default App;
