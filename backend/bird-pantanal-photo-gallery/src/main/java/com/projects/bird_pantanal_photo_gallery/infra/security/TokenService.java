package com.projects.bird_pantanal_photo_gallery.infra.security;
import java.time.Instant;
import java.time.LocalDateTime;
import java.time.ZoneOffset;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.exceptions.JWTCreationException;
import com.auth0.jwt.exceptions.JWTVerificationException;
import com.projects.bird_pantanal_photo_gallery.model.UserModel;

@Service
public class TokenService {
	@Value("${api.security.token.secret}")
	private String secret;

	public String generateToken(UserModel userModel) {
		try {
			Algorithm algorithm = Algorithm.HMAC256(secret);

			String token = JWT.create()
					.withIssuer("bird-pantanal-photo-gallery")
					.withSubject(userModel.getEmail())
					.withExpiresAt(this.generateExpirationDate())
					.sign(algorithm);
			return token;
		} catch (JWTCreationException exception) {
			throw new RuntimeException("Error while authenticating");
		}
	}

	public String validateToken(String token) {
		try {
			Algorithm algorithm = Algorithm.HMAC256(secret);
			return JWT.require(algorithm).withIssuer("bird-pantanal-photo-gallery").build().verify(token).getSubject();
		} catch (JWTVerificationException exception) {
			return null;
		}
	}

	private Instant generateExpirationDate() {
		return LocalDateTime.now().plusHours(2).toInstant(ZoneOffset.of("-03:00"));
	}
}
