import React from 'react';
import { Check } from 'lucide-react';
interface PlanCardProps {
  title: string;
  price: string;
  duration: string;
  monthlyPrice?: string;
  features: string[];
  buttonText: string;
  terms?: string;
  color: string;
}

const PlanCard: React.FC<PlanCardProps> = ({ 
  title, 
  price, 
  duration, 
  monthlyPrice, 
  features, 
  buttonText, 
  terms, 
  color 
}) => (
  <div className="bg-gray-800 rounded-lg p-6 flex flex-col h-full">
    <h2 className={`text-2xl font-bold mb-2 ${color}`}>{title}</h2>
    <p className="text-white text-xl font-bold mb-1">₹{price} for {duration}</p>
    {monthlyPrice && <p className="text-gray-400 text-sm mb-4">₹{monthlyPrice} / month after</p>}
    <ul className="flex-grow mb-4">
      {features.map((feature, index) => (
        <li key={index} className="flex items-start mb-2">
          <Check className="mr-2 text-green-500 flex-shrink-0" size={18} />
          <span className="text-white text-sm">{feature}</span>
        </li>
      ))}
    </ul>
    <button className={`w-full py-2 rounded-full font-bold mb-2 text-white`}>
      {buttonText}
    </button>
    {terms && <p className="text-gray-400 text-xs text-center">{terms}</p>}
  </div>
);

const PremiumPlans = () => {
  const plans = [
    {
      title: 'Individual',
      price: '59',
      duration: '4 months',
      monthlyPrice: '119',
      features: [
        '1 Premium account',
        'Cancel anytime',
        'Subscribe or one-time payment'
      ],
      buttonText: 'Get Premium Individual',
      terms: '₹59 for 4 months, then ₹119 per month after. Offer only available if you haven\'t tried Premium before. Terms apply. Offer ends October 13, 2024.',
      color: 'text-pink-400'
    },
    {
      title: 'Mini',
      price: '29',
      duration: '1 week',
      features: [
        '1 mobile-only Premium account',
        'Offline listening of up to 30 songs on 1 device',
        'One-time payment',
        'Basic audio quality'
      ],
      buttonText: 'Get Premium Mini',
      terms: 'Terms apply',
      color: 'text-green-400'
    },
    {
      title: 'Family',
      price: '179',
      duration: '2 months',
      monthlyPrice: '179',
      features: [
        'Up to 6 Premium accounts',
        'Control content marked as explicit',
        'Cancel anytime',
        'Subscribe or one-time payment'
      ],
      buttonText: 'Get Premium Family',
      terms: '₹179 for 2 months, then ₹179 per month after. Offer only available if you haven\'t tried Premium before. For up to 6 family members residing at the same address. Terms apply.',
      color: 'text-blue-400'
    },
    {
      title: 'Duo',
      price: '149',
      duration: '2 months',
      monthlyPrice: '149',
      features: [
        '2 Premium accounts',
        'Cancel anytime',
        'Subscribe or one-time payment',
        'Duo Mix: a playlist for two, updated regularly'
      ],
      buttonText: 'Get Premium Duo',
      terms: '₹149 for 2 months, then ₹149 per month after. For 2 people residing at the same address. Terms apply.',
      color: 'text-yellow-400'
    },
    {
      title: 'Student',
      price: '59',
      duration: '2 months',
      monthlyPrice: '59',
      features: [
        '1 verified Premium account',
        'Discount for eligible students',
        'Cancel anytime',
        'Subscribe or one-time payment'
      ],
      buttonText: 'Get Premium Student',
      terms: '₹59 for 2 months, then ₹59 per month after. Offer available only to students at accredited higher education institutions. Terms apply.',
      color: 'text-purple-400'
    },
    {
      title: 'Premium+',
      price: '249',
      duration: '3 months',
      monthlyPrice: '249',
      features: [
        'All Individual Premium features',
        'High-fidelity audio quality',
        'Exclusive early access to new features',
        'Priority customer support'
      ],
      buttonText: 'Get Premium+',
      terms: '₹249 for 3 months, then ₹249 per month after. Limited time offer for audio enthusiasts. Terms apply.',
      color: 'text-indigo-400'
    }
  ];

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <PlanCard key={index} {...plan} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PremiumPlans;