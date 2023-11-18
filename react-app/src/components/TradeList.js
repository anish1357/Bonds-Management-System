import React from 'react';
import TradeItem from './TradeItem';
import { Link } from 'react-router-dom';

const TradeList = ({ trades }) => {
    const groupedTrades = {};
    var bgColor = "";

    for (const key in trades) {
        const trade = trades[key];
        const settlementDate = new Date(trade.settlementDate);
        // console.log(trade)
        const curDate = new Date();
        const category = settlementDate < curDate ? (trade.issue != "NA" ? "Issues" : "Post Maturity") : "Other";
        // bgColor = category !== "Other" ? ( category == "Issues" ? "bg-primary" : "bg-danger"): "bg-success"; 

        // console.log(bgColor)

        if (!groupedTrades[category]) {
            groupedTrades[category] = [];
        }

        groupedTrades[category].push(trade);
    }

    return (
        <div>
            {Object.keys(groupedTrades).map(category => (
                <div key={category}>
                    <div className={`badge text-dark mx-5 ${category !== "Other" ? ( category == "Issues" ? "bg-primary" : "bg-danger"): "bg-success"}`}>
                        {category}
                    </div>
                    <div className='border border-3 rounded p-2'>
                    {groupedTrades[category].map(trade => (
                        <Link key={trade.id} to={{
                            pathname: `/trades/${trade.id}`,
                            state: { id: trade.id }
                        }}>
                            <TradeItem trade={trade} />
                            {/* <TradeList trades={trade} /> */}
                        </Link>
                        // <TradeItem key={trade.id} trade={trade} />
                    ))}</div> <br/>
                </div>
            ))}
        </div>
    );
};

export default TradeList;