import app from "./app"
import { Server } from 'http';

const port = 3000

let server:Server;

async function bootStrap() {
   server = app.listen(port, () => {
        console.log(`Server is listening on port ${port}`)
      })
}

bootStrap();
