import * as fs from 'fs';

const filePath = 'contracts/protobufs/message.proto.sol';

// At this point, ethers throws an error when trying to use a library with enums used as parameters.
// https://github.com/ethers-io/ethers.js/discussions/2432
fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error(`Error reading file: ${err}`);
    return;
  }

  // Replace 'internal' with 'external' in the decode function of MessageDataCodec
  const modifiedData = data.replace(
    /library MessageDataCodec[\s\S]*?function decode\(uint64 initial_pos, bytes memory buf, uint64 len\) internal/g,
    (match) => match.replace('internal', 'external')
  );

  console.log(modifiedData);

  fs.writeFile(filePath, modifiedData, 'utf8', (err) => {
    if (err) {
      console.error(`Error writing file: ${err}`);
    } else {
      console.log('Successfully updated the file.');
    }
  });
});
