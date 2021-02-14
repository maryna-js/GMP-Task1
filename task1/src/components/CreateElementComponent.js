import React from 'react';

const CreateElementComponent = function Header() {
    return React.createElement(
        'div',
        { className: 'element bg-breakerbay' },
        'This is Component with Create Element'
    )
}

export default CreateElementComponent;
