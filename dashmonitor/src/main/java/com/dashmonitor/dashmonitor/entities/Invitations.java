package com.dashmonitor.dashmonitor.entities;


import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import java.time.Instant;

@Entity
@Table(name= "invitations")
public class Invitations {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Long invitationId;
    public String email;
    public String phone;
    public String status;
    public String invitationToken;
    public Instant sentAt;
    public Instant respondedAt;
    public Instant createdAt;

    public Invitations(){
        this("", "", "", "" , Instant.now(), Instant.now(), Instant.now());
    }

    public Invitations(String email, String phone, String status, String invitationToken, Instant sentAt, Instant respondedAt, Instant createdAt){
        this.email = email;
        this.phone = phone;
        this.status = status;
        this.invitationToken = invitationToken;
        this.sentAt = sentAt;
        this.respondedAt = respondedAt;
        this.createdAt = createdAt;
    }

    //setters

    public void setEmail(String email){
        this.email = email;
    }

    public void setPhone(String phone){
        this.phone = phone;
    }

    public void setStatus(String status){
        this.status = status;
    }

    public void setInvitationToken(String invitationToken){
        this.invitationToken = invitationToken;
    }

    public void setSentAt(Instant sentAt){
        this.sentAt = sentAt;
    }

    public void setRespondedAt(Instant respondedAt){
        this.respondedAt = respondedAt;
    }

    public void setCreatedAt(Instant createdAt){
        this.createdAt = createdAt;
    }

    // setters

    public Long getInvitationId(){
        return this.invitationId;
    }

    public String getEmail(){
        return this.email;
    }

    public String getPhone(){
        return this.phone;
    }

    public String getStatus(){
        return this.status;
    }

    public String getInvitationToken(){
        return this.invitationToken;
    }

    public Instant getSentAt(){
        return sentAt;
    }

    public Instant getRespondedAt(){
        return respondedAt;
    }

    public Instant getCreatedAt(){
        return this.createdAt;
    }
}
