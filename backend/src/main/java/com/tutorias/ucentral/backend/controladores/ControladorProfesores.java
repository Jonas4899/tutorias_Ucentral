package com.tutorias.ucentral.backend.controladores;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import com.tutorias.ucentral.backend.dto.ProfesorDto;
import com.tutorias.ucentral.backend.servicios.ServicioProfesores;

import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j2;

@Log4j2
@AllArgsConstructor
@RestController
@RequestMapping("/api/profesores")
@CrossOrigin(origins = "${spring.webmvc.cors.allowed-origins}",
            methods = {RequestMethod.GET, RequestMethod.POST, RequestMethod.DELETE, RequestMethod.PUT})

public class ControladorProfesores {

    private ServicioProfesores servicioProfesores;

    @PostMapping("/")
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<ProfesorDto>registrar(@Validated @RequestBody ProfesorDto profesorDto){
        profesorDto = servicioProfesores.registrar(profesorDto);

        return new ResponseEntity<>(profesorDto, HttpStatus.CREATED);
    }

    @GetMapping("/")
    public ResponseEntity<List<ProfesorDto>>listarProfesores(){
        return ResponseEntity.ok(servicioProfesores.listarProfesor());
    }
    
}
