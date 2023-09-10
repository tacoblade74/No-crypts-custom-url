import './App.css';
import React, { useState } from 'react';
import HomePage from './pages/HomePage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ModelsPage from './pages/ModelsPage';
import useGetModels from './components/api';

function App() {
  const [apiKey, setApiKey] = useState(""); // State to store the API key
  const [apiKeyEntered, setApiKeyEntered] = useState(false); // State to track whether the API key has been entered
  const limit = 100;

  const { models: checkpoints, isPending, err } = useGetModels(
    apiKey,
    limit,
    "api/v1/models",
    "Checkpoint"
  );
  const { models: loras, isPendingL, errL } = useGetModels(
    apiKey,
    limit,
    "api/v1/models",
    "LORA"
  );

  const handleApiKeySubmit = () => {
    // Handle the API key submission
    setApiKeyEntered(true);
  };

  return (
    <Router>
      <div className="App">
        {!apiKeyEntered && (
          <div className="ApiKeyForm">
            <h2>Enter your API Key:</h2>
            <input
              type="text"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
            />
            <button onClick={handleApiKeySubmit}>Submit</button>
          </div>
        )}
        {apiKeyEntered && (
          <Switch>
            {err && <p>Error loading the pages... Oops!</p>}
            <Route exact path="/">
              {(isPending || isPendingL) && (
                <div className="isPending">
                  <h1>Loading .....</h1>
                </div>
              )}
              {(err || errL) && <div className="error">Error fetching stuff</div>}
              {!(isPending || isPendingL) && checkpoints && <HomePage />}
            </Route>

            <Route exact path="/models">
              {isPending && <p>Loading...</p>}
              {checkpoints && <ModelsPage models={checkpoints} />}
            </Route>

            <Route exact path="/loras">
              {isPendingL && <p>Loading...</p>}
              {loras && <ModelsPage models={loras} />}
            </Route>
          </Switch>
        )}
      </div>
    </Router>
  );
}

export default App;
