import express from 'express';
import path from 'path';
import resizeJPG from '../../controller/resizer';

type ResizeInputs = [string, number, number];

function validateAndSanitizeFields(
  filename: undefined,
  width: undefined,
  height: undefined
): Promise<ResizeInputs> {
  try {
    const newFileName = path.parse(String(filename)).name;
    const parsedWidth = parseInt(String(width));
    const parsedHeight = parseInt(String(height));

    const inputs: ResizeInputs = [newFileName, parsedWidth, parsedHeight];

    if (!inputs.every((val) => val)) {
      console.log('Falsey value found');
      return Promise.reject();
    }

    return Promise.resolve(inputs);
  } catch {
    return Promise.reject();
  }
}

async function resizeImageAPI(
  req: express.Request,
  res: express.Response
): Promise<void> {
  let inputs: ResizeInputs;

  try {
    inputs = await validateAndSanitizeFields(
      req.query['filename'] as undefined,
      req.query['width'] as undefined,
      req.query['height'] as undefined
    );
  } catch {
    res
      .status(400)
      .send(
        'The request for resizing should be as follows: localhost:3000/api/images?filename={Enter Image filename}&width={Enter width}&height={Enter height} + \n Only positive numbers (above 0) are accepted in width and height fields'
      );
    return;
  }

  try {
    const resizedImagePath = await resizeJPG(inputs[0], inputs[1], inputs[2]);

    console.log(String(resizedImagePath));
    res.status(200).sendFile(String(resizedImagePath));
  } catch (error) {
    res.status(404).send('Image not found');
  }
}

export default {
  resizeImageAPI,
};
