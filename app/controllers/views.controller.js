import db from '../database/database.js'


export const goHome = async (req, res) => {
    try {
        let result = 1;
        res.render('home');
    } catch (error) {
        if (error.code) {
            let messageError = returnError(error);
            console.log('Error al cargar Registro: ', messageError)
        }
    }
}


export const tableBootcamp = async (req, res) => {
    try {
        const query = 'SELECT * FROM bootcamps';
        const result = await db.query(query);
        //console.log(result)
        res.render('bootcamp', { bootcamps: result[0] });
        //console.log(result[1])
    } catch (error) {
        console.log('Error al cargar Registro:', error);
        res.render('error', { message: 'Error al cargar los datos' });
    }
} 


export const goContacto = async (req, res) => {
    try {
        let result = 1;
        res.render('contacto');
    } catch (error) {
        if (error.code) {
            let messageError = returnError(error);
            console.log('Error al cargar Registro: ', messageError)
        }
    }
}

export const formEnrollments = async (req, res) => {
    try {
        let result = 1;
        res.render('enrollments');
    } catch (error) {
        if (error.code) {
            let messageError = returnError(error);
            console.log('Error al cargar Registro: ', messageError)
        }
    }
}

