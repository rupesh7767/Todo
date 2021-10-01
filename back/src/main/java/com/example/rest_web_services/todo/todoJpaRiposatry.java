package com.example.rest_web_services.todo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface todoJpaRiposatry extends JpaRepository<todo, Long>{

	List<todo> findByUserName(String user_name);

	
}
