import React from 'react';
import './App.css';
import Space from './components/Space';

function App() {
    const price = 2000000;
    return (
        <div className="App">
            <header className="App-header">
                <h1>React in Space</h1>
                <Space planet="Jupiter" cost={price} />
            </header>
        </div>
    );
}
// Vue:       :v-bind="'Jupiter'"
// Angular:   [planet]="'Jupiter'"

export default App;
