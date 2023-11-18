import React, { useState, useEffect, useContext } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import TradeItem from './TradeItem';

const SecurityDetail = (props) => {
  const params = useParams();
  const [security, setSecurity] = useState([]);
  const [trades, setTrades] = useState([]);

  const fetchSecurity = async()=>{
    const responce = await fetch(`http://localhost:5000/api/security/${params.id}`, {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json',
          'auth-token' : localStorage.getItem('token')
      }
    });
    const sec = await responce.json();
    setSecurity(sec);
    console.log("Security Fetched")
  }

  // const fetchTrades = async() => {
  //   const response = await fetch(`http://localhost:5000/api/security/get-all-trades-for-security/${securityId}`, {
  //     method: 'GET',
  //     headers : {
  //       'Content-Type': 'application/json',
  //       'auth-token' : localStorage.getItem('token')
  //     }
  //   });
  //   const trade = await response.json();
  //   setTrades(trade);
  // }

  useEffect(() => { 
    fetchSecurity();
    // fetchTrades();
  },[])

  // const security = {
  //   id: 1,
  //   ISIN: "US1234567890",
  //   CUSIP: "123456789",
  //   MaturityDate: "8 Aug 2023",
  //   Coupon: 5,
  //   Type: "bond",
  //   FaceValue: 1000,
  //   Status: "Matured"
  // };

  // const trades =  {
  //   0 : {
  //   id: "trade001",
  //   bookId: "book001",
  //   counterpartyId: "counterparty001",
  //   securityId: "security001",
  //   quantity: 100,
  //   status: "completed",
  //   price: 50.25,
  //   buy_sell: "buy",
  //   tradeDate: "2023-08-08T10:00:00Z",
  //   settlementDate: "2023-08-15"
  // }}


  return (
    <>
      {security.length === 0 ?
        <div className="container">Security Not Found</div>
        :
        <>
          <div className="card">
            <div className="card-header inline">
              <h5 className='float-start'>Security ID : {security.id}</h5>
            </div>

            <div className="card-body">
              <div className="container  p-1 d-flex flex-row">
                <h5 className="card-title">ISIN : </h5>
                <div className="card-text">
                  <span className="badge text-bg-light mx-1">{security.isin}</span>
                </div>
              </div>

              <div className="container  p-1 d-flex flex-row">
                <h5 className="card-title">CUSIP : </h5>
                <div className="card-text">
                  <span className="badge text-bg-light mx-1">{security.cusip}</span>
                </div>
              </div>

              <div className="container  p-1 d-flex flex-row">
                <h5 className="card-title">Maturity Date : </h5>
                <div className="card-text">
                  <span className="badge text-bg-light mx-1">{security.maturityDate}</span>
                </div>
              </div>

              <div className="container  p-1 d-flex flex-row">
                <h5 className="card-title">Coupon : </h5>
                <div className="card-text">
                  <span className="badge text-bg-light mx-1">{security.coupon}</span>
                </div>
              </div>

              <div className="container  p-1 d-flex flex-row">
                <h5 className="card-title">Type : </h5>
                <div className="card-text">
                  <span className="badge text-bg-light mx-1">{security.type}</span>
                </div>
              </div>
              <div className="container  p-1 d-flex flex-row">
                <h5 className="card-title">Face Value : </h5>
                <div className="card-text">
                  <span className="badge text-bg-light mx-1">{security.faceValue}</span>
                </div>
              </div>
              <div className="container  p-1 d-flex flex-row">
                <h5 className="card-title">Status : </h5>
                <div className="card-text">
                  <span className="badge text-bg-light mx-1">{security.status}</span>
                </div>
              </div>

            </div>

            <div className="container">
              <h3>All Trades</h3>
              <div className="row">
                {trades.length === 0 ? (
                  <div><p>No Trades Found</p></div>
                ) : (
                  Object.values(trades).map(trade => (
                    <div className="col-lg-12" key={trade.id}>
                      <Link key={trade.id} to={{
                        pathname: `/tradeDetail`,
                        state: { id: trade.id }
                      }}>
                        <TradeItem trade={trade} />
                      </Link>
                    </div>
                  ))
                )}
              </div>
            </div>

          </div>
        </>
      }
    </>

  )
}

export default SecurityDetail