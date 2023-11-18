package com.db.grad.main.service;

import com.db.grad.main.exception.ResourceNotFoundException;
//import com.db.grad.javaapi.model.Dogs;
import com.db.grad.main.model.Trade;
import com.db.grad.main.projection.TradeProjection;
import com.db.grad.main.repository.TradeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

//import java.sql.Date;
import java.util.List;

@Service
public class TradeService {

    @Autowired
    TradeRepository tradeRepository;


    public Trade saveTrade(Trade trade )
    {
        return tradeRepository.saveAndFlush(trade);
    }
    public List<TradeProjection> getAllTradesFiltered()
    {
        return tradeRepository.findTrades();
    }



//    public List<Trade> getTradesById(long id)
//    {
//        List<Trade> filteredTrades =  tradeRepository.findAllTradesById(id);
////                .orElseThrow(() -> new ResourceNotFoundException("Trade not found for this ID: "));
//        return filteredTrades;
//    }

    public TradeProjection findTradeById(long id ) throws ResourceNotFoundException
    {
        TradeProjection  trade = tradeRepository.findTradebyId(id);

        return trade;
    }

//    public Trade updateTrade( long id, Trade newTradeInfo) throws ResourceNotFoundException
//    {
//        Trade tradeToUpdate = tradeRepository.findById(id)
//                .orElseThrow(() -> new ResourceNotFoundException("Trade not found for this id :: " + id));
//
//        tradeToUpdate.setStatus(newTradeInfo.getStatus());
//
//        final Trade updatedTrade = tradeRepository.save(tradeToUpdate);
//
//        return updatedTrade;
//    }


    public Trade deleteTrade( long id ) throws ResourceNotFoundException
    {
        Trade trade = tradeRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Trade not found for this id :: " + id));

        tradeRepository.delete(trade);

        return trade;
    }
}
