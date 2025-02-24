import type React from "react"

interface DirectorMessageProps {
    imageUrl: string
    message: string
    
}

const DirectorMessage: React.FC<DirectorMessageProps> = ({ imageUrl, message }) => {
    return (
        <div className="bg-black p-4 md:p-8 lg:p-12">
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12 lg:gap-16">
                <div className="w-full md:w-auto flex-shrink-0">
                    <img
                        src={imageUrl }
                        alt={``}
                        className="w-64 h-64 md:w-[20rem] md:h-[20rem] lg:w-80 lg:h-80 object-cover rounded-sm mx-auto md:mx-0"
                    />
                </div>
                <div className="flex-grow">
                    <blockquote className="text-xl md:text-2xl lg:text-3xl italic text-gray-400 mb-6">"{message}"</blockquote>
                    <p className="text-right text-gray-400 font-semibold"> </p>
                </div>
            </div>
        </div>
    )
}

export default DirectorMessage

