package com.ceub.projetointegradoriii.playerfinder.repository.relationship;

import com.ceub.projetointegradoriii.playerfinder.entity.relationship.Conversation;
import com.ceub.projetointegradoriii.playerfinder.entity.relationship.Message;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MessageRepository extends JpaRepository<Message, Long> {

}
