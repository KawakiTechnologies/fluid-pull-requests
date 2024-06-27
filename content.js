function injectButton() {
    const targetElement = document.querySelector('details.details-reset.details-overlay.diffbar-item.diffbar-range-menu');
    if (targetElement) {
        const button = document.createElement('div');


        button.classList.add('diffbar-item');
        button.classList.add('dropdown');
        button.classList.add('js-reviews-container');
        button.innerHTML = `
       <button id="overlay-show-review-changes-modal" popovertarget="review-changes-modal" aria-haspopup="true" type="button"
    data-view-component="true" class="js-reviews-toggle Button--primary Button--small Button">
    <span class="Button-content">
        <span class="Button-label">
            <span class="js-review-changes" data-pending-message="Finish your review" data-message="Collapse Files">
                Collapse Files
            </span>
        </span>
    </span>
</button>
        `;
        button.addEventListener('click', () => {
            console.log('Button clicked!');
        });
        // targetElement.appendChild(button);
        targetElement.parentNode.insertBefore(button, targetElement.nextSibling);
    } else {
        console.log('Target div not found');
    }
}

injectButton();

function injectButton1() {
    const targetElement = document.querySelector('details.details-reset.details-overlay.diffbar-item.diffbar-range-menu');
    if (targetElement) {
        const button = document.createElement('div');


        button.classList.add('diffbar-item');
        button.classList.add('dropdown');
        button.classList.add('js-reviews-container');
        button.innerHTML = `
       <button id="overlay-show-review-changes-modal" popovertarget="review-changes-modal" aria-haspopup="true" type="button"
    data-view-component="true" class="js-reviews-toggle Button--primary Button--small Button">
    <span class="Button-content">
        <span class="Button-label">
            <span class="js-review-changes" data-pending-message="Finish your review" data-message="Collapse Files">
                Hide Files
            </span>
        </span>
    </span>
</button>
        `;
        button.addEventListener('click', () => {
            console.log('Button clicked!');
        });
        // targetElement.appendChild(button);
        targetElement.parentNode.insertBefore(button, targetElement.nextSibling);
    } else {
        console.log('Target div not found');
    }
}

injectButton1();

function injectFilterMenu() {
    const targetElement = document.querySelector('details.details-reset.details-overlay.diffbar-item.diffbar-range-menu');

    if (targetElement) {
        const newFilterMenu = document.createElement('file-filter');
        newFilterMenu.setAttribute('data-target', 'diff-file-filter.fileFilter');
        newFilterMenu.setAttribute('data-action', 'file-filter-change:diff-file-filter#applyFilter');
        newFilterMenu.setAttribute('data-catalyst', '');

        newFilterMenu.innerHTML = `
            <details class="diffbar-item details-reset details-overlay" open="">
                <summary class="Link--muted select-menu-button" aria-haspopup="menu" data-target="file-filter.summary" role="button">
                    <strong class="js-file-filter-text css-truncate css-truncate-target color-fg-accent" data-target="file-filter.fileFilterActiveText">
                        Fluid File filter
                    </strong>
                </summary>
                <details-menu class="SelectMenu js-file-filter" role="menu" data-focus-trap="suspended">
                    <span class="sentinel" tabindex="0" aria-hidden="true"></span>
                    <div class="SelectMenu-modal">
                        <header class="SelectMenu-header">
                            <h3 class="SelectMenu-title">Filter by extension</h3>
                        </header>
                        <div class="SelectMenu-list SelectMenu-list--borderless">
                            <form class="js-file-filter-form" data-turbo="false" action="/" accept-charset="UTF-8" method="post">
                                <input type="hidden" name="authenticity_token" value="kK7PIrFgHPsC0LCVqb62jeai93Yx4c6ueO90F6wsTSgHI7J9_-sqaoYlTngijWVLu1fKub_OclLJrw3Dbi49ug" autocomplete="off">
                                <fieldset>
                                    <legend class="sr-only">Filter by extension</legend>
                                    <label class="SelectMenu-item" role="menuitem">
                                        <input class="js-diff-file-type-option mr-2" type="checkbox" value=".json" name="file-filters[]" checked="">
                                        .json&nbsp;
                                        <span class="text-normal js-file-type-count" data-non-deleted-file-count-markup="(1)" data-all-file-count-markup="(1)">(1)</span>
                                    </label>
                                    <label class="SelectMenu-item" role="menuitem">
                                        <input class="js-diff-file-type-option mr-2" type="checkbox" value=".spec.tsx" name="file-filters[]" checked="">
                                        .spec.tsx&nbsp;
                                        <span class="text-normal js-file-type-count" data-non-deleted-file-count-markup="(1)" data-all-file-count-markup="(1)">(1)</span>
                                    </label>
                                    <label class="SelectMenu-item" role="menuitem">
                                        <input class="js-diff-file-type-option mr-2" type="checkbox" value=".tsx" name="file-filters[]" checked="">
                                        .tsx&nbsp;
                                        <span class="text-normal js-file-type-count" data-non-deleted-file-count-markup="(3)" data-all-file-count-markup="(3)">(3)</span>
                                    </label>
                                    <label class="SelectMenu-item" role="menuitem">
                                        <input type="checkbox" class="sr-only hx_focus-input">
                                        <span class="color-fg-muted no-underline text-normal js-file-filter-select-all-container">All 2 file types selected</span>
                                    </label>
                                </fieldset>
                                <hr class="SelectMenu-divider">
                                <label class="SelectMenu-item" role="menuitem">
                                    <input class="js-manifests-option mr-2" type="checkbox" value="true" name="manifests">
                                    Only manifest files
                                </label>
                                <hr class="SelectMenu-divider">
                                <label class="SelectMenu-item" role="menuitem">
                                    <input type="checkbox" class="js-viewed-files-toggle mr-2" name="show-viewed-files" value="true" checked="">
                                    Viewed files
                                </label>
                            </form>
                        </div>
                    </div>
                    <span class="sentinel" tabindex="0" aria-hidden="true"></span>
                </details-menu>
            </details>
        `;

        targetElement.parentNode.insertBefore(newFilterMenu, targetElement.nextSibling);
    } else {
        console.log('Target element not found');
    }
}

injectFilterMenu();

function makeSidebarResizable() {
    const sidebar = document.querySelector('.Layout-sidebar.overflow-y-auto.hx_Layout--sidebar.js-notification-shelf-offset-top.position-sticky');
    if (sidebar) {
        const resizer = document.createElement('div');
        resizer.style.width = '5px';
        resizer.style.height = '100%';
        resizer.style.background = 'transparent';
        resizer.style.position = 'absolute';
        resizer.style.top = '0';
        resizer.style.right = '0';
        resizer.style.cursor = 'ew-resize';
        resizer.style.zIndex = '1000';
        sidebar.appendChild(resizer);
        sidebar.style.position = 'relative';

        resizer.addEventListener('mouseover', () => {
            resizer.style.background = '#ddd';
        });

        resizer.addEventListener('mouseout', () => {
            resizer.style.background = 'transparent';
        });

        let isResizing = false;

        resizer.addEventListener('mousedown', (e) => {
            isResizing = true;
            document.body.style.cursor = 'ew-resize';
        });

        document.addEventListener('mousemove', (e) => {
            if (!isResizing) return;
            const newWidth = e.clientX - sidebar.getBoundingClientRect().left;
            sidebar.style.width = `${newWidth}px`;
        });

        document.addEventListener('mouseup', () => {
            isResizing = false;
            document.body.style.cursor = 'default';
        });
    } else {
        console.log('Sidebar not found');
    }
}

makeSidebarResizable();
