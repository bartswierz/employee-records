import express from "express";
import cors from "cors";
import "./loadEnvironment.mjs";
import records from "./routes/record.mjs";

// USES EITHER THE ENVIRONMENT VARIABLE OR PORT 5050
const PORT = process.env.PORT || 5050;
const app = express();

// ALLOWS OUR SERVER TO RESPOND TO REQUESTS FROM OTHER DOMAINS. THIS ENABLES CORS FOR ALL ROUTES
app.use(cors());

//MIDDLEWARE THAT PARSES THE REQUEST BODY AS JSON
app.use(express.json());

//MIDDLEWARE LOGS THE RESPONSE BODY SENT TO THE CLIENT USING CONSOLE.LOG AND IT OVERRIDES THE 'RES.SEND()' METHOD OF THE RESPONSE BODY TO INTERECPT THE RESPONSE DATA BEFORE SENDING IT TO THE CLIENT. THE
app.use((req, res, next) => {
  console.log(`Method: ${req.method} | Url: ${req.url} | Request body: ${JSON.stringify(req.body)}`);
  next();
});

//MOUNTS THE 'RECORDS' ROUTER ON THE '/record' PATH
app.use("/record", records);

// start the Express server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
