import mongoose, { Schema } from "mongoose";

const subscriptionSchema = new Schema(
  {
    subscriber: {
      type: Schema.Types.ObjectId, // One who is SUBSCRIBING
      ref: "User",
    },
    channel: {
      type: Schema.Types.ObjectId, // Channel to which subscriber is SUBSCRIBING
      ref: "User",
    },
  },
  { timestamps: true }
);

export const Subscription = mongoose.model("Subscription", subscriptionSchema);
