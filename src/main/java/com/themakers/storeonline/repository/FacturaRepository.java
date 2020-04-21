package com.themakers.storeonline.repository;

import com.themakers.storeonline.domain.Factura;

import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data  repository for the Factura entity.
 */
@SuppressWarnings("unused")
@Repository
public interface FacturaRepository extends JpaRepository<Factura, Long> {
}
