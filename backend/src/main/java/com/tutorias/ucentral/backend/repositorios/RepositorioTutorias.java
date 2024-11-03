package com.tutorias.ucentral.backend.repositorios;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

import com.tutorias.ucentral.backend.entidades.Tutorias;

@Repository
public interface RepositorioTutorias extends JpaRepository<Tutorias,Long>,JpaSpecificationExecutor<Tutorias>{
    
}
