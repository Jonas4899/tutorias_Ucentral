package com.tutorias.ucentral.backend.repositorios;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import com.tutorias.ucentral.backend.entidades.Profesores;

@Repository
public interface RepositorioProfesores extends JpaRepository<Profesores,Long>, JpaSpecificationExecutor<Profesores>{
    
}
