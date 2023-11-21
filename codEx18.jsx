/*Dynamic Styling with CSS Classes
Your task is to enhance the demo app that's given to you such that clicking the "Yes" and "No" buttons changes the styling of the h1 heading element.

Whenever the "Yes" button is clicked, the "highlight-green" CSS class should be set on the h1 element. For the "No" button, it's the "highlight-red" class that must be applied.

If not button was clicked yet, no CSS class should be added to the h1 element.

*/
import React from 'react'


function App() {
    const [highlight, setHighlight] = React.useState('')
    const handleYesClick = () => {
        setHighlight('highlight-green');
    };

    const handleNoClick = () => {
        setHighlight('highlight-red');
    };

    return (
        <div id="app">
            <h1 className={highlight}>CSS is great!</h1>
            <menu>
                <li>
                    <button onClick={handleYesClick}>Yes</button>
                </li>
                <li>
                    <button onClick={handleNoClick}>No</button>
                </li>
            </menu>
        </div>
    );
}

export default App;
