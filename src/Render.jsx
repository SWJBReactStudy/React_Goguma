import React, {} from 'react';

const Render = ({isRender, setIsRender}) => {
    return(
        <div>
            {isRender ? '반가워 나는' : null }
        </div>
    );
}

export default Render;