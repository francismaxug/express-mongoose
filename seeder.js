// Desc: This file is used to seed the database with sample data
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import Tour from "./models/tourModel.js";
import tours from "./data/tours-simple.js";
dotenv.config();
connectDB();
const importData = async () => {
  try {
    await Tour.insertMany(tours);
    console.log("Data imported successfully");
  } catch (error) {
    console.log(`${error.message}`);
  }
  process.exit();
};

const destroyData = async () => {
  try {
    await Tour.deleteMany();
    console.log("Data destroyed");
  } catch (error) {
    console.log(`${error.message}`);
  }
  process.exit();
};

if (process.argv[2] === "--destroyData") {
  destroyData();
} else if (process.argv[2] === "--importData") {
  importData();
}
