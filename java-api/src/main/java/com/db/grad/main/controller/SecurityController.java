package com.db.grad.main.controller;


import com.db.grad.main.exception.ResourceNotFoundException;
import com.db.grad.main.model.Security;
import com.db.grad.main.projection.SecuritiesProjection;
import com.db.grad.main.service.SecurityService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.sql.Date;

import java.util.*;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins = {"http://localhost:3000", "http://localhost:8080"})
public class SecurityController {
    private SecurityService securityService;

    @Autowired
    public SecurityController(SecurityService ss) {
        securityService = ss;
    }

    @GetMapping("/securities")
    public List<SecuritiesProjection> getAllSecurities() {
        return securityService.getAllSecurities();
    }

    @GetMapping("/securities/date")
    public List<Security> getSecurityByDate(@RequestParam Date start, @RequestParam Date end){
        return securityService.getAllSecuritiesByDate(start,end);
    }

    @PostMapping("/securities")
    public Security createSecurity(@Valid @RequestBody Security security) {
        return securityService.saveSecurity(security);
    }

    @GetMapping("/securities/{id}")
    public ResponseEntity<Security> getSecurityById(@PathVariable(value = "id") Long id)
            throws ResourceNotFoundException {
        Security security = securityService.findSecurityById(id);
        return ResponseEntity.ok().body(security);
    }

    @PutMapping("/securities/{id}")
    public ResponseEntity<Security> updateSecurity(@PathVariable(value = "id") Long id,
                                                   @Valid @RequestBody Security newSecurityInfo) throws ResourceNotFoundException {

        final Security updatedSecurity = securityService.updateSecurity(id, newSecurityInfo);
        return ResponseEntity.ok(updatedSecurity);
    }




    @DeleteMapping("/securities/{id}")
    public Map<String, Boolean> deleteSecurity(@PathVariable(value = "id") Long id)
            throws ResourceNotFoundException {
        Security security = securityService.deleteSecurity(id);

        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return response;
    }
}
