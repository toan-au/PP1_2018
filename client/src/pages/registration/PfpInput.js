import React from 'react';
import Dropzone from 'react-dropzone';

const PfpInput = props => {
  const files = props.input.value;
  return (
    <div className="PfpInput">
      <label className="">Upload an image</label>
      <Dropzone
        name={props.name}
        onDrop={(filesToUpload, e) => props.input.onChange(filesToUpload)}
      >
        {props.input.value[0] && (
          <img
            src={props.input.value[0].preview}
            style={{ height: '100%', width: '100%' }}
          />
        )}
      </Dropzone>
      {props.meta.touched &&
        props.meta.error && (
          <span className="error" style={{ color: 'red' }}>
            {props.meta.error}
          </span>
        )}
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
