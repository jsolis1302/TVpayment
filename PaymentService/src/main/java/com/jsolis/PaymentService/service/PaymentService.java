package com.jsolis.PaymentService.service;

import com.jsolis.PaymentService.dao.PaymentDao;
import com.jsolis.PaymentService.model.Payment;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

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

    public ResponseEntity<Payment> updatePayment(Payment payment) {
        paymentDao.save(payment);
        return new ResponseEntity<>(payment, HttpStatus.OK);
    }

    public ResponseEntity<Integer> deletePayment(int payId){
        paymentDao.deleteById(payId);
        return new ResponseEntity<>(payId, HttpStatus.OK);
    }

    public ResponseEntity<Payment> getPaymentById(int payId) {

        Optional<Payment> p = paymentDao.findById(payId);
        return new ResponseEntity<>(p.orElse(new Payment()),HttpStatus.OK);
    }
}
