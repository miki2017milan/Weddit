package com.milens.WedditSpring;

import jakarta.persistence.*;
import lombok.Data;

import java.util.Set;

@Data
@Entity
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue
    @Column(name = "user_id")
    private Integer id;

    @Column(nullable = false, name = "user_name")
    private String username;

    @Column(nullable = false, name = "user_password")
    private String password;

    @Column(nullable = false, unique = true, name = "user_email")
    private String email;

    @ElementCollection(fetch = FetchType.EAGER)
    @CollectionTable(
            name = "roles",
            joinColumns = @JoinColumn(name="user_id")
    )
    @Column(name = "user_roles")
    private Set<String> roles;

}
