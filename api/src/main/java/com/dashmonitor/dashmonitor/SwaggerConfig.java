package com.dashmonitor.dashmonitor;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Info;

@Configuration 
public class SwaggerConfig {
    
    @Bean
    public OpenAPI customSwaggerOpenAPI(){
        return new OpenAPI().info(new Info()
                                        .title("Event Planner App")
                                        .version("1.0")
                                        .description("API documentation for Event Planner App"));
    }
}
