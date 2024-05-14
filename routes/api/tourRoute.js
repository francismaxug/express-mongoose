import express from "express";
import {
  createTour,
  deleteTour,
  getAllTours,
  getSingleTour,
  updateTour,
} from "../../controllers/tourController.js";

const router = express.Router();

router.post("/newTour", createTour);
router.get("/all-tours", getAllTours);
router
  .route("/tour/:id")
  .get(getSingleTour)
  .patch(updateTour)
  .delete(deleteTour);
router.get("/tour/:id", getSingleTour);

export default router;
