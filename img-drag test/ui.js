/* functions region */
function createItem(text) {
    const newDiv = document.createElement('div');
    newDiv.className = 'item';
    newDiv.draggable = true;
    newDiv.textContent = text;

    document.getElementById('base-box').appendChild(newDiv);
}

function createTierBox(label, color) {
    const tierBox = document.createElement('div');
    tierBox.className = 'tier-box';
    tierBox.innerHTML = `
    <div class="tier-label" name="tier-label-${label}">${label}</div>
    <div class="tier-box-drag-region" name="region-${label}"></div>
    `;

    const tierLabel = tierBox.querySelector(`[name="tier-label-${label}"]`);
    if (tierLabel) {
        tierLabel.style.backgroundColor = color;
    }

    document.getElementById('tier-box-region').appendChild(tierBox);
}

async function createTierBoxesFromJSON() {
    try {
        const response = await fetch('data.json');
        const data = await response.json();
        
        data.tiers.forEach(tier => {
            createTierBox(tier.label, tier.color);
        });
        return Promise.resolve(); // explicitly return a resolved promise
    } catch (error) {
        console.error('Error loading tier data:', error);
        return Promise.reject(error);
    }
}

async function createItemsFromJSON() {
    try {
        const response = await fetch('data.json');
        const data = await response.json();

        data.items.forEach(item => {
            createItem(item);
        });
        return Promise.resolve(); // explicitly return a resolved promise
    } catch (error) {
        console.error('Error loading item data:', error);
        return Promise.reject(error);
    }
}



/* code region */
document.addEventListener('DOMContentLoaded', function() {
    Promise.all([
        createTierBoxesFromJSON(),
        createItemsFromJSON()
    ]).then(() => {
        let items = document.getElementsByClassName("item");
        let baseBox = document.getElementById("base-box");
        let tierBoxes = document.getElementsByClassName("tier-box");
        let selected = null;

        // Add event listeners for baseBox
        baseBox.addEventListener("dragover", function(e) {
            e.preventDefault();
        });
        baseBox.addEventListener("drop", function(e) {
            e.preventDefault();
            baseBox.appendChild(selected);
            selected = null;
        });

        for (let tierBox of tierBoxes) {
            const dragRegion = tierBox.querySelector('[name^="region-"]');
            
            dragRegion.addEventListener("dragover", function(e) {
                e.preventDefault();
            });
            dragRegion.addEventListener("drop", function(e) {
                e.preventDefault();
                dragRegion.appendChild(selected);
                selected = null;
            });
        }

        for (let item of items) {
            item.addEventListener("dragstart", function(e) {
                selected = e.target;
            });
        }
    }).catch(error => {
        console.error('Error:', error);
    });
});
