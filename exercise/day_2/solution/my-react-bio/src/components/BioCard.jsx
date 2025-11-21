import React, { useState } from 'react';
import LikeButton from './LikeButton';
import HobbyInput from './HobbyInput';
import { Item, ItemContent } from './ui/item';

function BioCard({ name, bioText, imageUrl, websiteUrl }) {
    // State for hobbies
    const [hobbies, setHobbies] = useState(["Coding", "Reading", "Hiking"]);

    return (
        <div className="max-w-md mx-auto bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all hover:scale-[1.01] duration-300 border border-gray-100">
            <div className="relative h-32 bg-gradient-to-r from-blue-500 to-purple-600">
                <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2">
                    <div className="relative">
                        <img
                            src={imageUrl}
                            alt={`${name}'s profile`}
                            className="w-32 h-32 rounded-full border-4 border-white shadow-lg object-cover"
                        />
                        <div className="absolute bottom-2 right-2 w-6 h-6 bg-green-400 border-2 border-white rounded-full"></div>
                    </div>
                </div>
            </div>

            <div className="pt-20 pb-8 px-8 text-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-2">{name}</h2>
                <p className="text-gray-600 leading-relaxed mb-6 text-sm">{bioText}</p>

                <div className="flex w-full max-w-sm items-center justify-center gap-2">
                    <a
                        href={websiteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-6 py-2.5 bg-blue-600 text-white font-medium text-sm rounded-full hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg transform hover:-translate-y-0.5 duration-200"
                    >
                        Visit My Website
                    </a>
                    <LikeButton />
                </div>

                <div className="border-t border-gray-100 pt-6">
                    <div className="mb-6">
                        <HobbyInput hobbies={hobbies} setHobbies={setHobbies} />
                    </div>

                    <div className="text-left">
                        <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">My Hobbies</h3>
                        <div className="flex flex-wrap gap-2">
                            {hobbies.map((hobby) => (
                                <Item variant="outline" key={hobby} className="group hover:border-blue-400 hover:bg-blue-50 transition-all duration-200 cursor-default">
                                    <ItemContent className="text-gray-600 group-hover:text-blue-600 font-medium">
                                        {hobby}
                                    </ItemContent>
                                </Item>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BioCard;
