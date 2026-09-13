INSERT INTO users (first_name, last_name, email, password, created_at)
VALUES
    ('James', 'Smith', 'james.smith@example.com', 'password123', NOW()),
    ('Emily', 'Johnson', 'emily.johnson@example.com', 'password123', NOW()),
    ('Daniel', 'Williams', 'daniel.williams@example.com', 'password123', NOW());

INSERT INTO vendors (name, description, email, phone, address, city, status, created_at, updated_at)
VALUES
    ('Grand Palace Hall', 'Elegant event venue for weddings and corporate events', 'contact@grandpalacehall.com', '555-101-2020', '123 Palace Ave', 'New York', 'ACTIVE', NOW(), NOW()),
    ('Tasty Bites Catering', 'Full-service catering for all occasions', 'info@tastybites.com', '555-202-3030', '45 Culinary St', 'Los Angeles', 'ACTIVE', NOW(), NOW()),
    ('Rhythm & Beats Entertainment', 'DJ and live band entertainment services', 'bookings@rhythmbeats.com', '555-303-4040', '78 Music Blvd', 'Chicago', 'ACTIVE', NOW(), NOW());

INSERT INTO serviceCategories (category_name, description)
VALUES
    ('Venue', 'Locations and spaces for hosting events'),
    ('Food and Drinks', 'Catering, beverages, and dining services'),
    ('Entertainment', 'Music, performances, and entertainment services');

INSERT INTO vendorServices (name, description, base_price, created_at, updated_at, vendors_id, service_category_id)
VALUES
    ('Grand Ballroom Rental', 'Spacious ballroom rental for up to 300 guests', 2500.00, NOW(), NOW(), 1, 1),
    ('Wedding Catering Package', 'Three-course meal catering for weddings', 1800.00, NOW(), NOW(), 2, 2),
    ('Live DJ Performance', '4-hour live DJ set with sound equipment', 900.00, NOW(), NOW(), 3, 3);

INSERT INTO events (name, event_type, start_date_time, end_date_time, total_amount, guest_count, status, created_at, updated_at, user_id)
VALUES
    ('James & Anna Wedding', 'Wedding', '2026-11-14 16:00:00', '2026-11-14 23:00:00', '5200.00', 150, 'CONFIRMED', NOW(), NOW(), 1),
    ('Johnson Corp Annual Gala', 'Corporate', '2026-12-05 18:00:00', '2026-12-05 22:00:00', '3400.00', 100, 'PENDING', NOW(), NOW(), 2),
    ('Daniel Birthday Bash', 'Birthday', '2026-10-20 19:00:00', '2026-10-20 23:30:00', '1200.00', 50, 'CONFIRMED', NOW(), NOW(), 3);
 

INSERT INTO vendorBookings (agreed_price, start_date_time, bookingstatus, created_at, updated_at, event_id, service_id)
VALUES
    ('2500.00', '2026-11-14 16:00:00', 'CONFIRMED', NOW(), NOW(), 1, 1),
    ('1800.00', '2026-12-05 18:00:00', 'PENDING', NOW(), NOW(), 2, 2),
    ('900.00', '2026-10-20 19:00:00', 'CONFIRMED', NOW(), NOW(), 3, 3);
 