import express from "express";
import { config } from "dotenv";

const app = express();
config();

app.get('/', (req: express.Request, res: express.Response) => {
    res.send('This site works!')
});

app.listen(process.env.PORT, () => console.log("listening on port", 3000))