package com.example.shippingservices.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(code = HttpStatus.NOT_FOUND, reason = "TrackId Not Found Exception")
public class TrackIdNotFoundException extends Exception{
}
