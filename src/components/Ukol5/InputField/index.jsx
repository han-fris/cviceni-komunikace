import './style.css';

export const InputField = ({ label, type, value, onValueChange }) => {
  return (
    <div className="input-field">
      <label className="input-field__label">{label}</label>
      <input
        className="input-field__input"
        value={value}
        type={type}
        onChange={(event) => onValueChange(event.target.value)}
      />
    </div>
  );
};
