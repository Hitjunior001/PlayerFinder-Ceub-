package com.ceub.projetointegradoriii.playerfinder.entity.relationship;

import com.ceub.projetointegradoriii.playerfinder.entity.User;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.Cascade;
import org.hibernate.sql.Delete;

import java.time.LocalDateTime;

import static jakarta.persistence.CascadeType.REMOVE;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "friendship")
public class Friendship {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToOne
    @JoinColumn(name = "friend_id")
    private User friend;

    @Column(name = "accepted_date")
    private LocalDateTime acceptedDate;
}