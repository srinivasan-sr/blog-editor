import { cloudinary } from "@/config/cloudinary-config";

export async function uploadImage(image) {
  const imageData = await image.arrayBuffer();
  const mime = image.type;
  const encoding = 'base64';
  const base64Data = Buffer.from(imageData).toString('base64');
  const fileUri = 'data:' + mime + ';' + encoding + ',' + base64Data;
  const result = await cloudinary.uploader.upload(fileUri, { folder: 'sample', resource_type: 'auto' });
  return result.secure_url;
}