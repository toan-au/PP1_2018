import React from 'react';
import Dropzone from 'react-dropzone';

const PfpInput = props => {
  const files = props.input.value;
  return (
    <div className="PfpInput">
      <Dropzone
        name={props.name}
        onDrop={(filesToUpload, e) => props.input.onChange(filesToUpload)}
      >
        <span styles={{ color: 'black' }}>Upload your profile picture</span>
      </Dropzone>
      {props.meta.dirty &&
        props.meta.error && <span className="error">{props.meta.error}</span>}
      {files &&
        Array.isArray(files) && (
          <ul>
            {files.map((file, i) => (
              <li key={i}>{file.name}</li>
            ))}
          </ul>
        )}
    </div>
  );
};

export default PfpInput;
