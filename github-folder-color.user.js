// ==UserScript==
// @name         GitHub Folder Icon Colorizer
// @version      1.0.1
// @description  Changes the color of the folder icon on GitHub
// @description:ru  Меняет цвет иконки папки на GitHub на основе названия папки (новый интерфейс React UI, расширенные цвета)
// @author       Coring
// @match        https://github.com/*/*
// @grant        none
// @run-at       document-idle
// @updateURL    https://raw.githubusercontent.com/CoringPlay/github-folrder-color/refs/heads/main/github-folder-color.user.js
// @downloadURL  https://raw.githubusercontent.com/CoringPlay/github-folrder-color/refs/heads/main/github-folder-color.user.js
// ==/UserScript==

(function () {
    'use strict';
    const folderColors = {
        //A
        'assets': '#00CED1',
        //B
        'build': '#A9A9A9',
        //C
        'config': '#FFA500',
        //D
        'db': '#9b8fda',
        'docs': '#1E90FF',
        //E

        //F

        //G

        //H

        //I

        //J

        //K

        //L
        'lib': '#7FFF00',
        //M

        //N
        'node_modules': '#808080',
        //O

        //P
        'public': '#DC143C',
        //Q

        //R

        //S
        'scripts': '#8A2BE2',
        'src': '#FFD700',
        //T
        'test': '#FF69B4',
        //U

        //V
        'vendor': '#1e53f3',
        //W

        //X

        //Y

        //Z

        //dot
        '.github': '#32CD32',
        '.vscode': '#00ffa2',
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
