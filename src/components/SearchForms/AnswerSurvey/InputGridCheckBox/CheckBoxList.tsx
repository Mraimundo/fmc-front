import React, { useCallback } from 'react';

interface CheckBoxListProps {
  answer: string;
  topics: string[];
  onChangeHandler: (value: string) => void;
}

const InputGridCheckBox: React.FC<CheckBoxListProps> = ({
  answer,
  topics,
  onChangeHandler,
}) => {
  const changeHandler = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      onChangeHandler(e.target.value);
    },
    [onChangeHandler],
  );

  return (
    <>
      {topics.map(topic => (
        // eslint-disable-next-line jsx-a11y/label-has-associated-control
        <label>
          <input
            type="checkbox"
            id={`id-${topic}-${answer}`}
            value={`${topic}, ${answer}`}
            name={`checkbox-${topic}-${answer}`}
            onChange={changeHandler}
          />
        </label>
      ))}
    </>
  );
};

export default InputGridCheckBox;
