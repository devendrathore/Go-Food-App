const mongoose = require("mongoose");

const mongoURI = "mongodb+srv://devofficial2211:dhoom3kadev786@cluster0.4yxxrli.mongodb.net/gofoodmern?retryWrites=true&w=majority";

const mongoDB = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("Connected to MongoDB");
    const fetched_data = mongoose.connection.db.collection("food_items");
    console.log("1");
    
    const data = await fetched_data.find({}).toArray();
    console.log("2", data);
    
    const foodCategory_data = mongoose.connection.db.collection("foodCategory");
    console.log("3");

    const catData = await foodCategory_data.find({}).toArray();
    console.log("4", catData);

    global.food_items = data;
    global.foodCategory = catData;
    
    console.log("5");
  } catch (error) {
    console.error("Error connecting to MongoDB: ", error);
  } 
  
};

module.exports = mongoDB;

// const mongoose = require("mongoose");

// const mongoURI = "mongodb+srv://devofficial2211:dhoom3kadev786@cluster0.4yxxrli.mongodb.net/gofoodmern?retryWrites=true&w=majority";

// const mongoDB = async () => {
//   try {
//     await mongoose.connect(mongoURI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });

//     console.log("Connected to MongoDB");
//     const fetched_data = mongoose.connection.db.collection("food_items");
//     console.log("1");

//     const data = await fetched_data.find({}).toArray();
//     console.log("2", data);

//     global.food_items = data;

//     console.log("3");
//   } catch (error) {
//     console.error("Error connecting to MongoDB: ", error);
//   } finally {
//     mongoose.disconnect(); // Close the connection when done
//     console.log("Disconnected from MongoDB");
//   }
// };

// module.exports = mongoDB;

// ------------------------------------------------------------

// const mongoose = require("mongoose");

// const mongoURI =
//   "mongodb+srv://devofficial2211:dhoom3kadev786@cluster0.4yxxrli.mongodb.net/gofoodmern?retryWrites=true&w=majority";

// const mongoDB = async () => {
//   await mongoose
//     .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => {
//       console.log("connected to MongoDB");
//       const fetched_data = mongoose.connection.db.collection("food_items");
//       console.log("1");

//       fetched_data.find({}).toArray(async function (err, data) {
//         console.log("2");
//         if (err) console.log(err);
//         else{
//         global.food_items = data;
//         }
//          console.log("3");
//       });
//     })
//     .catch((error) => {
//       console.error("Error connecting to MongoDB: ", error);
//     });
//   console.log("4");
// };

// module.exports = mongoDB;

// ------------------------------------------------------------------------

// const mongoose = require("mongoose");

// const mongoURI =
//   "mongodb+srv://devofficial2211:dhoom3kadev786@cluster0.4yxxrli.mongodb.net/gofoodmern?retryWrites=true&w=majority";

// const mongoDB = async () => {
//   await mongoose
//     .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => {
//       console.log("connected to MongoDB");
//       const fetched_data = mongoose.connection.db.collection("food_items");
//       console.log("1");

//       fetched_data.find({}).toArray(async function (err, data) {

//         console.log("2");
//         const foodCateogry = mongoose.connection.db.collection("foodCategory");
//         foodCategory.find({}).toArray(function(err,catData){
//           if (err) console.log(err);
//           else{
//             global.food_items = data;
//             global.foodCategory = catData;
//           }
//         })
//          console.log("3");
//       });
//     })
//     .catch((error) => {
//       console.error("Error connecting to MongoDB: ", error);
//     });
//   console.log("4");
// };

// module.exports = mongoDB;

// -------------------------------------------

// const mongoose = require("mongoose");

// const mongoURI =
//   "mongodb+srv://devofficial2211:dhoom3kadev786@cluster0.4yxxrli.mongodb.net/gofoodmern?retryWrites=true&w=majority";

// const mongoDB = async () => {
//   await mongoose
//     .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => {
//       console.log("connected to MongoDB");
//       const fetched_data = mongoose.connection.db.collection("food_items");
//       console.log("1");

//       fetched_data.find({}).toArray(async function (err, data) {
//         console.log("2");
//         const foodCategory = mongoose.connection.db.collection("foodCategory");
//         foodCategory.find({}).toArray(function (err, catData) {
//           if (err) console.log(err);
//           else {
//             global.food_items = data;
//             global.foodCategory = catData;
//           }
//           console.log("3");
//         });
//       });
//     })
//     .catch((error) => {
//       console.error("Error connecting to MongoDB: ", error);
//     });
//   console.log("4");
// };

// module.exports = mongoDB;

// ------------------------------------------
