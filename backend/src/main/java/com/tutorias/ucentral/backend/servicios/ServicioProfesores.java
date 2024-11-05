package com.tutorias.ucentral.backend.servicios;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.stereotype.Service;

import com.tutorias.ucentral.backend.dto.ProfesorDto;
import com.tutorias.ucentral.backend.entidades.Profesores;
import com.tutorias.ucentral.backend.repositorios.RepositorioProfesores;
import com.tutorias.ucentral.backend.repositorios.RepositorioUsuarios;

@Service
public class ServicioProfesores extends ServicioUsuarios {

    private ModelMapper modelMapper;
    private final RepositorioProfesores repoProfesores;

    public ServicioProfesores(ModelMapper modelMapper, RepositorioUsuarios repoUsuarios, RepositorioProfesores repoProfesores){
        super(modelMapper, repoUsuarios);
        this.repoProfesores = repoProfesores;
    }

    public ProfesorDto registrar(ProfesorDto profesorDto){
        Profesores profesor = repoProfesores.save(modelMapper.map(profesorDto, Profesores.class));
        return modelMapper.map(profesor, ProfesorDto.class);
    }

    public List<ProfesorDto> listarProfesor(){
        TypeToken<List<ProfesorDto>>typeToken = new TypeToken<>(){};
        return modelMapper.map(repoProfesores.findAll(),typeToken.getType());
    }
    
}
