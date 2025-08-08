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

    public Interaction createInteraction(Interaction interaction) {
        return interactionRepository.save(interaction);
    }

    public Interaction updateInteraction(Long id, Interaction interactionDetails) {
        return interactionRepository.findById(id).map(interaction -> {
            interaction.setType(interactionDetails.getType());
            interaction.setDate(interactionDetails.getDate());
            interaction.setNotes(interactionDetails.getNotes());
            return interactionRepository.save(interaction);
        }).orElseThrow(() -> new RuntimeException("Interaction not found with id " + id));
    }

    public void deleteInteraction(Long id) {
        interactionRepository.deleteById(id);
    }
}
