package com.db.grad.main.service;

import com.db.grad.main.model.User;
import com.db.grad.main.repository.UserRepository;
import com.db.grad.main.tokenauth.jwt.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;
import java.util.List;

@Service
public class UserService {

    @Autowired
    UserRepository userRepository;
    @Autowired
    JwtUtil jwtUtil;
    public List<User> getAllUsers() {
        List<User> users = userRepository.findAll();
        if (users == null) {
            return new ArrayList<>();
        }
        return users;
    }

    public User getUserByEmail(String email) {
        User user = userRepository.findByEmail(email);
        return user;
    }

    public User addOrUpdateUser(User user) {
        return userRepository.saveAndFlush(user);
    }

    public User getUserByToken(String token) {
        String email = jwtUtil.extractEmail(token);
        return this.getUserByEmail(email);
    }

    public void deleteUser(User user) {
        userRepository.delete(user);
    }

}
