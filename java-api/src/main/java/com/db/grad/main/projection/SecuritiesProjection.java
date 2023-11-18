package com.db.grad.main.projection;

import org.springframework.beans.factory.annotation.Value;

import java.sql.Date;

public interface SecuritiesProjection {
    long getId();
    String getType();
    Date getMaturityDate();
    String getStatus();
    Float getFaceValue();


}
