import express from "express";
import cors from "cors";
import postRoutes from './routes/postRoutes.js'
import pixelMindRoutes from './routes/pixelMindRoutes.js'
import connectDB from "./mongodb/connect.js";


import dotenv from "dotenv";
dotenv.config();

// Middleware && Variables

const app = express();
app.use(cors());
app.use(express.json({ limit: "5mb" }));
app.use('/api/post',postRoutes)
app.use('/api/pxlmind',pixelMindRoutes)



app.get("/", async (req, res) => {
  res.send("Hello from PixelMind");
});

// const startServer = async () => {
//   try {
//     connectDB(process.env.MONGODB_URL);
//     app.listen(8080, () => {
//       console.log("Server has started on port http://localhost:8080");
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };

// startServer();
connectDB(process.env.MONGODB_URL);

export default app;