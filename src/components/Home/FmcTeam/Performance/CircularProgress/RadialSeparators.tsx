import React from 'react';
import range from 'lodash.range';

interface SeparatorProps {
  turns: number;
  style: object;
}

const Separator: React.FC<SeparatorProps> = ({ turns, style }) => {
  return (
    <div
      style={{
        position: 'absolute',
        height: '100%',
        transform: `rotate(${turns}turn)`,
      }}
    >
      <div style={style} />
    </div>
  );
};

interface RadialSeparatorsProps {
  count: number;
  style: object;
}

const RadialSeparators: React.FC<RadialSeparatorsProps> = ({
  count,
  style,
}) => {
  const turns = 1 / count;
  return (
    <>
      {range(count).map((index: number) => (
        <Separator turns={index * turns} style={style} key={index} />
      ))}
    </>
  );
};

export default RadialSeparators;
