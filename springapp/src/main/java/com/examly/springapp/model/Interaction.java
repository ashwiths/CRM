package com.examly.springapp.model;

import jakarta.persistence.*;
import java.time.LocalDateTime;  // Correct import
import lombok.Data;

@Data
@Entity
@Table(name = "interactions")
public class Interaction {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private Long leadId;
    private LocalDateTime date;  // This should now work
    private String notes;
    
    // Constructors, getters and setters are handled by @Data
}