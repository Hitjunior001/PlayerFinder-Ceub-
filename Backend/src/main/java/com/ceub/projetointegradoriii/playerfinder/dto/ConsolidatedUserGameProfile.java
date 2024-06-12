package com.ceub.projetointegradoriii.playerfinder.dto;

import jakarta.persistence.Entity;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Map;


@Data
@NoArgsConstructor
@AllArgsConstructor
public class ConsolidatedUserGameProfile {
    private String username;
    private Long jogoId;
    private Map<String, String> attributes;
}