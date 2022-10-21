import sharp from 'sharp';
import path from 'path';
import fs from 'fs';

// Uses caching
export default async function resizeJPG(
  filename: string,
  width: number,
  height: number
): Promise<string | void> {
  const dirname = __dirname;
  const inputFilePath = path.resolve(`${dirname}/../../assets/${filename}.jpg`);
  const outputFilePath = path.resolve(
    `${dirname}/../../output/${filename}_${width}_${height}.jpg`
  );

  if (fs.existsSync(outputFilePath)) {
    console.log('return cached image!');
    return outputFilePath;
  }

  try {
    let resizedImage = sharp(inputFilePath).resize(width, height);

    await resizedImage.toFile(outputFilePath);

    console.log('New image written at: ' + outputFilePath);
    return outputFilePath;
  } catch (error) {
    console.log(`Error in resizing the image: ${error}`);
    return Promise.reject();
  }
}
