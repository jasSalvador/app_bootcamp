import Bootcamp from "../models/bootcamp.model.js";
import User from "../models/user.model.js";


//Obtener todos los bootcamps con sus usuarios
export const findAll = async (req, res) => {
    try {
        const bootcamps = await Bootcamp.findAll({
            attributes:['id', 'title', 'cue', 'description'],
            include: [
                {
                    model: User,
                    as: "users",
                    through: {attributes: []},
                    attributes:['id', 'firstName', 'lastName', 'email']
                },
            ],
        });
        res.send({ code: 200, data: bootcamps });
    } catch (error) {
        res.status(500).send({
            code: 500,
            message: "Error a  consultar los bootcamps",
        });
    }
};


//crear y guardar bootcamp
export const createBootcamp = async (req, res) => {
    try {
        let { title, cue, description } = req.body;

        const [bootcamp, created] = await Bootcamp.findOrCreate({
            where: { title },
            defaults: {
                title,
                cue,
                description,
            },
        });

        if (!created) {
            return res.status(400).send({ code: 400, message: `Bootcamp ya existe.` })
        }

        res.status(201).send({
            code: 201,
            message: `Bootcamp ${bootcamp.title} agregado con exito.`,
        });
    } catch (error) {
        console.log(error)
        res.status(500).send({ code: 500, message: error.message });
    }
};


//vincula usuarios y bootcamp
export const addUser = async (req, res) => {
    try {
        let {idBootcamp, idUser} = req.body;

        let user = await User.findByPk(idUser)
        let bootcamp = await Bootcamp.findByPk(idBootcamp)
        if(!user || !bootcamp){
            res.status(404).send({
                code: 404,
                message: 'No se encontro el usuario o el bootcamp.',
            })
        }
        await bootcamp.addUser(user)

        res.status(201).send({
            code: 201,
            message: `Usuario ${user.firstName}, con ID: ${user.id} agregado con exito al bootcamp ${bootcamp.title}.`,
        });

    } catch (error) {
        console.log(error)
        res.status(500).send({ code: 500, message: error.message });
    }
};


//encuentra los bootcamp por Id y muestra sus usuarios vinculados
export const findById = async (req, res) => {
    try {
        let { id } = req.params;

        const bootcamp = await Bootcamp.findOne({
            where: { id },
            attributes:['id', 'title', 'cue', 'description'],
            include: {
                model: User,
                as: "users",
                through: { attributes: [] },
                attributes: ['id', 'firstName', 'lastName', 'email']
            },
        });
        if(!bootcamp){
            res.status(404).send({
                code: 404,
                message:'El bootcamp no existe.'
            })
        }
        res.send({ code: 200, data: bootcamp });
    } catch (error) {
        res.status(500).send({
            code: 500,
            message: error.message,
        });
    }
};
