package com.pingpong.capstone;

import io.github.cdimascio.dotenv.Dotenv;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class PingpongApplication {

	public static void main(String[] args) {

		SpringApplication.run(PingpongApplication.class, args);
		Dotenv dotenv = Dotenv.load();
		String password = dotenv.get("DB_PASSWORD");
		String username = dotenv.get("DB_USERNAME");
	}

}
