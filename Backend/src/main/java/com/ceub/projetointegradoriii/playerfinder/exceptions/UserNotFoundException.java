package com.ceub.projetointegradoriii.playerfinder.exceptions;


public class UserNotFoundException extends RuntimeException  {
    public UserNotFoundException(String message) {
        super(message);
    }

}