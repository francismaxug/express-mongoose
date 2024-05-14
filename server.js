import dotenv from "dotenv";
dotenv.config();
import { app } from "./app.js";
const PORT = process.env.PORT || 8000;
// console.log(process.env);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
