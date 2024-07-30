package com.jsolis.PaymentService.service;

import com.jsolis.PaymentService.dao.PaymentDao;
import com.jsolis.PaymentService.model.Payment;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class PaymentService {

    @Autowired
    PaymentDao paymentDao;

    public ResponseEntity<List<Payment>> getAllPayments() {
        try{
            return new ResponseEntity<>(paymentDao.findAll(),HttpStatus.OK);
        }
        catch (Exception e){
            e.printStackTrace();
        }
        return new ResponseEntity<>(new ArrayList<>(), HttpStatus.BAD_REQUEST);
    }

    public ResponseEntity<String> addPayment(Payment payment) {
        paymentDao.save(payment);
        return new ResponseEntity<>("Success", HttpStatus.CREATED);
    }
}
