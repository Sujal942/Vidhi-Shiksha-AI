// import mongoose from "mongoose";

// const BnsModel = new mongoose.Schema({

//         sectionNo:{
//             type:String,
//         },
//         sectionTitle:{
//             type:String,
//         },
//         sectionDescription:{
//             type:String,
//         },
//         subSectionTitle:{
//             type:String,
//     },
//         subSectionDescription:{
//             type:String,
//         },
//         combinedData:{
//             type:String,
//         },

//     },
//     {
//         timestamps:true,
//     })

// const Bns = mongoose.models.Bns || mongoose.model("Bns", BnsModel);

// export default Bns;

import mongoose from "mongoose";

const BnsSchema = new mongoose.Schema(
  {
    sectionNo: {
      type: String,
    },
    sectionTitle: {
      type: String,
    },
    sectionDescription: {
      type: String,
    },
    subSectionTitle: {
      type: String,
    },
    subSectionDescription: {
      type: String,
    },
    combinedData: {
      type: String,
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  }
);

// Use an existing model if it exists, otherwise create a new one
const Bns = mongoose.models.Bns || mongoose.model("Bns", BnsSchema);

export default Bns;
