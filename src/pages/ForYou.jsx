import React from 'react';

const ForYou = () => {
    const menuItems = [
        {
            label: 'Facial Treatments',
            img: 'https://evamuliaclinic.com/wp-content/uploads/2024/10/gold-facial-cost-procedure-how-to-do.jpg',
        },
        {
            label: 'Anti Aging',
            img: 'https://media.suara.com/pictures/1600x840/2025/04/18/90658-ilustrasi-produk-somethinc-untuk-antiaging.jpg',
        },
        {
            label: 'Laser Hair',
            img: 'https://cdn-prod.medicalnewstoday.com/content/images/articles/322/322090/woman-having-laser-hair-removal-on-her-armpit.jpg',
        },
        {
            label: 'Acne & Scars',
            img: 'https://assets.clevelandclinic.org/transform/809e108c-5471-44ef-bddf-96789d2ce937/acneScarringRid-467307287-770x533-1_jpg',
        },
    ];

    return (
        <div className="relative min-h-screen bg-white py-10 px-6 lg:px-20 overflow-hidden">
            {/* Background image with opacity */}
            <div
                className="absolute inset-0 bg-cover bg-center opacity-50 z-0"
                style={{ backgroundImage: "url('/treatment.jpeg')" }}
            />

            {/* Konten utama */}
            <div className="relative z-10">
                <h2 className="text-4xl font-bold text-[#00000] drop-shadow-md tracking-wide text-center mb-2 font-serif">
                    Our Recommendation for You
                </h2>
                <p className="text-center text-gray-600 mb-10">
                    Kami menyarankan Treatment dan Product yang mungkin anda suka
                </p>

                <div className="flex flex-col lg:flex-row justify-center gap-10 max-w-7xl mx-auto">
                    {/* Sidebar Menu */}
                    <div className="flex flex-col space-y-4">
                        {menuItems.map((item, idx) => (
                            <div
                                key={idx}
                                className="flex items-center gap-4 bg-[#6A1B1A] text-white rounded-xl px-4 py-3 w-60 shadow-md hover:bg-[#8B2C2B] transition"
                            >
                                <img
                                    src={item.img}
                                    alt={item.label}
                                    className="w-12 h-12 rounded-full object-cover"
                                />
                                <span className="font-medium">{item.label}</span>
                            </div>
                        ))}
                    </div>

                    {/* Main Recommendation Box */}
                    <div className="bg-white rounded-2xl shadow-xl p-8 w-full lg:w-[70%] flex flex-col lg:flex-row items-center gap-8 border border-gray-200">
                        <img
                            src="/acneseries.png"
                            alt="Acne Expert Series"
                            className="w-full lg:w-1/2 rounded-xl object-contain"
                        />
                        <div className="lg:w-1/2">
                            <h3 className="text-2xl font-bold mb-3">Acne Expert Series</h3>
                            <p className="text-gray-700 mb-4">
                                Indulge in our customized facial treatments that cater to your unique skin type and concerns.
                            </p>
                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                <li>Deep Cleansing</li>
                                <li>Exfoliation</li>
                                <li>Improves Circulation</li>
                                <li>Hydration</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ForYou;
