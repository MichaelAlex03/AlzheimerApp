package com.spring.alzheimers.controller;

import com.spring.alzheimers.dto.ApiResponseDto;
import com.spring.alzheimers.dto.RegisterProfressionalDto;
import com.spring.alzheimers.service.ProfessionalService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("/professional")
@RestController
public class ProfessionalController {

    private final ProfessionalService professionalService;

    public ProfessionalController(ProfessionalService professionalService){
        this.professionalService = professionalService;
    }

    @PostMapping("/")
    public ResponseEntity<ApiResponseDto> addProfessional(@RequestBody RegisterProfressionalDto input){
        professionalService.create(input);
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(new ApiResponseDto("Successfully created Professional"));
    }
}
