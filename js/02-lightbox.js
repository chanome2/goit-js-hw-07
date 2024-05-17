import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

// 02-lightbox.js

document.addEventListener('DOMContentLoaded', function () {
    const gallery = document.querySelector('.gallery');

    // Loop through galleryItems array to create the markup
    galleryItems.forEach(item => {
        const galleryItem = document.createElement('li');
        galleryItem.classList.add('gallery__item');

        const link = document.createElement('a');
        link.classList.add('gallery__link');
        link.href = item.original;

        const image = document.createElement('img');
        image.classList.add('gallery__image');
        image.src = item.small;
        image.alt = item.description;

        link.appendChild(image);
        galleryItem.appendChild(link);
        gallery.appendChild(galleryItem);
    });

    // Initialize SimpleLightbox
    const lightbox = new SimpleLightbox('.gallery a', {
        captions: true,  // Enable captions
        captionDelay: 250  // Delay in milliseconds before displaying caption
    });
});
