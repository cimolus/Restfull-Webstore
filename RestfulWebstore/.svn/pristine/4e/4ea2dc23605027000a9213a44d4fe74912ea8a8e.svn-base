package by.kassirov.webstore.domain;

import java.util.Collection;
import java.util.List;

import org.springframework.security.core.GrantedAuthority;

public class Principal {
	
	private boolean authentication;
	private String username;
	private Collection<? extends GrantedAuthority> authorities;
	
	public Principal() {}

	public boolean isAuthenticated() {
		return authentication;
	}

	public void setAuthentication(boolean authentication) {
		this.authentication = authentication;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public Collection<? extends GrantedAuthority> getAuthorities() {
		return authorities;
	}

	public void setAuthorities(Collection<? extends GrantedAuthority> collection) {
		this.authorities = collection;
	}
	
	
	
}
