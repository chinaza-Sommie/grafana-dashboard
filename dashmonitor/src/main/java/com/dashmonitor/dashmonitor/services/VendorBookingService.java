package com.dashmonitor.dashmonitor.services;

import org.springframework.stereotype.Service;

import com.dashmonitor.dashmonitor.repositories.VendorBookingsRepository;

@Service
public class VendorBookingService {
    public VendorBookingsRepository vendorBookingsRepository;

    public VendorBookingService(VendorBookingsRepository vendorBookingsRepository){
        this.vendorBookingsRepository = vendorBookingsRepository;
    }


}
