package com.spring.alzheimers.controller;

import com.spring.alzheimers.dto.ApiResponseDto;
import com.spring.alzheimers.dto.RegisterProfessionalDto;
import com.spring.alzheimers.service.ProfessionalService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RequestMapping("/api/professional")
@RestController
public class ProfessionalController {

    private final ProfessionalService professionalService;

    public ProfessionalController(ProfessionalService professionalService){
        this.professionalService = professionalService;
    }

    @PostMapping
    public ResponseEntity<ApiResponseDto> addProfessional(@RequestBody RegisterProfessionalDto input){
        professionalService.create(input);
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(new ApiResponseDto("Successfully created Professional"));
    }


}
