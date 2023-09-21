
import PriceOption from '../PriceOption/PriceOption';

const PriceOptions = () => {
    const priceOptions = [
        {
            "id": 1,
            "name": "Basic Membership",
            "features": [
                "Access to basic gym facilities",
                "Unlimited use during operational hours",
                "No personal trainer included",
                "Access to group fitness classes",
                "Discounts on merchandise"
            ],
            "price": 30.00
        },
        {
            "id": 2,
            "name": "Premium Membership",
            "features": [
                "Access to all gym facilities",
                "Unlimited use 24/7",
                "Monthly consultation with personal trainer",
                "Access to group fitness classes",
                "Discounted personal training sessions",
                "Sauna and steam room access"
            ],
            "price": 50.00
        },
        {
            "id": 3,
            "name": "Family Membership",
            "features": [
                "Access for entire family (up to 4 members)",
                "Unlimited use during operational hours",
                "Discounted personal training sessions",
                "Access to group fitness classes",
                "Discounts on merchandise",
                "Childcare services"
            ],
            "price": 80.00
        }
    ]

    return (
        <div className='m-12'>
            <h2 className='text-5xl'>Best prices in the town</h2>
            <div className='grid grid-cols-1 lg:grid-cols-3  gap-6'>
            {
                priceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
            }
            </div>
        </div>
    );
};

export default PriceOptions;