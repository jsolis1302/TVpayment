package com.jsolis.PaymentService.controller;

import com.jsolis.PaymentService.model.Payment;
import com.jsolis.PaymentService.service.PaymentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("payment")
@CrossOrigin(origins="http://localhost:4200")
public class PaymentController {

    @Autowired
    PaymentService paymentService;


    @GetMapping("allPayments")
    public ResponseEntity<List<Payment>> getAllPayments(){
        return paymentService.getAllPayments();
    }

    @GetMapping("payment/{payId}")
    public ResponseEntity<Payment> getPaymentById(@PathVariable int payId){
        return paymentService.getPaymentById(payId);
    }

    @PostMapping("add")
    public ResponseEntity<String> addPayment(@RequestBody Payment payment){
        return paymentService.addPayment(payment);
    }

    @PutMapping("update")
    public ResponseEntity<Payment> updatePayment(@RequestBody Payment payment){
        return paymentService.updatePayment(payment);
    }

    @PutMapping("updateAll")
    public ResponseEntity<List<Payment>>updateAll(@RequestBody List<Payment> payments){

        return paymentService.updateAll(payments);
    }

    @DeleteMapping("delete/{payId}")
    public ResponseEntity<Integer> deletePayment(@PathVariable int payId){
        return paymentService.deletePayment(payId);
    }

}
