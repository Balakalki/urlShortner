const mongoose = require("mongoose");

const urlSchema = mongoose.Schema(
  {
    shortId: {
      type: String,
      required: true,
      unique: true,
    },
    redirectURL: {
      type: String,
      required: true,
    },
    visteHistory: [{ timestamp: { type: Date } }],
    createdBy:{
      type: mongoose.Schema.ObjectId,
      ref: 'users',
    }
  },
  { timestamps: true },
);

const URL = mongoose.model("url", urlSchema);

module.exports = URL;
