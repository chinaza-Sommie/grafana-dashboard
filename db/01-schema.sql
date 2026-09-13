USE eventPlanner;

CREATE TABLE IF NOT EXISTS users (
    user_id BIGINT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(255),
    last_name VARCHAR(255),
    email VARCHAR(255),
    password VARCHAR(255),
    created_at TIMESTAMP(6),
    PRIMARY KEY (user_id)
);

CREATE TABLE IF NOT EXISTS events (
    event_id BIGINT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255),
    event_type VARCHAR(255),
    start_date_time TIMESTAMP(6),
    end_date_time TIMESTAMP(6),
    total_amount VARCHAR(255),
    guest_count INT,
    status VARCHAR(255),
    created_at TIMESTAMP(6),
    updated_at TIMESTAMP(6),
    user_id BIGINT,
    PRIMARY KEY (event_id),

    CONSTRAINT fk_events_user
        FOREIGN KEY (user_id)
        REFERENCES users(user_id)
);

CREATE TABLE IF NOT EXISTS service_categories (
    category_id BIGINT NOT NULL AUTO_INCREMENT,
    category_name VARCHAR(255),
    description VARCHAR(255),
    PRIMARY KEY (category_id)
);

CREATE TABLE IF NOT EXISTS vendors (
    vendors_id BIGINT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255),
    description VARCHAR(255),
    email VARCHAR(255),
    phone VARCHAR(255),
    address VARCHAR(255),
    city VARCHAR(255),
    status VARCHAR(255),
    created_at TIMESTAMP(6),
    updated_at TIMESTAMP(6),
    PRIMARY KEY (vendors_id)
);

CREATE TABLE IF NOT EXISTS vendor_services (
    service_id BIGINT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255),
    description VARCHAR(255),
    base_price DECIMAL(19, 2),
    created_at TIMESTAMP(6),
    updated_at TIMESTAMP(6),

    vendors_id BIGINT,
    service_category_id BIGINT,

    PRIMARY KEY (service_id),

    CONSTRAINT fk_vendor_services_vendor
        FOREIGN KEY (vendors_id)
        REFERENCES vendors(vendors_id),

    CONSTRAINT fk_vendor_services_category
        FOREIGN KEY (service_category_id)
        REFERENCES service_categories(category_id)
);

CREATE TABLE IF NOT EXISTS vendor_bookings (
    booking_id BIGINT NOT NULL AUTO_INCREMENT,
    agreed_price VARCHAR(255),
    start_date_time TIMESTAMP(6),
    bookingstatus VARCHAR(255),
    created_at TIMESTAMP(6),
    updated_at TIMESTAMP(6),

    event_id BIGINT,
    service_id BIGINT,

    PRIMARY KEY (booking_id),

    CONSTRAINT fk_vendor_bookings_event
        FOREIGN KEY (event_id)
        REFERENCES events(event_id),

    CONSTRAINT fk_vendor_bookings_service
        FOREIGN KEY (service_id)
        REFERENCES vendor_services(service_id)
);