package com.jsolis.PaymentService.model;

import jakarta.persistence.*;
import lombok.Data;
import org.springframework.context.annotation.Primary;

import java.util.Date;

@Data
@Entity
public class Payment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int payId;
    private Date payDate;
    private String url;
    private double amount;
    @Column(name = "userId", nullable = true)
    private Integer userId;
    /*TODO user id */
}
