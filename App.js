const express = require('express');
const app = express();

app.use(express.json());

// Autres configurations et middlewares...

// Inclure les routes
const entityRoutes = require('./routes/entityRoutes');
app.use(entityRoutes);

// Lancement du serveur
app.listen(3000, () => {
  console.log('Le serveur est en écoute sur le port 3000');
});
