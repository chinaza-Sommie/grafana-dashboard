package com.dashmonitor.dashmonitor.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.dashmonitor.dashmonitor.entities.VendorBookings;
import com.dashmonitor.dashmonitor.repositories.VendorBookingsRepository;

@Service
public class VendorBookingService {
    public VendorBookingsRepository vendorBookingsRepository;

    public VendorBookingService(VendorBookingsRepository vendorBookingsRepository){
        this.vendorBookingsRepository = vendorBookingsRepository;
    }

    public List<VendorBookings> getAllVendorBookings(){
        return vendorBookingsRepository.findAll();
    }

    public VendorBookings getVendorBookingById(Long id){
        return vendorBookingsRepository.findById(id).get();
    }

    public VendorBookings createVendorBooking(VendorBookings vendorBooking){
        return vendorBookingsRepository.save(vendorBooking);
    }

    public VendorBookings updateVendorBooking(Long id, VendorBookings vendorBooking){
        VendorBookings foundBooking = vendorBookingsRepository.findById(id).get();
        
        foundBooking.setAgreedPrice(vendorBooking.getAgreedPrice());
        foundBooking.setStartDateTime(vendorBooking.getStartDateTime());
        foundBooking.setBookingstatus(vendorBooking.getBookingstatus());
        foundBooking.setEventId(vendorBooking.getEventId());
        foundBooking.setVendorServices(vendorBooking.getVendorServices());

        return vendorBookingsRepository.save(foundBooking);
    }

    public void deleteVendorBooking(Long id){
        vendorBookingsRepository.deleteById(id);
    }
}
