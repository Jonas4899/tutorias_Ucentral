package com.tutorias.ucentral.backend.controladores;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.tutorias.ucentral.backend.servicios.ServicioUsuarios;
import com.tutorias.ucentral.backend.dto.UsuarioDto;

import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j2;
import java.util.List;

@Log4j2
@AllArgsConstructor
@RestController
@RequestMapping("/api/usuarios")
@CrossOrigin(origins = "${spring.webmvc.cors.allowed-origins}",
                methods = {RequestMethod.GET, RequestMethod.DELETE})

public class ControladorUsuarios {
    
    private ServicioUsuarios servicioUsuarios;

    @GetMapping("/")
    public ResponseEntity<List<UsuarioDto>> listarUsuarios(){

        return ResponseEntity.ok(servicioUsuarios.listarUsuario());
    }
}
