import React from 'react'

export default function Row(props){

    return (
<div className='row'>
<p>{props.name}</p>
<p>{props.category}</p>
<p>{props.code}</p>

</div>
    )

}