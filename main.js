// ═══════════════════════════════════════════════════════════
// 1. BOOT & ERROR HANDLING
// ═══════════════════════════════════════════════════════════
console.log("Susangat Initializing...");

// Fallback: If animations don't start in 3 seconds, show everything
setTimeout(() => {
    document.body.style.opacity = "1";
    document.body.style.visibility = "visible";
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) heroContent.style.opacity = "1";
}, 3000);

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import './style.css';

gsap.registerPlugin(ScrollTrigger);

// ═══════════════════════════════════════════════════════════
// DATABASE: FULL MENU (Synchronized 39 items)
// ═══════════════════════════════════════════════════════════
const MENU_DATA = {
    "categories": [
        {
            "id": "bites",
            "name": "Anytime Bites",
            "items": [
                { "name": "Aloo Butter Paratha", "price": 50, "image": "https://images.unsplash.com/photo-1549440333-c288d0d52b11", "mask": "leaf-mask" },
                { "name": "Paneer Butter Paratha", "price": 70, "image": "https://images.unsplash.com/photo-1607532941433-40a23223063f", "mask": "circle-mask" },
                { "name": "Chola Rice / Puri", "price": 50, "image": "https://images.unsplash.com/photo-1585937421612-70a008356fbe", "mask": "leaf-mask alt" },
                { "name": "Uttapam (Mix Veg)", "price": 50, "image": "https://images.unsplash.com/photo-1630383249896-424e482df921", "mask": "circle-mask" },
                { "name": "Uttapam (Paneer)", "price": 80, "image": "https://images.unsplash.com/photo-1626081058310-2234b9823ff1", "mask": "leaf-mask" },
                { "name": "Plane Dosa", "price": 40, "image": "https://images.unsplash.com/photo-1668236543038-531e02ef2942", "mask": "circle-mask" },
                { "name": "Masala Dosa", "price": 70, "image": "https://images.unsplash.com/photo-1630383249896-424e482df921", "mask": "leaf-mask alt" },
                { "name": "Cheese Dosa", "price": 100, "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1", "mask": "circle-mask" },
                { "name": "Veg Pasta", "price": 50, "image": "https://images.unsplash.com/photo-1551183053-bf91a1d81141", "mask": "leaf-mask" },
                { "name": "Red Sauce Pasta", "price": 60, "image": "https://images.unsplash.com/photo-1473093226795-af9932fe5856", "mask": "circle-mask" },
                { "name": "White Sauce Pasta", "price": 100, "image": "https://images.unsplash.com/photo-1645113291307-53153c30141f", "mask": "leaf-mask alt" },
                { "name": "Maggi", "price": 30, "image": "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841", "mask": "circle-mask" },
                { "name": "Veg Maggi", "price": 40, "image": "https://images.unsplash.com/photo-1585032226651-759b368d724a", "mask": "leaf-mask" },
                { "name": "Cheese Maggi", "price": 60, "image": "https://images.unsplash.com/photo-1569718212165-3a8278d5f624", "mask": "circle-mask" },
                { "name": "Hakka Noodles", "price": 40, "image": "https://images.unsplash.com/photo-1585032226651-759b368d724a", "mask": "leaf-mask alt" },
                { "name": "Chowmein", "price": 50, "image": "https://images.unsplash.com/photo-1585032226651-759b368d724a", "mask": "circle-mask" },
                { "name": "Manchurian", "price": 80, "image": "https://images.unsplash.com/photo-1563379091339-03b21bc4a4f8", "mask": "leaf-mask" },
                { "name": "Gravy Manchurian", "price": 70, "image": "https://images.unsplash.com/photo-1563379091339-03b21bc4a4f8", "mask": "circle-mask" },
                { "name": "Chilly Paneer", "price": 100, "image": "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8", "mask": "leaf-mask alt" },
                { "name": "Chinese Rice", "price": 70, "image": "https://images.unsplash.com/photo-1603133872878-684f208fb84b", "mask": "circle-mask" },
                { "name": "Honey Chilly Potato", "price": 80, "image": "https://images.unsplash.com/photo-1565553648-3c662f3b9427", "mask": "leaf-mask" },
                { "name": "Chilly Potato", "price": 60, "image": "https://images.unsplash.com/photo-1601050690597-df056fb27095", "mask": "circle-mask" },
                { "name": "Pizza - Paneer Tikka", "price": 120, "image": "https://images.unsplash.com/photo-1513104890138-7c749659a591", "mask": "leaf-mask alt" },
                { "name": "Pizza - Veg Corn", "price": 100, "image": "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38", "mask": "circle-mask" }


            ]
        },
        {
            "id": "beverages",
            "name": "Beverages",
            "items": [
                { "name": "Herbal Tea", "price": 10, "image": "https://images.unsplash.com/photo-1594631252845-29fc45865157", "mask": "leaf-mask" },
                { "name": "Lassi", "price": 30, "image": "https://images.unsplash.com/photo-1549128247-37e905ea6d00", "mask": "circle-mask" },
                { "name": "Mango Lassi", "price": 40, "image": "https://images.unsplash.com/photo-1623065691112-c84559553b4b", "mask": "leaf-mask alt" },
                { "name": "Oreo Milk Shake", "price": 50, "image": "https://images.unsplash.com/photo-1572490122747-3968b75cc699", "mask": "circle-mask" },
                { "name": "Strawberry Shake", "price": 50, "image": "https://images.unsplash.com/photo-1548365328-8c6db3220e4c", "mask": "leaf-mask" },
                { "name": "Banana Shake", "price": 50, "image": "https://images.unsplash.com/photo-1572490122747-3968b75cc699", "mask": "circle-mask" }
            ]
        },
        {
            "id": "snacks",
            "name": "Snacks",
            "items": [
                { "name": "Samosa/ Kachori", "price": 15, "image": "https://images.unsplash.com/photo-1601050690597-df056fb27095", "mask": "leaf-mask alt" },
                { "name": "Aloo Patties", "price": 30, "image": "https://images.unsplash.com/photo-1612752110543-982da94042ca", "mask": "circle-mask" },
                { "name": "Paneer Patties", "price": 40, "image": "https://images.unsplash.com/photo-1565553648-3c662f3b9427", "mask": "leaf-mask" },
                { "name": "Paneer Roll", "price": 50, "image": "https://images.unsplash.com/photo-1607532941433-40a23223063f", "mask": "circle-mask" },
                { "name": "Veg Roll", "price": 30, "image": "https://images.unsplash.com/photo-1544025162-d76694265947", "mask": "leaf-mask alt" },
                { "name": "Veg Sandwich", "price": 50, "image": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af", "mask": "circle-mask" },
                { "name": "Cheese Sandwich", "price": 70, "image": "https://images.unsplash.com/photo-1482041284833-289f078113c9", "mask": "leaf-mask" },
                { "name": "French Fries", "price": 50, "image": "https://images.unsplash.com/photo-1585109649139-366815a0d313", "mask": "circle-mask" },
                { "name": "Peri Peri Fries", "price": 60, "image": "https://images.unsplash.com/photo-1635391273941-8fecad124c6d", "mask": "leaf-mask alt" }
            ]
        }
    ]
};

// ═══════════════════════════════════════════════════════════
// 1. ENGINE
// ═══════════════════════════════════════════════════════════
const lenis = new Lenis({ duration: 1.2 });
lenis.on('scroll', ScrollTrigger.update);
gsap.ticker.add((time) => { lenis.raf(time * 1000); });
gsap.registerPlugin(ScrollTrigger);

// ═══════════════════════════════════════════════════════════
// 2. HERO (Cinematic Sequence: 7s intervals, 3s cross-fade)
// ═══════════════════════════════════════════════════════════
const vids = document.querySelectorAll('.hero-video');
let currentVidIdx = 0;

function cycleVideos() {
    vids.forEach((v, i) => {
        if (i === currentVidIdx) {
            // Ensure first video is visible
            if (vids[0]) {
                vids[0].classList.add('active');
                vids[0].play().catch(e => console.log("Autoplay blocked:", e));
            }
            v.classList.add('active');
            v.style.zIndex = 2; // Bring active to front
            v.play().catch(() => { });
        } else {
            v.classList.remove('active');
            v.style.zIndex = 1;
            // We don't pause immediately to allow for the 3s cross-fade
            setTimeout(() => {
                if (!v.classList.contains('active')) {
                    v.pause();
                    v.currentTime = 0;
                }
            }, 3000);
        }
    });
}

function startHeroSequence() {
    cycleVideos();
    setInterval(() => {
        currentVidIdx = (currentVidIdx + 1) % vids.length;
        cycleVideos();
    }, 7000); // 7 second reveal per clip
}

// ═══════════════════════════════════════════════════════════
// 3. MENU RENDERER
// ═══════════════════════════════════════════════════════════
function initMenu() {
    const nav = document.getElementById('menu-nav');
    const container = document.getElementById('menu-container');
    if (!nav || !container) return;

    MENU_DATA.categories.forEach((cat, idx) => {
        const link = document.createElement('a');
        link.href = `#${cat.id}`;
        link.className = `cat-nav-link ${idx === 0 ? 'active' : ''}`;
        link.textContent = cat.name;
        link.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelectorAll('.cat-nav-link').forEach(l => l.classList.remove('active'));
            link.classList.add('active');

            // Filter Logic
            document.querySelectorAll('.menu-cat-block').forEach(block => {
                if (block.id === cat.id) {
                    block.style.display = 'block';
                } else {
                    block.style.display = 'none';
                }
            });
        });
        nav.appendChild(link);

        const block = document.createElement('div');
        block.id = cat.id;
        block.className = 'menu-cat-block';
        block.style.display = idx === 0 ? 'block' : 'none';
        block.innerHTML = `
            <h3 class="cat-heading">${cat.name}</h3>
            <div class="item-grid">
                ${cat.items.map(item => `
                    <div class="grid-item">
                        <div class="item-info">
                            <h4 class="item-title">${item.name} <span class="price">₹${item.price}</span></h4>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
        container.appendChild(block);
    });

    initScrollAnims();
}

function initScrollAnims() {
    document.querySelectorAll('.grid-item').forEach((el) => {
        gsap.fromTo(el, { x: 50, opacity: 0 }, {
            x: 0, opacity: 1, duration: 1.2, ease: 'power4.out',
            scrollTrigger: { trigger: el, start: 'top 95%', toggleActions: 'play none none none' }
        });
    });

    document.querySelectorAll('.magnetic, .grid-item').forEach((el) => {
        el.addEventListener('mousemove', (e) => {
            const rect = el.getBoundingClientRect();
            gsap.to(el, {
                x: (e.clientX - rect.left - rect.width / 2) * 0.1,
                y: (e.clientY - rect.top - rect.height / 2) * 0.1,
                duration: 0.4
            });
        });
        el.addEventListener('mouseleave', () => gsap.to(el, { x: 0, y: 0, duration: 0.7 }));
    });
}

// ═══════════════════════════════════════════════════════════
// 4. BOOT
// ═══════════════════════════════════════════════════════════
document.addEventListener('DOMContentLoaded', () => {
    initMenu();

    startHeroSequence();

    // Premium Mobile Performance: Hero Scroll Effects
    if (window.innerWidth < 900) {
        gsap.to('.video-stack', {
            scrollTrigger: {
                trigger: '#hero',
                start: 'top top',
                end: 'bottom top',
                scrub: true
            },
            scale: 1.2,
            opacity: 0.5,
            filter: 'blur(10px)'
        });

        gsap.to('.hero-content', {
            scrollTrigger: {
                trigger: '#hero',
                start: 'top top',
                end: 'bottom top',
                scrub: true
            },
            y: -100,
            opacity: 0
        });
    }

    setInterval(() => {
        const el = document.getElementById('live-time');
        if (el) el.textContent = `Local Time / ${new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false })}`;
    }, 1000);
});