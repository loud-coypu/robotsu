import React from 'react';

const Country = (props) => {
    return(
        <div>
            <p>{props.stats.Country}<br/>{props.stats.Id}</p>
        </div>
    )
}

export default Country;