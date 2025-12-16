package org.example.guestbook.repository;

import org.example.guestbook.domain.GuestBook;
import org.springframework.data.jpa.repository.JpaRepository;

public interface GuestBookRepository extends JpaRepository<GuestBook, Long> {
}
