package com.spring.alzheimers.service;

import com.spring.alzheimers.dto.RegisterProfressionalDto;
import com.spring.alzheimers.model.Professional;
import com.spring.alzheimers.repository.ProfessionalRepository;
import org.springframework.stereotype.Service;

@Service
public class ProfessionalService {

    private final ProfessionalRepository professionalRepository;

    public ProfessionalService(ProfessionalRepository professionalRepository){
        this.professionalRepository = professionalRepository;
    }

    public void create(RegisterProfressionalDto input){
        Professional professional = new Professional(
                input.getOrganizationName(),
                input.getAddress(),
                input.getZipcode(),
                input.getCity(),
                input.getState(),
                input.getUserId()
        );

        professionalRepository.save(professional);
    }
}
