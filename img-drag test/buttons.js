/* functions region */
function saveTierList() {
    const tierBoxes = document.getElementsByClassName('tier-box');
    let tierListData = {
        tiers: []
    };

    for (let tierBox of tierBoxes) {
        const tierLabel = tierBox.querySelector('.tier-label').textContent;
        const dragRegion = tierBox.querySelector('[name^="region-"]');
        const items = dragRegion.getElementsByClassName('item');
        
        // create array of items for this tier
        const itemsInTier = Array.from(items).map(item => ({
            id: item.id,
            name: item.textContent,
        }));

        tierListData.tiers.push({
            label: tierLabel,
            items: itemsInTier
        });
    }

    // convert to JSON and create download
    const dataStr = JSON.stringify(tierListData, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    
    const exportFileDefaultName = 'tierlist.json';
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
}



/* code region */
document.getElementById('save-button').addEventListener('click', saveTierList);
