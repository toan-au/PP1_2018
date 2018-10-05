/**
 * Radio Group component.
 *
 * @author Toan Au, Cindy Tran, Robert Jeffs, Ronald Rinaldy, Martin Balakrishnan.
 */

import React from 'react';
import { Field } from 'redux-form';

/** Radio group. Used in forms. */
const RadioGroup = ({
  options,
  identifier,
  labelName,
  valueName,
  name,
  className,
  onSelection = () => {}
}) => {
  return (
    <div className={`RadioGroup ${className}`}>
      <div className="choices">
        {options.map(option => {
          return (
            <div className="choice" key={option[identifier]}>
              <label htmlFor={`${name}.${option[identifier]}`}>
                <Field
                  name={`${name}`}
                  component="input"
                  id={`${name}.${option[identifier]}`}
                  type="radio"
                  value={option[valueName]}
                  onChange={onSelection}
                  required
                />
                {option[labelName]}
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RadioGroup;
