import React, { useState, useEffect, useContext } from 'react'
import TradeDetail from './TradeDetail';
import { Link, useNavigate } from "react-router-dom";
import TradeItem from './TradeItem';
import TradeList from './TradeList';

const Trades = (props) => {
//   const trades =  {
//     0 : {
//     id: "trade001",
//     bookId: "book001",
//     counterpartyId: "counterparty001",
//     securityId: "security001",
//     quantity: 100,
//     status: "completed",
//     price: 50.25,
//     buy_sell: "buy",
//     tradeDate: "2023-08-08T10:00:00Z",
//     settlementDate: "2023-08-07",
//     issue: "Trade Fail"
//   },
//   1 : {
//     id: "trade002",
//     bookId: "book001",
//     counterpartyId: "counterparty001",
//     securityId: "security001",
//     quantity: 100,
//     status: "completed",
//     price: 50.25,
//     buy_sell: "buy",
//     tradeDate: "2023-08-08T10:00:00Z",
//     settlementDate: "2023-08-15",
//     issue: "NA"
//   },
//   2 : {
//     id: "trade003",
//     bookId: "book001",
//     counterpartyId: "counterparty001",
//     securityId: "security001",
//     quantity: 100,
//     status: "completed",
//     price: 50.25,
//     buy_sell: "buy",
//     tradeDate: "2023-08-08T10:00:00Z",
//     settlementDate: "2023-08-07",
//     issue: "NA"
//   }
// }
  const [trades, setTrades] = useState([]);
  const fetchAllTrades = async()=>{
    const response = await fetch(`http://localhost:5000/api/v1/trades/`, {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json',
          'auth-token' : localStorage.getItem('token')
      }
  });
  const json = await response.json();
  setTrades(json)
  // console.log(json)
  }

  useEffect(() => {
    fetchAllTrades();
    // eslint-disable-next-line
  },[])

  return (
    <>
      <div className="container">
        <h2>All Trades</h2>
        <div className="row">
          {/* {trades.length === 0 ? (
            <div><p>No Trades Found</p></div>
          ) : (
            Object.values(trades).map(trade => (
              <div className="col-lg-12" key={trade.id}>
                <Link key={trade.id} to={{
                  pathname: `/tradeDetail`,
                  state: { id: trade.id }
                }}>
                  <TradeItem trade={trade} />
                  {/* <TradeList trades={trade} /> */}
                {/* </Link>
              </div>
            ))
          )} */}
          {trades.length === 0 ? (
            <div><p>No Trades Found</p></div>
          ) : (
            <TradeList trades={trades} />
          )}
        </div>
      </div>
    </>
  )
}

export default Trades;