import Bootcamp from "../models/bootcamp.model.js";
import User from "../models/user.model.js";



export const getBootcamp = async (req, res) => {
    try {
        const bootcamps = await Bootcamp.findAll({
            include: [
                {
                    model: User,
                    as: "users",
                    attributes: {
                        exclude: ["createdAt", "updatedAt"],
                    },
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
        let { title, cue, description, id } = req.body;

        const user = await User.findByPk(id);

        if (!user) {
            return res.status(404).send({ code: 404, message: `Usuario con ID: ${id} no encontrado`})
        }

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

        await user.addBootcamp(bootcamp);

        res.status(201).send({
            code: 201,
            message: `Bootcamp ${bootcamp.title} agregado con exito.`,
        });
    } catch (error) {
        console.log(error)
        res.status(500).send({ code: 500, message: error.message });
    }
};