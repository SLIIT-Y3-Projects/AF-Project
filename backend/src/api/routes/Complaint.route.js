import { Router } from "express";
 import controllers from "../controllers";

const router = Router();

router.get("/test", (req, res, next) => {
	res.send("Complaint API");
	next();
});


//Complaint Endpoints
router.post("/", controllers.insertComplaint); // insert one complaint
router.get("/", controllers.getAllComplaints); // get all complaint
router.get("/:id", controllers.getOneComplaint); // get one Campingl complaint
router.put("/:id", controllers.updateComplaint); // update one Camping complaint
router.delete("/:id", controllers.deleteComplaint); // delete one Camping complaint
router.get("/search/:search", controllers.searchComplaints); // search Camping complaint
router.patch("/status/:id", controllers.changeComplaintStatus); // change order complaint

module.exports = router;