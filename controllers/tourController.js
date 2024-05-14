import Tour from "../models/tourModel.js";

const createTour = async (req, res) => {
  const { name, price, ratings } = req.body;
  try {
    const newTour = await Tour.create({ name, price, ratings });
    res.status(201).json({
      status: "success",
      data: {
        tour: newTour,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
};

const getAllTours = async (req, res) => {
  try {
    const tours = await Tour.find({});
    const totalTours = await Tour.countDocuments();
    console.log(totalTours);
    res.status(200).json({
      status: "success",
      results: tours.length,
      data: {
        tours,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
};

const getSingleTour = async (req, res) => {
  const { id } = req.params;
  try {
    const tour = await Tour.findById(id);
    res.status(200).json({
      status: "success",
      data: {
        tour,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
};

const updateTour = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, price, ratings } = req.body;
    const tour = await Tour.findByIdAndUpdate(
      id,
      { name, price, ratings },
      { new: true, runValidators: true }
    );
    res.status(200).json({
      status: "document updated successfully",
      data: {
        tour,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
};

const deleteTour = async (req, res) => {
  try {
    const { id } = req.params;
    await Tour.findByIdAndDelete(id);
    res.status(204).json({
      status: "success",
      data: null,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
};
export { createTour, getAllTours, getSingleTour, updateTour, deleteTour };
