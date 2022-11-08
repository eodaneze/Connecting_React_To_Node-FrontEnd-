import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

// We are using cors to allow cross-origin requests. We are using app.use() to add the cors middleware to the Express application.

app.get("/message", (req, res) => {
  res.json({
    message: "Hello from server",
  });
});


const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}.`);
});
