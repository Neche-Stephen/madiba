  // ====== YOUR DATA CONFIGURATION ======
  const accommodationData = [

     // Executive Room of 1
     {
        title: "Executive Room",
        image: "assets/img/madiba-rooms/exec1.jpg",
        imageAlt: "Image of Executive Room",
        capacity: 1,
        capacityIcon: "user",
        description: "A comfortable standard room ideal for focused study. Perfect for students who prefer a cozy, private space with all essential amenities for academic success.",
        pricing: [
            { university: "Nile University Students", price: "3,616,000" },
            { university: "Baze University Students", price: "3,816,000"}
        ],
        amenities: [
            { icon: "wifi", label: "WiFi" },
            { icon: "zap", label: "24/7 Power" },
            { icon: "sparkles", label: "Cleaning" },
            { icon: "shirt", label: "Laundry" }
        ],
        discount: "10% discount for new students"
    },

     // Standard Room of 1
     {
        title: "Standard Room",
        image: "assets/img/madiba-rooms/stan1.jpg",
        imageAlt: "Image of Standard Room",
        capacity: 1,
        capacityIcon: "user",
        description: "A comfortable standard room ideal for focused study. Perfect for students who prefer a cozy, private space with all essential amenities for academic success.",
        pricing: [
            { university: "Nile University Students", price: "3,516,000" },
            { university: "Baze University Students", price: "3,716,000" }
        ],
        amenities: [
            { icon: "wifi", label: "WiFi" },
            { icon: "zap", label: "24/7 Power" },
            { icon: "sparkles", label: "Cleaning" },
            { icon: "shirt", label: "Laundry" }
        ],
        discount: "10% discount for new students"
    },

    // Executive Room of 2
    {
        title: "Executive Room",
        image: "assets/img/madiba-rooms/exec2.jpg",
        imageAlt: "Image of Executive Room",
        capacity: 2,
        capacityIcon: "users", // lucide icon name
        description: "A luxurious executive room perfect for senior students and professionals. Features premium amenities and spacious living area for an enhanced university experience.",
        pricing: [
            { university: "Nile University Students", price: "3,266,000" },
            { university: "Baze University Students", price: "3,666,000" }
        ],
        amenities: [
            { icon: "wifi", label: "WiFi" },
            { icon: "zap", label: "24/7 Power" },
            { icon: "sparkles", label: "Cleaning" },
            { icon: "shirt", label: "Laundry" }
        ],
        discount: "10% discount for returning students"
    },
    // Standard Room of 2
    {
        title: "Standard Room",
        image: "assets/img/madiba-rooms/stan2.jpg",
        imageAlt: "Image of Standard Room",
        capacity: 2,
        capacityIcon: "users", // lucide icon name
        description: "A luxurious executive room perfect for senior students and professionals. Features premium amenities and spacious living area for an enhanced university experience.",
        pricing: [
            { university: "Nile University Students", price: "3,116,000" },
            { university: "Baze University Students", price: "3,216,000" }
        ],
        amenities: [
            { icon: "wifi", label: "WiFi" },
            { icon: "zap", label: "24/7 Power" },
            { icon: "sparkles", label: "Cleaning" },
            { icon: "shirt", label: "Laundry" }
        ],
        discount: "10% discount for returning students"
    },
     // Executive Room of 3
     {
        title: "Executive Room",
        image: "assets/img/madiba-rooms/exec3.jpg",
        imageAlt: "Image of Executive Room",
        capacity: 3,
        capacityIcon: "users", // lucide icon name
        description: "A luxurious executive room perfect for senior students and professionals. Features premium amenities and spacious living area for an enhanced university experience.",
        pricing: [
            { university: "Nile University Students", price: "2,916,000" },
            { university: "Baze University Students", price: "3,116,000" }
        ],
        amenities: [
            { icon: "wifi", label: "WiFi" },
            { icon: "zap", label: "24/7 Power" },
            { icon: "sparkles", label: "Cleaning" },
            { icon: "shirt", label: "Laundry" }
        ],
        discount: "10% discount for returning students"
    },
    // Standard Room of 3
    {
        title: "Standard Room",
        image: "assets/img/madiba-rooms/stan3.jpg",
        imageAlt: "Image of Standard Room",
        capacity: 3,
        capacityIcon: "users", // lucide icon name
        description: "A luxurious executive room perfect for senior students and professionals. Features premium amenities and spacious living area for an enhanced university experience.",
        pricing: [
            { university: "Nile University Students", price: "2,766,000" },
            { university: "Baze University Students", price: "2,966,000" }
        ],
        amenities: [
            { icon: "wifi", label: "WiFi" },
            { icon: "zap", label: "24/7 Power" },
            { icon: "sparkles", label: "Cleaning" },
            { icon: "shirt", label: "Laundry" }
        ],
        discount: "10% discount for returning students"
    },

    // Executive Room of 4
    {
        title: "Executive Room",
        image: "assets/img/madiba-rooms/exec4.jpg",
        imageAlt: "Image of Executive Room",
        capacity: 4,
        capacityIcon: "users", // lucide icon name
        description: "A luxurious executive room perfect for senior students and professionals. Features premium amenities and spacious living area for an enhanced university experience.",
        pricing: [
            { university: "Nile University Students", price: "2,816,000" },
            { university: "Baze University Students", price: "3,116,000" }
        ],
        amenities: [
            { icon: "wifi", label: "WiFi" },
            { icon: "zap", label: "24/7 Power" },
            { icon: "sparkles", label: "Cleaning" },
            { icon: "shirt", label: "Laundry" }
        ],
        discount: "10% discount for returning students"
    },
];

// ====== SLIDE GENERATION FUNCTION ======
function generateSlideContent(roomData) {
    // Format price with Nigerian Naira symbol
    const formatPrice = (price) => `₦${price.toLocaleString()}`;
    
    return `
        <div class="embla__slide p-1">
            <div class="card-container relative overflow-hidden rounded-xl shadow-2xl transition-all duration-300 hover:shadow-3xl hover:-translate-y-1 bg-white border border-gray-200">
                <img src="${roomData.image}" alt="${roomData.imageAlt}" class="absolute inset-0 w-full h-full object-cover transition-transform duration-500 hover:scale-105">
                <div class="absolute inset-0 bg-gradient-to-br from-black/30 via-black/50 to-black/70"></div>
                <div class="relative z-10 p-6 space-y-4 flex flex-col h-full text-white">
                    <div class="flex justify-between items-start gap-3">
                        <h3 class="text-2xl font-bold text-white drop-shadow-lg">${roomData.title}</h3>
                        <div class="flex items-center text-sm bg-white/25 backdrop-blur-sm rounded-full px-3 py-1.5 border border-white/20">
                            <i data-lucide="${roomData.capacityIcon}" class="w-4 h-4 mr-1.5 drop-shadow-sm" style="stroke: #fca5a5;"></i>
                            <span class="font-medium">${roomData.capacity} ${roomData.capacity === 1 ? 'Person' : 'People'}</span>
                        </div>
                    </div>
               
                    <p class="text-sm text-gray-100 flex-grow leading-relaxed drop-shadow-sm">
                        ${roomData.description}
                    </p>
                    
                    <div class="flex flex-wrap items-center gap-4 bg-black/20 backdrop-blur-sm rounded-lg p-3 border border-white/10">
                        ${roomData.pricing.map(price => `
                            <p class="text-[sm]  font-semibold">
                                <span class="text-red-300 drop-shadow-sm">${formatPrice(price.price)}</span> - <span class="text-white">${price.university}</span>
                            </p>
                        `).join('')}
                    </div>
                    
                    <ul class="grid grid-cols-2 gap-3 text-xs">
                        ${roomData.amenities.map(amenity => `
                            <li class="flex items-center text-white bg-white/10 backdrop-blur-sm rounded-lg px-2 py-2 border border-white/10">
                                <i data-lucide="${amenity.icon}" class="w-4 h-4 mr-2 drop-shadow-sm" style="stroke: #fca5a5;"></i>
                                <span class="font-medium">${amenity.label}</span>
                            </li>
                        `).join('')}
                    </ul>
                    
                    <div class="mt-auto pt-2">
                        <span class="inline-flex items-center text-sm bg-gradient-to-r from-green-400 to-green-500 backdrop-blur-sm border border-green-300/50 rounded-full px-4 py-2 text-white font-semibold shadow-lg">
                            ${roomData.discount}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// ====== POPULATE ALL SLIDES ======
function populateSlides(containerId) {
    const container = document.getElementById(containerId);
    if (!container) {
        console.error(`Container with ID "${containerId}" not found`);
        return;
    }

    // Clear existing content
    container.innerHTML = '';

    // Generate all slides
    accommodationData.forEach(roomData => {
        container.innerHTML += generateSlideContent(roomData);
    });

    // Initialize lucide icons after adding content
    lucide.createIcons();
}

// ====== INITIALIZE EMBLA CAROUSEL ======
function initializeEmblaCarousel() {
    const emblaNode = document.querySelector('.embla');
    if (!emblaNode) {
        console.error('Embla carousel container not found');
        return;
    }

    const viewport = emblaNode.querySelector('.embla__viewport');
    if (!viewport) {
        console.error('Embla viewport not found');
        return;
    }

    // Initialize Embla carousel
    const embla = EmblaCarousel(viewport, { loop: true });
    
    // Get navigation buttons
    const prevButton = document.getElementById('prevButton');
    const nextButton = document.getElementById('nextButton');
    
    if (prevButton && nextButton) {
        // Add event listeners for navigation
        prevButton.addEventListener('click', () => embla.scrollPrev());
        nextButton.addEventListener('click', () => embla.scrollNext());
        
        // Auto-scroll functionality
        // setInterval(() => {
        //     if (embla.canScrollNext()) {
        //         embla.scrollNext();
        //     } else {
        //         embla.scrollTo(0);
        //     }
        // }, 5000);
    }
}

// ====== DEMO INITIALIZATION ======
document.addEventListener('DOMContentLoaded', () => {
    // First populate the slides
    populateSlides('slidesContainer');
    
    // Then initialize the carousel after slides are populated
    initializeEmblaCarousel();
});

// ====== USAGE INSTRUCTIONS ======
// console.log(`
// ====== HOW TO USE IN YOUR PROJECT ======

// 1. Copy the accommodationData array and functions to your project
// 2. Call populateSlides('your-container-id') where your-container-id is your carousel container
// 3. Make sure to call lucide.createIcons() after populating slides

// Example:
// populateSlides('embla__container'); // if your container has this ID

// ====== TO CUSTOMIZE DATA ======
// Just modify the accommodationData array above with your room information.
// `);