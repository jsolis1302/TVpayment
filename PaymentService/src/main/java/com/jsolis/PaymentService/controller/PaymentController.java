package com.jsolis.PaymentService.controller;

import com.jsolis.PaymentService.model.Payment;
import com.jsolis.PaymentService.service.PaymentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("payment")
public class PaymentController {

    @Autowired
    PaymentService paymentService;

    @GetMapping("allPayments")
    public ResponseEntity<List<Payment>> getAllPayments(){
        return paymentService.getAllPayments();
    }
}
