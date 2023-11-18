package com.db.grad.main.controller;

import com.db.grad.main.exception.ResourceNotFoundException;
import com.db.grad.main.model.Trade;
import com.db.grad.main.projection.TradeProjection;
import com.db.grad.main.service.TradeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import jakarta.validation.Valid;

import java.sql.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;


@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins = {"http://localhost:3000", "http://localhost:8080"})
public class TradeController {

   private TradeService tradeService;

    @Autowired
    public TradeController(TradeService ts) {
        tradeService = ts;
    }

    @GetMapping("/trades")
    public List<TradeProjection> getAllTrades() {
        return tradeService.getAllTradesFiltered();
    }

    @PostMapping("/trades")
    public Trade createTrade(@Valid @RequestBody Trade trade) {
        return tradeService.saveTrade(trade);
    }

    @GetMapping("/trades/{id}")
    public ResponseEntity<TradeProjection> getTradeById(@PathVariable(value = "id") Long id)
            throws ResourceNotFoundException {
        TradeProjection trade = tradeService.findTradeById(id);
        return ResponseEntity.ok().body(trade);
    }





    @DeleteMapping("/trades/{id}")
    public Map<String, Boolean> deleteTrade(@PathVariable(value = "id") Long id)
            throws ResourceNotFoundException {
        Trade trade = tradeService.deleteTrade(id);

        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return response;
    }
}


