import express from "express";
import apiRouter from "./src/routes/api.js";

const bakendKopi = () => {
  const app = express();
  const PORT = 3000;

  app.use("/api", apiRouter);

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};
bakendKopi();
