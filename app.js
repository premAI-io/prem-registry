fetch("https://prem-registry.fly.dev/manifests/")
    .then(response => response.json())
    .then(data => {
        const manifestsDiv = document.getElementById('manifests');
        console.log(data);
        data.forEach(manifest => {
            const card = document.createElement('div');
            card.className = 'card';

            if (manifest.icon) {
                const img = document.createElement('img');
                img.src = `https://prem-registry.fly.dev${manifest.icon}`;
                img.alt = manifest.name;
                card.appendChild(img);
            }

            const h2 = document.createElement('h2');
            h2.textContent = manifest.name;
            card.appendChild(h2);

            if (manifest.id) {
                const p = document.createElement('p');
                p.textContent = manifest.id;
                card.appendChild(p);
            }

            if (manifest.apps && manifest.apps.length > 0) {
                const p = document.createElement('p');
                p.textContent = `${manifest.apps.join(", ")}`;
                card.appendChild(p);
            }

            manifestsDiv.appendChild(card);
        });
    })
    .catch(error => console.error(`Error: ${error}`));
