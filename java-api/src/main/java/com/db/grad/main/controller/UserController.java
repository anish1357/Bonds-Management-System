package com.db.grad.main.controller;

import com.db.grad.main.model.User;
import com.db.grad.main.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import javax.servlet.http.HttpServletRequest;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/users/")
public class UserController {

    @Autowired
    UserService userService;

    @CrossOrigin(origins = "*")
    @GetMapping("")
    public List<User> getUsers() {
        return userService.getAllUsers();
    }

    @CrossOrigin(origins = "*")
    @PostMapping("")
    public User addUser(HttpServletRequest request, @RequestBody Map<String, String> body) {
//        User requestingUser = userService.getUserByToken((String) request.getAttribute("token"));
//        if (!requestingUser.getRole().equals("ADMIN")) {
//            throw new ResponseStatusException(HttpStatus.UNAUTHORIZED, "Not authorized to create user");
//        }
        User user = User.builder()
                .email(body.get("email"))
                .name(body.get("name"))
                .role(body.get("role"))
                .password(body.get("password"))
                .build();

        return userService.addOrUpdateUser(user);
    }

    @CrossOrigin(origins = "*")
    @PutMapping("{email}/")
    public User updateUser(HttpServletRequest request,
                           @RequestBody Map<String, String> body,
                           @PathVariable(value="email") String email) {

        User requestingUser = userService.getUserByToken((String) request.getAttribute("token"));
        User user = userService.getUserByEmail(email);

        user.setEmail(body.get("email"));
        user.setPassword(body.get("password"));
        user.setRole(body.get("role"));
        user.setName(body.get("name"));

        if (!requestingUser.equals(user))
            return requestingUser;
        return userService.addOrUpdateUser(user);
    }

    @CrossOrigin(origins = "*")
    @DeleteMapping("{email}/")
    public boolean deleteUser(HttpServletRequest request,
                              @RequestBody Map<String, String> body,
                              @PathVariable(value="email") String email) {

        User requestingUser = userService.getUserByToken((String) request.getAttribute("token"));
        User user = userService.getUserByEmail(email);

        if (!requestingUser.equals(user) & !requestingUser.getRole().equals("ADMIN"))
            return false;
        userService.deleteUser(user);
        return true;
    }
}
