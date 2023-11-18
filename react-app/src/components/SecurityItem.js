import React from 'react'

function SecurityItem(props) {
  const { security } = props;

  return (
    <>
      <div className="d-flex p-2 flex-row m-2 border border-3 rounded">
          <div className='m-2 d-flex flex-row'>
            <i className="fa-sharp fa-solid fa-ticket mx-2"></i>
            <span className="badge bg-light text-dark">{security.id}</span>
          </div>
          <div className='m-2'>
            <span className="badge bg-info text-dark">{security.type}</span>
          </div>
          <div className='m-2'>
            <span className="badge bg-light text-dark">{security.faceValue}</span>
          </div>
          <div className='m-2'>
            <span className="badge bg-light text-dark">{security.status}</span>
          </div>
          <div className='m-2 d-flex flex-row'>
            <i className="fa-solid fa-calendar-days mx-2"></i>
            <span className="badge bg-warning text-dark">{security.maturityDate}</span>
          </div>
      </div>
    </>
  )
}

export default SecurityItem