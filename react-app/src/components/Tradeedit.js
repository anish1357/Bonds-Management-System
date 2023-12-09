import React, {useState, useEffect} from 'react'
import { useLocation } from 'react-router-dom';

const Tradeedit = (props) => {
    const location = useLocation();
  console.log(props)

  const [tradeId] = useState(props.trade.id)
  const [trade, setTrade] = useState([]);
    const fetchTrade = async()=>{
      const response = await fetch(`http://localhost:5000/api/v1/trades/${tradeId}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'auth-token' : localStorage.getItem('token')
        }
      });
      const trad = await response.json();
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
    //     settlementDate: "2023-08-15"
    //   }
    
    const [issue, setIssue] = useState("Trade Fail");

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        // const response = await fetch("http://localhost:5000/api/project/create-ticket", {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //         'auth-token': localStorage.getItem('token')
        //     },
        //     body: JSON.stringify({projectId, title, description, createdBy, assignedTo, ticketType, ticketStatus})
        // });
        // const json = await response.json()
        // console.log(json);
        // navigate(`/project/${projectId}`);
        // props.showAlert("Ticket Created Successfully", "success")
      //   if (json.success){
      //       navigate("/home");
      //       props.showAlert("Project Created Successfully", "success")
      //   }
      //   else{
      //       props.showAlert("Invalid Credentials", "danger")
      //   }
      console.log("Issue handled", issue)
      }

  return (
    <>
    <div className="container">

      <div className="card">
      <div className="card-header">
        {trade.id}
      </div>
      <div className="card-body">

      <form onSubmit={handleFormSubmit}>
        <div className="border border-1 rounded m-3 p-3">
            <h5><label htmlFor="exampleInputEmail1" className="card-title">What is the issue</label></h5>
            <select defaultValue={"Task"} className="form-select" value={issue} onChange={e => setIssue(e.target.value)} name="ticketType">
                <option value="Trade Fail">Trade Fail</option>
                <option value="Mis booking">Mis Booking</option>
                <option value="System Failure">System Failure</option>
                <option value="Other">Other</option>
            </select>
        </div>                

        <button type="submit" className="btn btn-primary">MODIFY</button>
    </form>

      </div>
    </div>
    </div>

    <div className="container my-3">

      <div className="card">
      <div className="card-header">
        Trade Detail for Reference
      </div>
      <div className="card-body">


        <div className="border border-1 rounded m-3 p-3">
        <h5 className="card-title">Book Id</h5>
        <div className="card-text">
          {trade.bookId}
        </div>
        </div>

        <div className="border border-1 rounded m-3 p-3">
        <h5 className="card-title">Counterparty Id</h5>
        <div className="card-text">
          {trade.counterpartyId}
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
        <span className="badge text-bg-light mx-1">{trade.buy_sell}</span>
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
    </>
  )
}


export default Tradeedit;