/**
 * Checkbox Group component.
 *
 * @author Toan Au, Cindy Tran, Robert Jeffs, Ronald Rinaldy, Martin Balakrishnan.
 */

import React from 'react';
import { Field } from 'redux-form';

/** Checkbox group. Used in forms. */
const CheckboxGroup = ({
  options,
  identifier = 'id',
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
                  name={`${name}.${option[identifier]}`}
                  component="input"
                  id={`${name}.${option[identifier]}`}
                  type="checkbox"
                  value={option[valueName]}
                  onChange={onSelection}
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

export default CheckboxGroup;
