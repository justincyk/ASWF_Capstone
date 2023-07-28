package com.pingpong.capstone.models;
import jakarta.persistence.*;

@Entity
@Table(name="roles")
public class Role {
    // define fields
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private int id;

    @Enumerated(EnumType.STRING)
    @Column(length=20)
    private ERole name;

    public Role() {

    }

    public Role(ERole name){
        this.name = name;
    }

}
