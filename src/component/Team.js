import React from 'react'
import PropTypes from 'prop-types'

const Team = ({team}) => {
    return (
        <>
        {team.map (t     =>(
            <h3 key={t.index}> {t}</h3> ))
        }    
        </>
    )
}

Team.propTypes ={
    team: PropTypes.array,
}
export default Team