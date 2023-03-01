package com.tehorie.tinypmt;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Info;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@OpenAPIDefinition(info = @Info(title = "TinyPMT API仕様", description = "TiyPMTのAPI仕様書です。", version = "v0.1"))
public class TinyPmtApplication {

	public static void main(String[] args) {
		SpringApplication.run(TinyPmtApplication.class, args);
	}

}
