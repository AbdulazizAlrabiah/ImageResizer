import fs from 'fs';
import path from 'path';
import supertest from 'supertest';
import express from 'express';
import resizeImage from '../routes/api/resizeImage';
// For the second commented test case
// import axios from 'axios';

const dirname = __dirname;
const app = express();

app.get('/api/images', resizeImage.resizeImageAPI);

it('expect to resize image to 300 w and 350 h from endpoint', async () => {

  const filename = 'palmtunnel';
  const width = 300;
  const height = 350;

  const outputFilePath = path.resolve(
    `${dirname}/../../output/${filename}_${width}_${height}.jpg`
  );

  await supertest(app)
    .get(`/api/images?filename=${filename}&width=${width}&height=${height}`)
    .expect(200)

    expect(fs.existsSync(outputFilePath)).toBeTrue();
});

// // Uncomment to run this test that requires the server to be running on port 3000
// it('expect to resize image to 300 w and 350 h from endpoint', async () => {
//   const filename = 'palmtunnel';
//   const width = 300;
//   const height = 350;

//   const outputFilePath = path.resolve(
//     `${dirname}/../../output/${filename}_${width}_${height}.jpg`
//   );

//   await axios.get(
//     `http://localhost:3000/api/images?filename=${filename}&width=${width}&height=${height}`
//   );

//   expect(fs.existsSync(outputFilePath)).toBeTrue();
// });
