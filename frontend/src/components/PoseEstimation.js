import * as posenet from '@tensorflow-models/posenet';

const net = await posenet.load();

const image = document.getElementById('userImage'); // Replace with your user's image
const pose = await net.estimateSinglePose(image);

console.log(pose.keypoints);
