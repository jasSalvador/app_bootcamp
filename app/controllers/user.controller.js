import User from "../models/user.model.js";
import Bootcamp from "../models/bootcamp.model.js";



export const findAll = async (req, res) => {
    try {
        const users = await User.findAll({
            include: [
                {
                    model: Bootcamp,
                    as: "bootcamps",
                    attributes: {
                        exclude: ["createdAt", "updatedAt"],
                    },
                },
            ],
        });
        res.send({ code: 200, data: users });
    } catch (error) {
        res.status(500).send({
            code: 500,
            message: "Error al consultar los usuarios",
        });
    }
};




//crear y guardar usuario
export const createUser = async (req, res) => {
    try {
        let { firstName, lastName, email } = req.body;

        const [user, created] = await User.findOrCreate({
            where: { email },
            defaults: {
                firstName,
                lastName,
                email,
            },
        });

        if (!created) {
            return res.status(400).send({ code: 400, message: `Usuario con email (${user.email}) ya existe.` })
        }

        res.status(201).send({
            code: 201,
            message: `Usuario ${user.firstName}, con ID: ${user.id} creado con exito.`,
        });
    } catch (error) {
        console.log(error)
        res.status(500).send({ code: 500, message: error.message });
    }
};


//obtener los bootcamp de un usuario
export const findUserById = async (req, res) => {
    try {
        let {id} = req.params;

        const user = await User.findOne({
            where: { id },
            include: {
                model: Bootcamp,
                as: "bootcamps",
                through: { attributes: [] },
                attributes: ["id", "title"]
            },
        });
        res.send({ code: 200, data: user });
    } catch (error) {
        res.status(500).send({
            code: 500,
            message: error.message,
        });
    }
};