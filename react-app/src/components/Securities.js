import React, { useState, useEffect, useContext } from 'react'
import SecurityItem from './SecurityItem';
import { Link, useNavigate } from "react-router-dom";
import SecurityDetail from './SecurityDetail';

const Securities = (props) => {
  // const securities = {
  //   0: {
  //     id: 1,
  //     Type: "bond",
  //     FaceValue: 1000,
  //     Status: "Matured",
  //     MaturityDate: "8 Aug 2023"
  //   },
  //   1: {
  //     id: 2,
  //     Type: "bond",
  //     FaceValue: 1000,
  //     Status: "Matured",
  //     MaturityDate: "8 Aug 2023"
  //   },
  //   2: {
  //     id: 3,
  //     Type: "bond",
  //     FaceValue: 1000,
  //     Status: "Matured",
  //     MaturityDate: "8 Aug 2023"
  //   },
  //   3: {
  //     id: 4,
  //     Type: "bond",
  //     FaceValue: 1000,
  //     Status: "Matured",
  //     MaturityDate: "8 Aug 2023"
  //   }
  // }
  const [securities, setSecurities] = useState([]);
  const fetchAllSecurities = async()=>{
    const response = await fetch(`http://localhost:5000/api/security/`, {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json',
          'auth-token' : localStorage.getItem('token')
      }
  });
  const json = await response.json();
  setSecurities(json)
  //console.log(json)
  }

  useEffect(() => {
    fetchAllSecurities();
    // eslint-disable-next-line
  },[])

  // const routeChange = () =>{ 
  //   let path = `/create-security`; 
  //   navigate(path);
  // }


  return (
    <>
      <div className="container">
        <h2>All Securities</h2>
        <div className="row">
          {securities.length === 0 ? (
            <div><p>No Securities Found</p></div>
          ) : (
            Object.values(securities).map(security => (
              <div className="col-12 col-sm-12 col-md-12 col-lg-6" key={security.id}>
                <Link key={security.id} to={{
                  pathname: `/security/${security.id}`,
                  state: { id: security.id }
                }}>
                  <SecurityItem security={security} />
                </Link>
              </div>
            ))
          )}
        </div>
      </div>

      {/* <div className="d-flex justify-content-center">
        <button type="button" className="btn btn-outline-dark btn-lg" onClick={routeChange}>Create Security</button>
      </div> */}
    </>
  )
}

export default Securities;