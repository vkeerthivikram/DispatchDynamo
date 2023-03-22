package com.example.shippingservices.services;

import com.example.shippingservices.domain.ShipmentData;
import com.example.shippingservices.domain.Shipments;
import com.example.shippingservices.domain.UpdateShipment;
import com.example.shippingservices.exception.TrackIdNotFoundException;

import java.util.List;
import java.util.Map;
import java.util.Optional;

public interface ShipmentService {

    public Shipments addShipment(ShipmentData shipmentData);

    public Optional<Shipments> getShipment(String trackId) throws TrackIdNotFoundException;

    public Shipments updateShipemnt(UpdateShipment updateShipment);
    public boolean updateStatus(String trackId , String status);

    public List<Shipments> findbyuser(String userId);
    public List<Shipments> findbyvendor(String vendorId);

    public int countDailyBooking(String vendorId);

    public int countMonthlyBooking(String vendorId);
}
