require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

// Conectar a MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Conectado a MongoDB');
  })
  .catch(err => console.log(err));

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.static('views'));  // Sirve archivos estáticos (CSS, imágenes)

// Modelo de datos
const ContactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
});

const Contact = mongoose.model('Contact', ContactSchema);

// Ruta para servir el formulario
app.get('/contacto.html', (req, res) => {
  res.sendFile(__dirname + '/views/contacto.html');
});

// Ruta POST para recibir los datos del formulario
app.post('/submit', async (req, res) => {
  const { name, email, message } = req.body;

  try {
    // Guardar en la base de datos
    const newContact = new Contact({ name, email, message });
    await newContact.save();

    // Responder con éxito si se guardó correctamente
    res.status(200).send('Formulario enviado correctamente y datos guardados en la base de datos.');
  } catch (err) {
    res.status(500).send('Error al guardar los datos.');
  }
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor funcionando en http://localhost:${port}`);
});
