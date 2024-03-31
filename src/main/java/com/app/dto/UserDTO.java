package com.app.dto;

import com.app.entities.UserType;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class UserDTO {
	
	private Long id;
	
	private String firstName;
	
	private String lastName;

	private String email;

	private String password;

	private String mobileNo;

	private UserType type;

}
