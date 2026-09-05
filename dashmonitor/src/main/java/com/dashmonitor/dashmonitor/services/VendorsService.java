package com.dashmonitor.dashmonitor.services;

import java.time.Instant;
import java.util.List;

import com.dashmonitor.dashmonitor.entities.Vendors;
import com.dashmonitor.dashmonitor.repositories.VendorsRepository;

public class VendorsService {
    public VendorsRepository vendorsRepository;

    public VendorsService(VendorsRepository vendorsRepository){
        this.vendorsRepository = vendorsRepository;
    }

    // get all, get by id, create, update and delete

    public List<Vendors> getAllVendors(){
        return vendorsRepository.findAll();
    }

    public Vendors getVendorsById(Long id){
        return vendorsRepository.findById(id).get();
    }

    public Vendors createVendors(Vendors vendor){
        return vendorsRepository.save(vendor);
    }

    public Vendors updateVendors(Long id, Vendors vendor){
        Vendors existingVendor = vendorsRepository.findById(id).get();

        existingVendor.setName(vendor.getName());
        existingVendor.setDescription(vendor.getDescription());
        existingVendor.setEmail(vendor.getEmail());
        existingVendor.setPhone(vendor.getPhone());
        existingVendor.setAddress(vendor.getAddress());
        existingVendor.setCity(vendor.getCity());
        existingVendor.setStatus(vendor.getStatus());

        return vendorsRepository.save(existingVendor);
    }

    public void deleteVendors(Long id){
        vendorsRepository.deleteById(id);
    }
}
