import React from 'react';

function footer(props) {

    const styles = {
        container: {
            textAlign: 'center',
            backgroundColor: 'antiquewhite',
            padding: '15px',
            bottom: '0',
            position: 'absolute',
            width: '-webkit-fill-available '
        }
    };



    return (
        <div style={styles.container}>
            <p style={{fontSize:'25px'}}>This is footer!!</p>
        </div>
    );
}

export default footer;