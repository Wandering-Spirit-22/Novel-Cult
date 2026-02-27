const express = require('express');
const { Client } = require('@elastic/elasticsearch');
const { title } = require('process');
const app = express();
const port = 3001;

// Configure Elasticsearch client
const esClient = new Client({
  node: 'https://f45a7b10955b4af79745fe0c7b45d333.us-central1.gcp.cloud.es.io:443', // Your Elasticsearch endpoint
  auth: {
    username: 'thefool', // Default username
    password: 'thefool2210' // Change to your password
  }
});

// Enable CORS
app.use(require('cors')());
app.use(express.json());

// Search endpoint
app.post('/api/search', async (req, res) => {
  try {
    const { query } = req.body;
    
    const { body } = await esClient.search({
      index: 'novels', // Replace with your index
      body: {
        query: {
          match: { 
            content: title // Field to search
          }
        }
      }
    });

    res.json(body.hits.hits);
  } catch (error) {
    console.error('Elasticsearch error:', error);
    res.status(500).json({ error: 'Search failed' });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});