package com.tutorias.ucentral.backend.entidades;

import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;
import jakarta.persistence.*;
import lombok.Data;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity(name = "Aulas")
@Table(name = "AULAS")
public class Aulas {
    
    @Id
    @Column(name = "AUL_ID",nullable = false)
    private long id;

    @Column(name = "AUL_NUMERO",nullable = false)
    private String numero;

    @Column(name = "AUL_CAPACIDAD",nullable = false)
    private long capacidad;
}
