package com.examly.springapp.service;

import com.examly.springapp.model.Interaction;
import com.examly.springapp.repository.InteractionRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class InteractionService {
    private final InteractionRepository interactionRepository;

    public InteractionService(InteractionRepository interactionRepository) {
        this.interactionRepository = interactionRepository;
    }

    public List<Interaction> getAllInteractions() {
        return interactionRepository.findAll();
    }
    
    // Add other service methods
}