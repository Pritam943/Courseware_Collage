import React from 'react'

function Other() {
  return (
    <div className='otherpage'>
        <h2 className='oh1'>
      other information <br />
      FAQ
    </h2>
    <h2 className='oh2'>Time Table</h2>
    <h3 className='oh3'>School of Engineering <br />(SoET)</h3>

    <table className='otable'>
      <tr className='otr'>
        <th className='oth'><a href="aerospace" className='oa'>Aerospace</a></th>
        <th className='oth'><a href="Civil" className='oa'>Civil</a></th>
        <th className='oth'><a href="aerospace" className='oa'>CSE</a></th>
      </tr>
     
      <tr className='otr'>
        <th className='oth'><a href="ECE" className='oa'>ECE</a></th>
        <th className='oth'><a href="MECH" className='oa'>MECH</a></th>
        <th className='oth'><a href="aerospace" className='oa'>ECE</a></th>
      </tr>
      <tr className='otr'>
        <th className='oth'><a href="Mining" className='oa'>Mining</a></th>
        <th className='oth'><a href="BioTechnology" className='oa'>BioTechnology</a></th>
        <th className='oth'><a href="aerospace" className='oa'>(Ambien Generic)</a></th>
      </tr>
    </table>
    </div>
  )
}

export default Other