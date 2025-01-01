/* functions region */
function saveTierList() {
    const tierBoxes = document.getElementsByClassName('tier-box');
    let tierListData = {
        tiers: []
    };

    // Loop through each tier box
    for (let tierBox of tierBoxes) {
        const tierLabel = tierBox.querySelector('.tier-label').textContent;
        const dragRegion = tierBox.querySelector('[name^="region-"]');
        const items = dragRegion.getElementsByClassName('item');
        
        // Create an array of items in this tier
        const itemsInTier = Array.from(items).map(item => ({
            id: item.id,
            name: item.textContent,
            // Add any other item properties you want to save
        }));

        // Add this tier's data to the tierListData
        tierListData.tiers.push({
            label: tierLabel,
            items: itemsInTier
        });
    }

    // Convert to JSON and create download
    const dataStr = JSON.stringify(tierListData, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    
    // Create and trigger download
    const exportFileDefaultName = 'tierlist.json';
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
}



/* code region */
document.getElementById('save-button').addEventListener('click', saveTierList);