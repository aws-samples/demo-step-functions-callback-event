import * as path from 'path';

export const lambdaHandler = async (event, context) => {
  // Parse the filename from the event
  console.log(event);
  const keyArray = event.detail.object.key.split('/');
  const filename = keyArray[keyArray.length - 1];
  const parsedFilename = path.parse(filename);
  const parsedFilenameArray = parsedFilename.name.split('_');
  const date = `${parsedFilenameArray[1]}_${parsedFilenameArray[2]}`;
  const fileType = parsedFilenameArray[0];

  return {
    date: date,
    fileType: fileType
  }
};
