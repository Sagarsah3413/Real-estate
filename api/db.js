import mongoose from "mongoose";
import colors from "colors";

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://sahs82341:Real-estate@real-estate.6z6qii1.mongodb.net/?retryWrites=true&w=majority&appName=Real-estate", {
      // useNewUrlParser: true,
      // useCreateIndex: true,
      // useFindAndModify: false,
      // useUnifiedTopology: true,
    });
    console.log(
      `Connected To Mongodb Database`.bgMagenta
        .white
    );
  } catch (error) {
    console.log(`Mongodb Database Error ${error}`.bgRed.white);
  }
};

export default connectDB;
