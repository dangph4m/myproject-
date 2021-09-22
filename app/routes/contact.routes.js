const contacts = require("../controllers/contact.controller");
const express = require("express");

module.exports =(app) => {
    var router = express.Router();

router.post("/", contacts.create);
router.get("/", contacts.findALL);
router.get("/favorite", contacts.findALLFavorite);
router.get("/:id", contacts.findOne);
router.put("/:id",contacts.update);
router.delete("/:id",contacts.delete);
router.delete("/",contacts.deleteALL);
app.use("/api/contacts", router);
};

