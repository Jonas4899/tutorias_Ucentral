package com.tutorias.ucentral.backend.servicios;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.stereotype.Service;

import com.tutorias.ucentral.backend.dto.AulaDto;
import com.tutorias.ucentral.backend.entidades.Aulas;
import com.tutorias.ucentral.backend.repositorios.RepositorioAulas;

import lombok.AllArgsConstructor;

@AllArgsConstructor
@Service
public class ServicioAulas {
    
    private ModelMapper modelMapper;
    private final RepositorioAulas repoAulas;

    public AulaDto registrar(AulaDto aulaDto){

        Aulas aula = repoAulas.save(modelMapper.map(aulaDto,Aulas.class));
        return modelMapper.map(aula, AulaDto.class);
    }

    public List<AulaDto> listarTutorias(){
        TypeToken<List<AulaDto>> typeToken = new TypeToken<>(){};
        return modelMapper.map(repoAulas.findAll(),typeToken.getType());
    }
}
