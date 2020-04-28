const mongoose = require("mongoose");
const mongodb_url = "mongodb://127.0.0.1:27017/task-manager-api";
//process.env.MONGODB_URL; //while using in production
//Enter and Use Your MONGODB URL
mongoose.connect(mongodb_url, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});
