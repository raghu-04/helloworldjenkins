import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
    const [message, setMessage] = useState('');

    useEffect(() => {
        axios.get('http://localhost:5000/api')
            .then(response => setMessage(response.data.message))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Hello World CI/CD with Jenkins!</h1>
            <p>Backend says: {message}</p>
        </div>
    );
}

export default App;

