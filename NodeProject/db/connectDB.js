import mongoose from "mongoose";

const uri ="mongodb+srv://LeaAtiya:aaa@tinyurl.1dlutsh.mongodb.net/";
// const uriLocal = "mongodb://localhost:27017/<dbname>";

const connectDB = async () => {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
  });
    console.log('Database Connected');
  } catch (error) {
    console.error('Error connecting to database:', error);
  }
};

const database = mongoose.connection;

database.on('error', (error) => {
  console.error('Database connection error:', error);
});
// database.once('open', function () {
//   console.log("Connected to MongoDB");
// });
export default connectDB;
