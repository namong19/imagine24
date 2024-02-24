import { Document, Schema, model, models } from "mongoose";

// Used ChatGPT to generate this interface with our ImageSchema
export interface IImage extends Document {
  title: string;
  transformationType: string;
  publicId: string;
  secureURL: string;
  width?: number;
  height?: number;
  config?: object;
  transformationUrl?: string;
  aspectRatio?: string;
  color?: string;
  prompt?: string;
  author: {
    _id: string;
    firstName: string;
    lastName: string;
  };
  createdAt?: Date;
  updatedAt?: Date;
}

// Create a schema name ImageSchema
const ImageSchema = new Schema({
  title: { type: String, require: true },
  tranformationType: { type: String, require: true },
  publicId: { type: String, require: true },
  secureUrl: { type: URL, require: true },
  width: { type: Number },
  height: { type: Number },
  config: { type: Object },
  transformationUrl: { type: URL },
  aspectRatio: { type: String },
  color: { type: String },
  prompt: { type: String },
  author: { type: Schema.Types.ObjectId, ref: "User" },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

// Turn the schema into a model
const Image = models?.Image || model("Image", ImageSchema);

// Export the constructor or the model in this case
export default Image;
