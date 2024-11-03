package com.tutorias.ucentral.backend.entidades;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.Data;
import jakarta.persistence.*;
import java.io.Serializable;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity(name = "Evaluaciones")
@Table(name = "EVALUACIONES")
public class Evaluaciones implements Serializable{

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "SEQ_EVALUCIONES")
    @SequenceGenerator(name = "SEQ_EVALUCIONES",sequenceName = "SEQ_EVALUCIONES",allocationSize = 1)
    @Column(name = "EVA_ID",nullable = false)
    private long id;
    
    @Column(name = "EVA_CALIFICACION",nullable = false)
    private long calificacion;

    @Column(name = "EVA_COMENTARIO",nullable = false)
    private String comentario;

    @Column(name = "EVA_FECHA",nullable = false)
    private String fecha;
}
