import { galleryItems } from './gallery-items.js'; // Import galleryItems array

document.addEventListener('DOMContentLoaded', () => {
    const gallery = document.querySelector('.gallery');

    // Function to render gallery items
    function renderGallery() {
        const galleryHtml = galleryItems.map(item => `
            <li class="gallery__item">
                <a class="gallery__link" href="${item.original}">
                    <img
                        class="gallery__image"
                        src="${item.preview}"
                        data-source="${item.original}"
                        alt="${item.description}"
                    />
                </a>
            </li>
        `).join('');

        gallery.innerHTML = galleryHtml;
    }

    renderGallery();

    // Event delegation to handle image click
    gallery.addEventListener('click', e => {
        e.preventDefault();
        if (e.target.classList.contains('gallery__image')) {
            const largeImageSrc = e.target.dataset.source;

            // Open modal with the large image
            const instance = basicLightbox.create(`
                <img src="${largeImageSrc}" width="800" height="600">
            `);

            instance.show();

            // Close modal on Escape key press
            const closeOnEscape = function (event) {
                if (event.key === 'Escape') {
                    instance.close();
                    document.removeEventListener('keydown', closeOnEscape);
                }
            };

            document.addEventListener('keydown', closeOnEscape);
        }
    });
});
