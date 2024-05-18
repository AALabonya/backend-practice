import { Server } from "http";
import app from "./app"

const PORT = 5000;

// now i create server  so
 let server : Server


//I create a function to bootstrap or run my project also create connecting database.

async function bootstrap(){
  server =app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`)
  })
}

bootstrap()
