import React, { useCallback } from 'react';

interface RadioListProps {
  answer: string;
  topics: string[];
  onChangeHandler: (value: string) => void;
}

const RadioList: React.FC<RadioListProps> = ({
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
            type="radio"
            id={`id-${topic}-${answer}`}
            value={`${topic}, ${answer}`}
            name={`radio-${topic}-${answer}`}
            onChange={changeHandler}
          />
        </label>
      ))}
    </>
  );
};

export default RadioList;
