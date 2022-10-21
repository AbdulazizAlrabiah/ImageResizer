import axios from 'axios';
import fs from 'fs';
import path from 'path';

const dirname = __dirname;

// Make sure the server is running on localhost port 3000
it('expect to resize image to 300 w and 350 h from endpoint', async () => {
  const filename = 'palmtunnel';
  const width = 300;
  const height = 350;

  const outputFilePath = path.resolve(
    `${dirname}/../../output/${filename}_${width}_${height}.jpg`
  );

  await axios.get(
    `http://localhost:3000/api/images?filename=${filename}&width=${width}&height=${height}`
  );

  expect(fs.existsSync(outputFilePath)).toBeTrue();
});
