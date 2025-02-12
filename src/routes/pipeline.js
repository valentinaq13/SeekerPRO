const { Router } = require("express");

const {
    New,
    Review,
    Contact,
    InterviewTech,
    InterviewRRHH,
    Offered, Hired, Rejected,
    Business,
    Vacancy,
    Postulant,
    Language,
    Technology,
    Skill,
    Login,
    Seniority,
} = require("../db");
const { Op } = require("sequelize");


const pipeline = Router();

pipeline.post('/:id', async (req, res) => {
    try {
        const id = req.params.id

        const finderVacancy = await Vacancy.findByPk(id)

        console.log(finderVacancy)

        const newStatus = await New.create({
            name: finderVacancy.name
        })

        const reviewStatus = await Review.create({
            name: finderVacancy.name
        })

        const contactStatus = await Contact.create({
            name: finderVacancy.name
        })

        const interviewRRHHStatus = await InterviewRRHH.create({
            name: finderVacancy.name
        })

        const interviewTechStatus = await InterviewTech.create({
            name: finderVacancy.name
        })
        const offeredStatus = await Offered.create({
            name: finderVacancy.name
        })
        const hiredStatus = await Hired.create({
            name: finderVacancy.name
        })
        const rejectedStatus = await Rejected.create({
            name: finderVacancy.name
        })

        await finderVacancy.setNew(newStatus)
        await finderVacancy.setReview(reviewStatus)
        await finderVacancy.setContact(contactStatus)
        await finderVacancy.setInterviewRRHH(interviewRRHHStatus)
        await finderVacancy.setInterviewTech(interviewTechStatus)
        await finderVacancy.setOffered(offeredStatus)
        await finderVacancy.setHired(hiredStatus)
        await finderVacancy.setRejected(rejectedStatus)

        res.json(finderVacancy)

    } catch (e) {
        console.log(e)
    }
})

pipeline.put('/:idVacancy/removeAll', async (req, res) => {
    const { idPostulant } = req.body
    const { idVacancy } = req.params

    try {
        const finderPostulant = await Postulant.findByPk(idPostulant);

        const finderNew = await New.findAll({
            where: {
                fk_vacancy: idVacancy
            }
        })

        if(finderNew) await finderPostulant.removeNew(finderNew)

        const finderReview = await Review.findAll({
            where: {
                fk_vacancy: idVacancy
            }
        })
        if(finderReview)  await finderPostulant.removeReview(finderReview);

        const finderContact = await Contact.findAll({
            where: {
                fk_vacancy: idVacancy
            }
        })
        if(finderContact) await finderPostulant.removeContact(finderContact)

        const finderInterviewRRHH = await InterviewRRHH.findAll({
            where: {
                fk_vacancy: idVacancy
            }
        })
        if(finderInterviewRRHH) await finderPostulant.removeInterviewRRHH(finderInterviewRRHH)

        const finderInterviewTech = await InterviewTech.findAll({
            where: {
                fk_vacancy: idVacancy
            }
        })
       if(finderInterviewTech) await finderPostulant.removeInterviewTech(finderInterviewTech)

        const finderOffered = await Offered.findAll({
            where: {
                fk_vacancy: idVacancy
            }
        })
        if (finderOffered) await finderPostulant.removeOffered(finderOffered)

        const finderHired = await Hired.findAll({
            where: {
                fk_vacancy: idVacancy
            }
        })
        if (finderHired) await finderPostulant.removeHired(finderHired)

        const finderRejected = await Rejected.findAll({
            where: {
                fk_vacancy: idVacancy
            }
        })
        if(finderRejected) await finderPostulant.removeRejected(finderRejected)

        res.status(200).json('hechoooooo')

    } catch (e) {
        console.log(e)
    }
})

//ruta que trae los postulantes en un estado determinado en una vacante especifica (id vacante)

pipeline.get('/getPostulantsNew/:id', async (req , res) => {
    const {id} = req.params
    try{
        const statusNew = await New.findAll({
            where : {
                fk_vacancy : id
            },
            include : [
                {model : Postulant}
            ]
        })
    const result = statusNew[0].postulants
     res.status(200).json(result)
    }catch(e){
        console.log(e)
    }
});

pipeline.get('/getPostulantsReview/:id', async (req , res) => {
    const {id} = req.params
    try{
        const statusReview = await Review.findAll({
            where : {
                fk_vacancy : id
            },
            include : [
                {model : Postulant}
            ]
        })
        const result = statusReview[0].postulants
        res.status(200).json(result)
    }catch(e){
        console.log(e)
    }
});

pipeline.get('/getPostulantsContact/:id', async (req , res) => {
    const {id} = req.params
 
    try{

        const statusContact = await Contact.findAll({
            where : {
                fk_vacancy : id
            },
            include : [
                {model : Postulant}
            ]
        })
     
        const result = statusContact[0].postulants
        res.status(200).json(result)
    }catch(e){
        console.log(e)
    }
});


pipeline.get('/getPostulantsInterviewRRHH/:id', async (req , res) => {
    const {id} = req.params
 
    try{

        const statusInterviewRRHH = await InterviewRRHH.findAll({
            where : {
                fk_vacancy : id
            },
            include : [
                {model : Postulant}
            ]
        })
     
        const result = statusInterviewRRHH[0].postulants
        res.status(200).json(result)
    }catch(e){
        console.log(e)
    }
});


pipeline.get('/getPostulantsInterviewTech/:id', async (req , res) => {
    const {id} = req.params
   
    try{

        const statusInterviewTech = await InterviewTech.findAll({
            where : {
                fk_vacancy : id
            },
            include : [
                {model : Postulant}
            ]
        })
     
        const result = statusInterviewTech[0].postulants
        res.status(200).json(result)
    }catch(e){
        console.log(e)
    }
});



pipeline.get('/getPostulantsOffered/:id', async (req, res) => {
    const {id} = req.params
  
    try{

        const statusOffered = await Offered.findAll({
            where : {
                fk_vacancy : id
            },
            include : [
                {model : Postulant}
            ]
        })

     
        const result = statusOffered[0].postulants
        res.status(200).json(result)
    }catch(e){
        console.log(e)
    }
})

pipeline.get('/getPostulantsHired/:id', async (req, res) => {
    const {id} = req.params
    
    try{

        const statusHired = await Hired.findAll({
            where : {
                fk_vacancy : id
            },
            include : [
                {model : Postulant}
            ]
        })

     
        const result = statusHired[0].postulants
        res.status(200).json(result)
    }catch(e){
        console.log(e)
    }
})

pipeline.get('/getPostulantsRejected/:id', async (req, res) => {
    const {id} = req.params
 
    try{

        const statusRejected = await Rejected.findAll({
            where : {
                fk_vacancy : id
            },
            include : [
                {model : Postulant}
            ]
        })

     
        const result = statusRejected[0].postulants
        res.status(200).json(result)
    }catch(e){
        console.log(e)
    }
})

//***********NEW************* */

pipeline.put('/:idVacancy/addNew', async (req, res) => {
    const { idPostulant } = req.body
    const { idVacancy } = req.params
    try {
        // const finderVacancy = await Vacancy.findByPk(idVacancy);
        const finderNew = await New.findAll({
            where: {
                fk_vacancy: idVacancy
            }
        })
        const finderPostulant = await Postulant.findByPk(idPostulant);
        console.log(finderPostulant)

        await finderPostulant.addNew(finderNew)

        res.send('New, waiting for review')

    } catch (e) {
        console.log(e)
    }
});

pipeline.put('/:idVacancy/removeNew', async (req, res) => {
    const { idPostulant } = req.body
    const { idVacancy } = req.params
    try {
        // const finderVacancy = await Vacancy.findByPk(idVacancy);
        const finderNew = await New.findAll({
            where: {
                fk_vacancy: idVacancy
            }
        })
        const finderPostulant = await Postulant.findByPk(idPostulant);
        console.log(finderPostulant)

        await finderPostulant.removeNew(finderNew)
        res.send('hecho')
    } catch (e) {
        console.log(e)
    }
});

//***********REVIEW************* */
pipeline.put('/:idVacancy/addReview', async (req, res) => {
    const { idPostulant } = req.body
    const { idVacancy } = req.params
    try {
        // const finderVacancy = await Vacancy.findByPk(idVacancy);
        const finderReview = await Review.findAll({
            where: {
                fk_vacancy: idVacancy
            }
        })
        const finderPostulant = await Postulant.findByPk(idPostulant);
        console.log(finderPostulant)
        await finderPostulant.addReview(finderReview)
        res.send('New, wainting for rewiew')
    } catch (e) {
        console.log(e)
    }
});

pipeline.put('/:idVacancy/removeReview', async (req, res) => {
    const { idPostulant } = req.body
    const { idVacancy } = req.params
    try {
        // const finderVacancy = await Vacancy.findByPk(idVacancy);
        const finderReview = await Review.findAll({
            where: {
                fk_vacancy: idVacancy
            }
        })
        const finderPostulant = await Postulant.findByPk(idPostulant);


        await finderPostulant.removeReview(finderReview)
        res.send('hecho')
    } catch (e) {
        console.log(e)
    }
});

pipeline.put('/:idVacancy/removeAll', async (req, res) => {
    const { idPostulant } = req.body
    const { idVacancy } = req.params

    try {
        const finderPostulant = await Postulant.findByPk(idPostulant);

        const finderNew = await New.findAll({
            where: {
                fk_vacancy: idVacancy
            }
        })

        if(finderNew) await finderPostulant.removeNew(finderNew)

        const finderReview = await Review.findAll({
            where: {
                fk_vacancy: idVacancy
            }
        })
        if(finderReview)  await finderPostulant.removeReview(finderReview);

        const finderContact = await Contact.findAll({
            where: {
                fk_vacancy: idVacancy
            }
        })
        if(finderContact) await finderPostulant.removeContact(finderContact)

        const finderInterviewRRHH = await InterviewRRHH.findAll({
            where: {
                fk_vacancy: idVacancy
            }
        })
        if(finderInterviewRRHH) await finderPostulant.removeInterviewRRHH(finderInterviewRRHH)

        const finderInterviewTech = await InterviewTech.findAll({
            where: {
                fk_vacancy: idVacancy
            }
        })
       if(finderInterviewTech) await finderPostulant.removeInterviewTech(finderInterviewTech)

        const finderOffered = await Offered.findAll({
            where: {
                fk_vacancy: idVacancy
            }
        })
        if (finderOffered) await finderPostulant.removeOffered(finderOffered)

        const finderHired = await Hired.findAll({
            where: {
                fk_vacancy: idVacancy
            }
        })
        if (finderHired) await finderPostulant.removeHired(finderHired)

        const finderRejected = await Rejected.findAll({
            where: {
                fk_vacancy: idVacancy
            }
        })
        if(finderRejected) await finderPostulant.removeRejected(finderRejected)

        res.status(200).json('hechoooooo')

    } catch (e) {
        console.log(e)
    }
})

//***********CONTACT************* */

pipeline.put('/:idVacancy/addContact', async (req, res) => {
    const { idPostulant } = req.body
    const { idVacancy } = req.params
    try {
        // const finderVacancy = await Vacancy.findByPk(idVacancy);
        const finderContact = await Contact.findAll({
            where: {
                fk_vacancy: idVacancy
            }
        })
        const finderPostulant = await Postulant.findByPk(idPostulant);

        await finderPostulant.addContact(finderContact)
        res.send('Serás contactado a la brevedad')
    } catch (e) {
        console.log(e)
    }
});

pipeline.put('/:idVacancy/removeContact', async (req, res) => {
    const { idPostulant } = req.body
    const { idVacancy } = req.params
    try {
        // const finderVacancy = await Vacancy.findByPk(idVacancy);
        const finderContact = await Contact.findAll({
            where: {
                fk_vacancy: idVacancy
            }
        })
        const finderPostulant = await Postulant.findByPk(idPostulant);

        await finderPostulant.removeContact(finderContact)
        res.send('hecho')
    } catch (e) {
        console.log(e)
    }
});
//***********INTERVIEWRRHH************* */

pipeline.put('/:idVacancy/addInterviewRRHH', async (req, res) => {
    const { idPostulant } = req.body
    const { idVacancy } = req.params
    try {
        // const finderVacancy = await Vacancy.findByPk(idVacancy);
        const finderInterviewRRHH = await InterviewRRHH.findAll({
            where: {
                fk_vacancy: idVacancy
            }
        })
        const finderPostulant = await Postulant.findByPk(idPostulant);

        await finderPostulant.addInterviewRRHH(finderInterviewRRHH)
        res.send('You pass to RRHH interview')
    } catch (e) {
        console.log(e)
    }
});

pipeline.put('/:idVacancy/removeInterviewRRHH', async (req, res) => {
    const { idPostulant } = req.body
    const { idVacancy } = req.params
    try {
        // const finderVacancy = await Vacancy.findByPk(idVacancy);
        const finderInterviewRRHH = await InterviewRRHH.findAll({
            where: {
                fk_vacancy: idVacancy
            }
        })
        const finderPostulant = await Postulant.findByPk(idPostulant);

        await finderPostulant.removeInterviewRRHH(finderInterviewRRHH)
        res.send('hecho')
    } catch (e) {
        console.log(e)
    }
});

//***********INTERVIEWTERCH************* */

pipeline.put("/:idVacancy/addInterviewTech", async (req, res) => {
    const { idPostulant } = req.body
    const { idVacancy } = req.params

    try {
        const finderPostulant = await Postulant.findByPk(idPostulant);

        const finderInterviewTech = await InterviewTech.findAll({
            where: {
                fk_vacancy: idVacancy
            }
        })
        await finderPostulant.addInterviewTech(finderInterviewTech)
        res.send('Se te contactará para definir una fecha para entrevista técnica')
    } catch (e) {
        console.log(e)
    }
})

pipeline.put("/:idVacancy/removeInterviewTech", async (req, res) => {
    const { idPostulant } = req.body
    const { idVacancy } = req.params

    try {
        const finderPostulant = await Postulant.findByPk(idPostulant);

        const finderInterviewTech = await InterviewTech.findAll({
            where: {
                fk_vacancy: idVacancy
            }
        })
        await finderPostulant.removeInterviewTech(finderInterviewTech)
        res.send('hecho')
    } catch (e) {
        console.log(e)
    }
})
//***********OFFERED************* */

pipeline.put("/:idVacancy/removeOffered", async (req, res) => {
    const { idPostulant } = req.body
    const { idVacancy } = req.params

    try {
        const finderPostulant = await Postulant.findByPk(idPostulant);

        const finderOffered = await Offered.findAll({
            where: {
                fk_vacancy: idVacancy
            }
        })
        await finderPostulant.removeOffered(finderOffered)
        res.send('hecho')
    } catch (e) {
        console.log(e)
    }
})

pipeline.put("/:idVacancy/addOffered", async (req, res) => {
    const { idPostulant } = req.body
    const { idVacancy } = req.params

    try {
        const finderPostulant = await Postulant.findByPk(idPostulant);

        const finderOffered = await Offered.findAll({
            where: {
                fk_vacancy: idVacancy
            }
        })
        await finderPostulant.addOffered(finderOffered)
        res.send('Felicitaciones! Has recibido una nueva propuesta laboral!')
    } catch (e) {
        console.log(e)
    }
})

//***********HIRED************* */
pipeline.put("/:idVacancy/removeHired", async (req, res) => {
    const { idPostulant } = req.body
    const { idVacancy } = req.params

    try {
        const finderPostulant = await Postulant.findByPk(idPostulant);

        const finderHired = await Hired.findAll({
            where: {
                fk_vacancy: idVacancy
            }
        })
        await finderPostulant.removeHired(finderHired)
        res.send('hecho')
    } catch (e) {
        console.log(e)
    }
});

pipeline.put("/:idVacancy/addHired", async (req, res) => {
    const { idPostulant } = req.body
    const { idVacancy } = req.params

    try {
        const finderPostulant = await Postulant.findByPk(idPostulant);

        const finderHired = await Hired.findAll({
            where: {
                fk_vacancy: idVacancy
            }
        })
        await finderPostulant.addHired(finderHired)
        res.send('Felicitaciones! Has sido contratado!')
    } catch (e) {
        console.log(e)
    }
});


//***********REJECTED************* */
pipeline.put("/:idVacancy/addRejected", async (req, res) => {
    const { idPostulant } = req.body
    const { idVacancy } = req.params

    try {
         const finderPostulant = await Postulant.findByPk(idPostulant);
        const finderRejected = await Rejected.findAll({
            where: {
                fk_vacancy: idVacancy
            }
        })
        await finderPostulant.addRejected(finderRejected)
        res.send('Lamentablemente se ha rechazado tu postulación.')
    } catch (e) {
        console.log(e)
    }
})

pipeline.put("/:idVacancy/removeRejected", async (req, res) => {
    const { idPostulant } = req.body
    const { idVacancy } = req.params

    try {
         const finderPostulant = await Postulant.findByPk(idPostulant);
        const finderRejected = await Rejected.findAll({
            where: {
                fk_vacancy: idVacancy
            }
        })
        await finderPostulant.removeRejected(finderRejected)
        res.send('hecho')
    } catch (e) {
        console.log(e)
    }
})

module.exports = pipeline;
