package com.examly.springapp.controller;

import com.examly.springapp.model.Interaction;
import com.examly.springapp.service.InteractionService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/interactions")
@CrossOrigin(origins = "*") // allow frontend access
public class InteractionController {

    private final InteractionService interactionService;

    public InteractionController(InteractionService interactionService) {
        this.interactionService = interactionService;
    }

    @GetMapping
    public List<Interaction> getAllInteractions() {
        return interactionService.getAllInteractions();
    }

    @PostMapping
    public Interaction createInteraction(@RequestBody Interaction interaction) {
        return interactionService.createInteraction(interaction);
    }

    @PutMapping("/{id}")
    public Interaction updateInteraction(@PathVariable Long id, @RequestBody Interaction interactionDetails) {
        return interactionService.updateInteraction(id, interactionDetails);
    }

    @DeleteMapping("/{id}")
    public void deleteInteraction(@PathVariable Long id) {
        interactionService.deleteInteraction(id);
    }
}
