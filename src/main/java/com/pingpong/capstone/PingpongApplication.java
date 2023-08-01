package com.pingpong.capstone;

import io.github.cdimascio.dotenv.Dotenv;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class PingpongApplication {

	public static void main(String[] args) {
		Dotenv dotenv = Dotenv.load();
		String DB_PASSWORD = dotenv.get("DB_PASSWORD");
		String DB_USERNAME = dotenv.get("DB_USERNAME");
		System.setProperty("username", DB_USERNAME);
		System.setProperty("password", DB_PASSWORD);

		SpringApplication.run(PingpongApplication.class, args);
	}

}
