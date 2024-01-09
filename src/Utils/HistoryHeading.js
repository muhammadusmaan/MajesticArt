import React from 'react';
import PropTypes from 'prop-types';

function HistoryHeading({ text, arc, radius }) {
    const characters = text.split('');
    const degree = arc / characters.length;

    return (
        <h2 className="wrapper-2">
            {characters.map((char, i) => (
                <span
                    key={`Historyheading-span-${i}`}
                    style={{
                        height: `${radius}px`,
                        transform: `rotate(${degree * i - arc / 2}deg)`,
                        transformOrigin: `0 ${radius}px 0`,
                    }}>
                    {char}
                </span>
            ))}
        </h2>
    );
}

HistoryHeading.propTypes = {
    text: PropTypes.string.isRequired,
    arc: PropTypes.number, // how curved do you want the text
    radius: PropTypes.number, // how big do you want the curve
};

HistoryHeading.defaultProps = {
    arc: 360,
    radius: 230,
};

export default HistoryHeading;
