const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Sequelize, DataTypes } = require('sequelize');

// Create a new Express application
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Initialize Sequelize
const sequelize = new Sequelize('project_management', 'root', 'sparky1225', {
  host: 'localhost',
  dialect: 'mysql',
});

// Test database connection
sequelize.authenticate()
  .then(() => console.log('Database connected...'))
  .catch(err => console.log('Error: ' + err));

// Define models
const Client = sequelize.define('Client', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING
  },
  phone: {
    type: DataTypes.STRING
  },
  address: {
    type: DataTypes.TEXT
  }
});

const ClientMeeting = sequelize.define('ClientMeeting', {
  clientId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Client, 
      key: 'id'
    }
  },
  meetingDate: {
    type: DataTypes.DATE,
    allowNull: false
  },
  notes: {
    type: DataTypes.TEXT
  }
}, {
  tableName: 'clientmeetings' // Make sure to reference the correct table name
});

// Sync models
sequelize.sync();

// Routes
app.get('/', (req, res) => res.send('API Running'));

// Create a new client
app.post('/api/clients', async (req, res) => {
  try {
    const client = await Client.create(req.body);
    res.json(client);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get all clients
app.get('/api/clients', async (req, res) => {
  try {
    const clients = await Client.findAll();
    res.json(clients);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Schedule a client meeting
app.post('/api/meetings', async (req, res) => {
  try {
    const meeting = await ClientMeeting.create({
      clientId: req.body.clientId,
      meetingDate: req.body.date,
      notes: req.body.notes
    });
    res.json(meeting);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get all meetings
app.get('/api/meetings', async (req, res) => {
  try {
    const meetings = await ClientMeeting.findAll();
    res.json(meetings);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Cancel a meeting
app.delete('/api/meetings/:id', async (req, res) => {
  try {
    const meetingId = req.params.id;
    await ClientMeeting.destroy({ where: { id: meetingId } });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
