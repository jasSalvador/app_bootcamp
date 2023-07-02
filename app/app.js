import express from "express";
import cors from 'cors';
import { create } from 'express-handlebars';
import router from './routes/views.routes.js';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import usersRoutes from "./routes/usuarios.routes.js";
import bootcampRoutes from "./routes/bootcamp.routes.js";
import viewsRoutes from "./routes/views.routes.js";
//import exphbs from 'express-handlebars';


// Get the current directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


//ejecute express
const app = express();


// Create handlebars instance
const hbs = create({
    partialsDir: [path.join(__dirname, 'views/partials')],
});


// Configure handlebars as the template engine for rendering
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));



// MIDDLEWARES
app.use(express.json());
app.use(cors());


//publicamos botstrap
app.use('/bootstrap', express.static('./node_modules/bootstrap/dist/'));


// Publish the 'public' folder
app.use(express.static('public'));


// ROUTES
app.use('/api/', router);


app.use('/', viewsRoutes);
app.use("/api/users", usersRoutes);
app.use("/api/bootcamp", bootcampRoutes);


/* app.use("/", (req, res) => {
    res.send({
        message: 'Bienvenido a la API Bootcamp'
    });
});  */



export default app;
