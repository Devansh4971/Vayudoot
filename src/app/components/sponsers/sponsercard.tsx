import React from 'react';

interface SponsorCardProps {
    name: string;
    imageUrl: string;
    websiteUrl: string;
    description: string;
}

const SponsorCard: React.FC<SponsorCardProps> = ({ name, imageUrl, websiteUrl, description }) => {
    return (
        <div className="bg-white rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
            <a href={websiteUrl} target="_blank" rel="noopener noreferrer" className="block p-10">
                <div className="h-52 flex items-center justify-center">
                    <img
                        src={imageUrl}
                        alt={`${name} logo`}
                        className="max-h-full max-w-full object-contain"
                    />
                </div>
                <div className="mt-6 text-center">
                    <h3 className="text-2xl font-bold text-gray-900">{name}</h3>
                    <p className="mt-3 text-base text-gray-600">{description}</p>
                </div>
            </a>
        </div>
    );
}

export default SponsorCard;