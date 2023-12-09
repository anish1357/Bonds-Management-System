import React, {useState, useEffect} from 'react'
import { useParams, Link  } from 'react-router-dom';

const TradeDetail = (props) => {
  const params = useParams()
  const [trade, setTrade] = useState([]);
    const fetchTrade = async()=>{
      const response = await fetch(`http://localhost:5000/api/v1/trades/${params.id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'auth-token' : localStorage.getItem('token')
        }
      });
      const trad = await response.json();
      console.log(trad)
      setTrade(trad);
    }

    useEffect(() => { 
          fetchTrade();
        },[])

    // const trade = props.trade;
    // const tradeDate = new Date(props.trade.tradeDate);
    // const settlementDate = new Date(props.trade.settlementDate);
    // const trade =  {
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
    //     issue : "Trade Fail"
    //   }
    

  return (
    <div className="container">

      <div className="card">
      <div className="card-header">
        <Link key={trade.id} to={{
                        pathname: `/modify-trade/${trade.id}`,
                        state: { trade: trade }
                      }}>
                       <div className='btn btn-primary float-end'>MODIFY TRADE</div>
                      </Link>
        {/* <a href={`/modify-trade/${trade.id}`} className="btn btn-primary float-end">MODIFY TRADE</a> */}

      </div>
      <div className="card-body">

        <div className="border border-1 rounded m-3 p-3">
        <h5 className="card-title">Book Name</h5>
        <div className="card-text">
          {trade.bookName}
        </div>
        </div>

        <div className="border border-1 rounded m-3 p-3">
        <h5 className="card-title">Counterparty Name</h5>
        <div className="card-text">
          {trade.counterPartyName}
        </div>
        </div>

        <div className="border border-1 rounded m-3 p-3">
        <h5 className="card-title">Security Id</h5>
        <div className="card-text">
          {trade.securityId}
        </div>
        </div>

        <div className="border border-1 rounded m-3 p-3">
        <h5 className="card-title">Quantity</h5>
        <div className="card-text">
          {trade.quantity}
        </div>
        </div>

        <div className="border border-1 rounded m-3 p-3">
        <h5 className="card-title">Trade Status</h5>
        <div className="card-text">
        <span className="badge text-bg-light mx-1">{trade.status}</span>
        </div>
        </div>

        <div className="border border-1 rounded m-3 p-3">
        <h5 className="card-title">Price</h5>
        <div className="card-text">
          {trade.price}
        </div>
        </div>

        <div className="border border-1 rounded m-3 p-3">
        <h5 className="card-title">Buy/Sell</h5>
        <div className="card-text">
        <span className="badge text-bg-light mx-1">{trade.buySell}</span>
        </div>
        </div>

        {/* <div className="border border-1 rounded m-3 p-3">
        <h5 className="card-title">Trade Date</h5>
        <div className="card-text">
        <span className="badge bg-warning text-dark">{trade.tradeDate.getDate()}/{trade.tradeDate.getMonth()}/{trade.tradeDate.getFullYear()}</span>
        </div>
        </div>

        <div className="border border-1 rounded m-3 p-3">
        <h5 className="card-title">Settlement Date</h5>
        <div className="card-text">
        <span className="badge bg-warning text-dark">{trade.settlementDate.getDate()}/{trade.settlementDate.getMonth()}/{trade.settlementDate.getFullYear()}</span>
        </div> */}
        {/* </div> */}
      </div>
    </div>
    </div>
  )
}


export default TradeDetail;