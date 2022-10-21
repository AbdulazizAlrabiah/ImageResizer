import resizerJPG from '../controller/resizer';
import sharp from 'sharp';
import path from 'path';

const dirname = __dirname;

it('expect to resize image to 200 w and 300 h', async () => {
  const filename = 'fjord';
  const width = 200;
  const height = 300;
  const outputFilePath = path.resolve(
    `${dirname}/../../output/${filename}_${width}_${height}.jpg`
  );

  await resizerJPG(filename, 200, 300);
  const imageMetaData = await sharp(outputFilePath).metadata();

  expect(imageMetaData.width).toEqual(200);
  expect(imageMetaData.height).toEqual(300);
});
