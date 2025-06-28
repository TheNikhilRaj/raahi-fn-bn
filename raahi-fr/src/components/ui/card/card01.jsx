export default function MultiCard({ cards = [] }) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 w-full max-w-7xl m-[70px]">
            {cards.map((card, index) => (
                <a
                    key={index}
                    href={card.link || "#"}
                    className="text-center group hover:opacity-90 transition-opacity duration-300"
                >
                    <img
                        src={card.image}
                        alt={card.subtitle}
                        className="w-full h-[500px] object-cover mb-4 rounded-md shadow-md transition-transform duration-300 group-hover:scale-105"
                    />
                    {card.title && (
                        <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">
                            {card.title}
                        </p>
                    )}
                    <h2 className="text-2xl font-serif font-medium">{card.subtitle}</h2>
                    {card.description && (
                        <p className="mt-2 text-gray-600 text-sm px-4">
                            {card.description}
                        </p>
                    )}
                </a>
            ))}
        </div>
    );
}
