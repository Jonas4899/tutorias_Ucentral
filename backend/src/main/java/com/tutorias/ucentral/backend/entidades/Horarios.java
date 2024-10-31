package com.tutorias.ucentral.backend.entidades;


import java.io.Serializable;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;


@Inheritance
@NoArgsConstructor
@AllArgsConstructor
@Entity(name = "Horarios")
@Table(name = "HORARIOS")
public class Horarios implements Serializable{
    
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "SEQ_HORARIOS")
    @SequenceGenerator(name = "SEQ_HORARIOS",sequenceName = "SEQ_ESTUDIANTES",allocationSize = 1)
    @Column(name = "HOR_SERIAL",nullable = false)
    private long serial;

    @Column(name = "HOR_DIA",nullable = false)
    private String dia;

    @Column(name = "HOR_FECHAINICIO",nullable = false)
    private String horaInicio;

    @Column(name = "HOR_FECHAFIN",nullable = false)
    private String horaFin;

    @Column(name = "HOR_ESTADO",nullable = false)
    private boolean estado;


}
