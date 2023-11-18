package com.db.grad.main.repository;

import com.db.grad.main.projection.TradeProjection;
import org.springframework.data.jpa.repository.JpaRepository;

import com.db.grad.main.model.Trade;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

//import java.sql.Date;
import java.util.List;

@Repository
public interface TradeRepository extends JpaRepository<Trade,Long> {

    @Query("SELECT t.id as id, t.quantity as quantity, t.status as status, t.price as price, t.buySell as buySell, t.tradeDate as tradeDate, t.settlementDate as settlementDate, t.counterParty.name as counterPartyName, t.security.id as securityId, t.security.maturityDate as maturityDate, t.security.faceValue as faceValue, t.security.type as type, t.security.status as securityStatus, t.book.name as bookName FROM Trade t")
    List<TradeProjection> findTrades();
    @Query("SELECT t.id as id, t.quantity as quantity, t.status as status, t.price as price, t.buySell as buySell, t.tradeDate as tradeDate, t.settlementDate as settlementDate, t.counterParty.name as counterPartyName, t.security.id as securityId, t.security.maturityDate as maturityDate, t.security.faceValue as faceValue, t.security.type as type, t.security.status as securityStatus, t.book.name as bookName FROM Trade t where t.id = ?1 ")
    TradeProjection findTradebyId(long id);

    List<Trade> findAllBySecurityId(long id);
}
