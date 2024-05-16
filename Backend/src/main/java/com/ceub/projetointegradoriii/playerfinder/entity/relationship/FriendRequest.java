package com.ceub.projetointegradoriii.playerfinder.entity.relationship;

import com.ceub.projetointegradoriii.playerfinder.entity.User;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class FriendRequest {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable= false)
    private User user;

    @ManyToOne
    @JoinColumn(name = "friend_id", nullable= false)
    private User friend;

    @Column(name = "request_date", nullable= false)
    private LocalDateTime requestDate = LocalDateTime.now();


    @Column(name = "accepted", columnDefinition = "boolean default false")
    private boolean accepted = false;


}