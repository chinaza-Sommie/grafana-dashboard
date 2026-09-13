import { type VendorServices } from '../api';

interface ServiceSelectProps {
    value: string;
    onChange: (value: string) => void;
    placeholder: string;
    services: VendorServices[];
}

function ServiceSelect({value, onChange, placeholder, services}: ServiceSelectProps) {

    return (
        <select
            value={value}
            onChange={(e) => onChange(e.target.value)}
            required
        >
            <option value="">
                {placeholder}
            </option>

            {services.map((service) => (
                <option
                    key={service.serviceId}
                    value={service.serviceId}
                >
                    {service.name} - £{service.basePrice}
                </option>
            ))}
        </select>
    );
}

export default ServiceSelect;