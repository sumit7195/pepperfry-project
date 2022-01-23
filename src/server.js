const app = require('./index')

const connect = require('./configs/db')


const start =  () => {


  return app.listen(3000, async () => {
    await connect();
    console.log("server is listening port 3000");
  });


}



module.exports = start;