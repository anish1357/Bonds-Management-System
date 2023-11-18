package com.db.grad.main.service;
import com.db.grad.main.exception.ResourceNotFoundException;
import com.db.grad.main.model.Security;
import com.db.grad.main.projection.SecuritiesProjection;
import com.db.grad.main.repository.SecurityRepository;
import com.db.grad.main.repository.TradeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.sql.Date;
import java.util.List;

@Service
public class SecurityService {
    @Autowired
    SecurityRepository securityRepository;


    public Security saveSecurity(Security security )
    {
        return securityRepository.saveAndFlush(security);
    }


    public List<SecuritiesProjection> getAllSecurities()
    {

        return securityRepository.findAllBySecuritiesProjection();
    }


    public List<Security> getAllSecuritiesByDate(Date start, Date end)
    {
        List<Security> filteredSecurities =  securityRepository.findAllByMaturityDateBetween(start,end);
//                .orElseThrow(() -> new ResourceNotFoundException("Security not found for this date range:: "));
        return filteredSecurities;
    }

    public Security findSecurityById(long id ) throws ResourceNotFoundException
    {
        Security  security = securityRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Security not found for this id :: " + id));
        return security;
    }

    public Security updateSecurity( long id, Security newSecurityInfo) throws ResourceNotFoundException
    {
        Security securityToUpdate = securityRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Security not found for this id :: " + id));

        securityToUpdate.setStatus(newSecurityInfo.getStatus());

        final Security updatedSecurity = securityRepository.save(securityToUpdate);

        return updatedSecurity;
    }


    public Security deleteSecurity( long id ) throws ResourceNotFoundException
    {
        Security security = securityRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Security not found for this id :: " + id));

        securityRepository.delete(security);

        return security;
    }
}
