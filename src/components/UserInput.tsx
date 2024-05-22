import React, { ChangeEvent } from 'react';

// Define props interface
interface UserInputProps {
  label: string;
  id: string;
  type: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

// Define UserInput component
const UserInput: React.FC<UserInputProps> = ({ label, id, type, onChange }) => {
  return (
    <div className="form-content">
      <label>{label}</label>
      <input
        type={type}
        id={id}
        onChange={onChange}
        required
      />
    </div>
  );
}

export default UserInput;
