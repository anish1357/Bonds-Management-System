package com.db.grad.main.projection;

import com.db.grad.main.model.Book;
import com.db.grad.main.model.CounterParty;
import com.db.grad.main.model.Security;
import jakarta.persistence.ManyToOne;

import java.util.Date;

public interface TradeProjection {
    Long getId();
    int getQuantity();
    String getStatus();
    float getPrice();
    String getBuySell();
    Date getTradeDate();
    Date getSettlementDate();
    String getCounterPartyName();
    Date getMaturityDate(); // From Security
    float getFaceValue(); // From Security
    String getType(); // From Security
    String getSecurityStatus(); // From Security
    String getBookName(); // From Book
}

