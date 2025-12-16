package org.example.guestbook.controller;

import lombok.RequiredArgsConstructor;
import org.example.guestbook.domain.GuestBook;
import org.example.guestbook.repository.GuestBookRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/guestbooks")
public class GuestBookController {
    private final GuestBookRepository guestBookRepository;

    @GetMapping
    public List<GuestBook> getGuestBooks(){
        return guestBookRepository.findAll();
    }

    @PostMapping
    public GuestBook createGuestBook(@RequestBody GuestBook guestBook){
        return guestBookRepository.save(guestBook);
    }
}
