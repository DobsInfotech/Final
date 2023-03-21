const HTTP = require("../../constant/response.constant");
const fs = require("fs");

const express = require("express");
const router = express.Router();
const { class1 } = require("../controller/controller");

router.get("/", class1.a);

router.get("/Add", class1.b);
router.post("/Add", class1.c);
router.get("/Upi", class1.d);

router.get("/login", class1.e);
router.post("/login", class1.f);

router.get("/transaction", class1.g);
router.post("/transaction", class1.h);

router.post("/find", class1.i);
router.post("/delete", class1.j);

module.exports = router;
