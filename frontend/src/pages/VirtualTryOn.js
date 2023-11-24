import React, { useState, useEffect, useRef } from 'react';

function TryOn() {
  const [webcamStream, setWebcamStream] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const accessWebcam = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        videoRef.current.srcObject = stream;
        setWebcamStream(stream);
      } catch (error) {
        console.error('Error accessing webcam:', error);
      }
    };

    accessWebcam();
  }, []);

  useEffect(() => {
    overlayItem();
  }, [selectedItem]);

  const overlayItem = () => {
    if (webcamStream && selectedItem) {
      // Logic to overlay the selected item on the video feed
      // You may need to use CSS and DOM manipulation to achieve this
    }
  };

  return (
    <div>
      <video ref={videoRef} autoPlay playsInline />
    
      <div>
        <button onClick={() => setSelectedItem('item1')}>Item 1</button>
        <button onClick={() => setSelectedItem('item2')}>Item 2</button>
        
      </div>
    </div>
  );
}

export default TryOn;
