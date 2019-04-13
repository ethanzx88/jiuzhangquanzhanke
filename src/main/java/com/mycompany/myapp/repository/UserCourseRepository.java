package com.mycompany.myapp.repository;

import com.mycompany.myapp.domain.UserCourse;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import javax.persistence.Cacheable;
import java.util.List;
import java.util.Optional;

@Repository
public interface UserCourseRepository extends JpaRepository<UserCourse, Long>{

    // Optional<UserCourse> findUserCourse(long course_id, long user_id);

}
