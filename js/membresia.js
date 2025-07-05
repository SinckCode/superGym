async function fetchMemberships() {
    try {
        const response = await fetch('http://localhost:3000/api/memberships');
        const memberships = await response.json();

        const container = document.getElementById('membership-container');
        container.innerHTML = ''; // Limpia contenido previo

        memberships.forEach(membership => {
            const card = `
                <div class="membership-card">
                    <h3>${membership.tipo}</h3>
                    <p>Precio: $${membership.precio}</p>
                </div>
            `;
            container.innerHTML += card;
        });
    } catch (error) {
        console.error('Error al cargar las membresías:', error);
    }
}

document.addEventListener('DOMContentLoaded', fetchMemberships);
