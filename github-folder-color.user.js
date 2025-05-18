// ==UserScript==
// @name         GitHub Folder Icon Colorizer
// @version      1.0
// @description  Changes the color of the folder icon on GitHub
// @description:ru  Меняет цвет иконки папки на GitHub на основе названия папки (новый интерфейс React UI, расширенные цвета)
// @author       Coring
// @match        https://github.com/*/*
// @grant        none
// @run-at       document-idle
// ==/UserScript==

(function () {
    'use strict';
    const folderColors = {
        'src': '#FFD700',
        'docs': '#1E90FF',
        'test': '#FF69B4',
        '.github': '#32CD32',
        'config': '#FFA500',
        'scripts': '#8A2BE2',
        'assets': '#00CED1',
        'public': '#DC143C',
        'build': '#A9A9A9',
        'lib': '#7FFF00',
        'node_modules': '#808080'
    };

    function colorizeFolderIcons() {
        const folderLinks = document.querySelectorAll('a[aria-label$="(Directory)"]');
        folderLinks.forEach(link => {
            const folderName = link.title || link.textContent.trim();
            const folderContainer = link.closest('.react-directory-filename-column');
            const folderIcon = folderContainer?.querySelector('svg.icon-directory');
            if (folderColors[folderName] && folderIcon) {
                folderIcon.style.color = folderColors[folderName];
                folderIcon.setAttribute('fill', folderColors[folderName]);
            }
        });
    }
    const observer = new MutationObserver(() => {
        colorizeFolderIcons();
    });

    observer.observe(document.body, { childList: true, subtree: true });
    colorizeFolderIcons();
})();
