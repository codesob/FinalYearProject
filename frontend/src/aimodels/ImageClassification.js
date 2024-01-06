import React, { useState } from 'react';
import * as tf from '@tensorflow/tfjs';

function ImageClassification() {
  const [model, setModel] = useState(null);
  const [image, setImage] = useState(null);
  const [predictions, setPredictions] = useState([]);

  const loadModel = async () => {
    const loadedModel = await tf.loadLayersModel('path_to_your_model/model.json'); // Replace with the path to your model
    setModel(loadedModel);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (event) => {
      const img = new Image();
      img.src = event.target.result;
      img.onload = () => {
        setImage(img);
      };
    };
    reader.readAsDataURL(file);
  };

  const classifyImage = async () => {
    if (model && image) {
      const inputImage = tf.browser.fromPixels(image);
      const resizedImage = tf.image.resizeBilinear(inputImage, [224, 224]);
      const preprocessedImage = resizedImage.div(255.0);
      const expandedImage = preprocessedImage.expandDims(0);

      const predictions = await model.predict(expandedImage).array();

      setPredictions(predictions);
    }
  };

  return (
    <div>
      <h2>Image Classification</h2>
      <button onClick={loadModel}>Load Model</button>
      <input type="file" accept="image/*" onChange={handleImageUpload} />
      <button onClick={classifyImage}>Classify Image</button>
      {predictions.length > 0 && (
        <div>
          <h3>Predictions:</h3>
          <ul>
            {predictions[0].map((prob, index) => (
              <li key={index}>Class {index}: {prob.toFixed(4)}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default ImageClassification;
