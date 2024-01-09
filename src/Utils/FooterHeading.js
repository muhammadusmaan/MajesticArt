import React from 'react';
import PropTypes from 'prop-types';

function FooterHeading({ text, arc, radius }) {
    const characters = text.split('');
    const degree = arc / characters.length;

    return (
        <h3 className="wrapper-3">
            {characters.map((char, i) => (
                <span
                    key={`Footerheading-span-${i}`}
                    style={{
                        height: `${radius}px`,
                        transform: `rotate(${degree * i - arc / 2}deg)`,
                        transformOrigin: `0 ${radius}px 0`,
                    }}>
                    {char}
                </span>
            ))}
        </h3>
    );
}

FooterHeading.propTypes = {
    text: PropTypes.string.isRequired,
    arc: PropTypes.number, // how curved do you want the text
    radius: PropTypes.number, // how big do you want the curve
};

FooterHeading.defaultProps = {
    arc: 360,
    radius: 230,
};

export default FooterHeading;
