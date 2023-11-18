package com.db.grad.main.repository;

import com.db.grad.main.model.Security;
import com.db.grad.main.projection.SecuritiesProjection;
import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.sql.Date;
import java.util.List;

@Repository
public interface SecurityRepository extends JpaRepository<Security,Long> {
    List<Security> findAllByMaturityDateBetween(Date start, Date end);
    @Query(value = "SELECT s.id, s.type, s.maturity_date AS maturityDate, s.status, s.face_value AS faceValue FROM Security s", nativeQuery = true)
   List<SecuritiesProjection> findAllBySecuritiesProjection();
}
