package com.dashmonitor.dashmonitor.services;
import java.util.List;

import com.dashmonitor.dashmonitor.entities.VendorServices;
import com.dashmonitor.dashmonitor.repositories.VendorServicesRepository;

public class VendorServicesService {
    public VendorServicesRepository vendorServicesRepository;

    public VendorServicesService(VendorServicesRepository vendorServicesRepository){
        this.vendorServicesRepository = vendorServicesRepository;
    }

    public List<VendorServices> getAllVendorServices(){
        return vendorServicesRepository.findAll();
    }

    public VendorServices getVendorServicesById(Long id){ 
        return vendorServicesRepository.findById(id).get();
    }

    public VendorServices createVendorServices(VendorServices vendorServices){
        return vendorServicesRepository.save(vendorServices);
    }

    public VendorServices updateVendorServices(Long id, VendorServices vendorServices){
        VendorServices existingVendorService = vendorServicesRepository.findById(id).get();

        existingVendorService.setName(vendorServices.getName());
        existingVendorService.setDescription(vendorServices.getDescription());
        existingVendorService.setBasePrice(vendorServices.getBasePrice());
        existingVendorService.setVendorsId(vendorServices.getVendorsId());
        existingVendorService.setServiceCategoryId(vendorServices.getServiceCategoryId());

        return vendorServicesRepository.save(existingVendorService);
    }

    public void deleteVendorServices(Long id){
        vendorServicesRepository.deleteById(id);
    }
}
