package com.tutorias.ucentral.backend.servicios;

import java.io.Serializable;

import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import com.tutorias.ucentral.backend.dto.TutoriasDto;
import com.tutorias.ucentral.backend.entidades.Tutorias;
import com.tutorias.ucentral.backend.repositorios.RepositorioTutorias;

import lombok.AllArgsConstructor;
import org.modelmapper.TypeToken;
import java.util.List;

@AllArgsConstructor
@Service
public class ServicioTutorias implements Serializable{
    
    private ModelMapper modelMapper;
    private final RepositorioTutorias repoTutorias;

    public TutoriasDto registrar(TutoriasDto tutoriasDto){

        Tutorias tutoria = repoTutorias.save(modelMapper.map(tutoriasDto,Tutorias.class));
        return modelMapper.map(tutoria, TutoriasDto.class);
    }

    public List<TutoriasDto> listarTutorias(){
        TypeToken<List<TutoriasDto>> typeToken = new TypeToken<>(){};
        return modelMapper.map(repoTutorias.findAll(),typeToken.getType());
    }
}
