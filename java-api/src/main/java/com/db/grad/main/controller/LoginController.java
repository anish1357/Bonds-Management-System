package com.db.grad.main.controller;

import com.db.grad.main.model.User;
import com.db.grad.main.service.UserService;
import com.db.grad.main.tokenauth.jwt.JwtUtil;
import lombok.Getter;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.HashMap;
import java.util.Map;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/api/auth/")
public class LoginController {
    @Autowired
    private AuthenticationManager authenticationManager;
    @Autowired
    private JwtUtil jwtUtil;
    @Autowired
    private UserService userService;
    @CrossOrigin(origins = "*")
    @PostMapping("login")
    public ResponseEntity<?> login(@RequestBody LoginDetails loginDetails) {
        String email = loginDetails.getEmail();
        String password = loginDetails.getPassword();
        Authentication authentication = new UsernamePasswordAuthenticationToken(
                email,
                password
        );
        try{
            authentication = authenticationManager.authenticate(authentication);
        } catch (Exception e) {
            return ResponseEntity.status(400).body("bad request");
        }
        if (authentication.isAuthenticated()) {
            String token = jwtUtil.generateToken(email);
            Map<String, Object> response = new HashMap<>();
            User user = userService.getUserByEmail(email);
            response.put("authtoken", token);
            response.put("name", user.getName());
            return ResponseEntity.ok(response);
        }
        return ResponseEntity.status(401).body("Invalid username/password");
    }
}

@Getter
@Setter
class LoginDetails {
    private String email;
    private String password;
}
