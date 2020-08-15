import React from 'react';
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles,
} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import RadialSeparators from './RadialSeparators';
import PercentageText from './PercentageText';

interface CircularProgressProps {
  color: string;
  percent: number;
  chidren?: React.ReactNode;
}
const CircularProgress: React.FC<CircularProgressProps> = ({
  percent,
  color,
  children,
}) => {
  return (
    <div>
      <CircularProgressbarWithChildren
        value={percent}
        styles={buildStyles({
          strokeLinecap: 'butt',
          trailColor: color,
        })}
        strokeWidth={2}
      >
        <div style={{ position: 'absolute', zIndex: 1 }}>
          <CircularProgressbar
            value={percent}
            styles={buildStyles({
              strokeLinecap: 'butt',
              pathColor: color,
              trailColor: 'transparent',
            })}
            strokeWidth={2}
          />
        </div>

        {!children ? <PercentageText percent={percent} /> : children}
        <RadialSeparators
          count={50}
          style={{
            background: '#fff',
            width: '2px',
            height: `${2}%`,
          }}
        />
        <div className="internal" style={{ width: '86%' }}>
          <CircularProgressbar
            value={percent === 0 ? 1 : percent}
            styles={buildStyles({
              strokeLinecap: 'butt',
              pathColor: color,
              trailColor: '#E6E6E6',
            })}
            strokeWidth={10}
          />
        </div>
      </CircularProgressbarWithChildren>
    </div>
  );
};

export default CircularProgress;
