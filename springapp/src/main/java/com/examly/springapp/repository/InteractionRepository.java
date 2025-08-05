package com.examly.springapp.repository;

import com.examly.springapp.model.Interaction;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface InteractionRepository extends JpaRepository<Interaction, Long> {
    // Custom query methods can be added here
}