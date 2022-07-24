const html = document.documentElement;
const canvas = document.querySelector('.macpro-scrolling');
const header = document.querySelector('.header');
const context = canvas.getContext('2d');

const currentFrame = index => (
    `https://www.apple.com/105/media/us/macbook-pro-14-and-16/2021/a1c5d17e-d8e4-4fa8-b70a-bc61bd266412/anim/hero-specs//large/large_${index.toString().padStart(4, '0')}.jpg`
)

const frameCount = 87;

canvas.height = 786;
canvas.width = 1336;

const img = new Image();
img.src = currentFrame(1);
img.onload = function (){
    context.drawImage(img, 0, 0)
}

const updateImage = index => {
    img.src = currentFrame(index);
    context.drawImage(img, 0, 0);
}

window.addEventListener('scroll', () =>{
    const scrollTop = html.scrollTop;
    const maxScrollTop = html.scrollHeight - window.innerHeight;
    const scrollFraction = scrollTop / maxScrollTop;
    const frameIndex = Math.min(frameCount - 1, Math.floor(scrollFraction * frameCount))

    requestAnimationFrame( () => updateImage(frameIndex))
})

const preloadImages = () => {
    for (let i = 1; i < frameCount; i++) {
        const img = new Image();
        img.src = currentFrame(i);
    }
};

preloadImages();