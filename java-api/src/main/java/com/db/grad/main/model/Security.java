package com.db.grad.main.model;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.sql.Date;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Security {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String isin;

    private String cusip;


    private Date maturityDate;

    private float coupon;

    private String type;

    private Float faceValue;

    private String status;

    private String issuer;
}
