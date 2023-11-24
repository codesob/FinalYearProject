import * as tf from '@tensorflow/tfjs';
import { load } from '@tensorflow-models/deeplab';

const model = await load();
const image = document.getElementById('userImage'); // Replace with your user's image


const input = tf.browser.fromPixels(image);
const { image: segImage } = await model.segment(input);


const segmentation = segImage.dataSync();
const width = segImage.shape[1];
const height = segImage.shape[0];


for (let i = 0; i < width * height; i++) {
  const val = segmentation[i];
  
}


const overlayedImage = processImageWithPoseAndSegment(userImage, pose, clothingSegment);


const resultImage = document.getElementById('resultImage');
resultImage.src = overlayedImage.toDataURL();
