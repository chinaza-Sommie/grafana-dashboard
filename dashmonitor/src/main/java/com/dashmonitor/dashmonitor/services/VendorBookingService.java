package com.dashmonitor.dashmonitor.services;

import com.dashmonitor.dashmonitor.repositories.VendorBookingsRepository;

public class VendorBookingService {
    public VendorBookingsRepository vendorBookingsRepository;

    public VendorBookingService(VendorBookingsRepository vendorBookingsRepository){
        this.vendorBookingsRepository = vendorBookingsRepository;
    }

    
}
