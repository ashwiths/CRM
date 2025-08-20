package com.examly.springapp.controller;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/health")
public class HealthController {

    @GetMapping
    public String healthCheck() {
        return "Backend is running! Time: " + new java.util.Date();
    }
}