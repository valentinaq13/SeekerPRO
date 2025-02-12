const routerConversation = require("express").Router();
const { Conversation, Postulant, Business } = require("../../db");
const { Op } = require("sequelize");

//new conversation (or "ROOM")

routerConversation.post("/", async (req, res) => {
	const { businessId, postulantId } = req.body;

	try {
		const business = await Business.findByPk(businessId);
		const postulant = await Postulant.findByPk(postulantId);

		const savedConversation = await Conversation.findAll({
			where: {
				members: [businessId, postulantId],
			}
		});
		if(savedConversation.length === 0){
			const newConversation= await Conversation.create({
				members: [businessId, postulantId],
			})
			await business.addConversation(newConversation);
			await postulant.addConversation(newConversation);

			return res.status(200).json(newConversation);
		} else {
	
			res.status(200).json(savedConversation[0]);
		}

		
	} catch (err) {
		console.log(err);
	}
});

//get conversation of all users

routerConversation.get("/", async (req, res) => {
	const conversation = await Conversation.findAll();
	console.log(conversation)
	res.status(200).send(conversation);
});

//get conversation of a particular user from business

routerConversation.get("/business/:userId", async (req, res) => {
	const { userId } = req.params;
	try {
		const conversation = await Conversation.findAll({
			where: {
				fk_business: userId,
			},
		});
		res.status(200).send(conversation);
	} catch (err) {
		res.status(500).json(err);
	}
});

//get conversation of a particular user from postulant

routerConversation.get("/postulant/:userId", async (req, res) => {
	const { userId } = req.params;
	try {
		const conversation = await Conversation.findAll({
			where: {
				fk_postulant: userId,
			},
		});
		res.status(200).send(conversation);
	} catch (err) {
		res.status(500).json(err);
	}
});

//get conversation that includes two userId from one business and one particular postulant

routerConversation.get("/find/:businessId/:postulantId", async (req, res) => {
	try {
		const conversation = await Conversation.findAll({
			where: {
				members: [req.params.businessId, req.params.postulantId],
			},
		});
		conversation.length
			? res.status(200).json(conversation)
			: res.status(400).send("No hay conversación");
	} catch (err) {
		res.status(500).json(err);
	}
});

//get all data from a particular postulant

routerConversation.get("/dataPostulant/:postulantId", async (req, res) => {
	const { postulantId } = req.params;

	try {
		if (postulantId) {
			const allPostulant = await Postulant.findAll({
				where: {
					id: postulantId,
				},
			})
			allPostulant
				? res.status(200).send(allPostulant)
				: res.status(400).send("No applicant found");
		}
	} catch (error) {
		res.status(400).send("ERROR" + error);
	}
});

module.exports = routerConversation;