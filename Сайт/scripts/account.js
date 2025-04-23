document.addEventListener("DOMContentLoaded", async () => {
    const token = localStorage.getItem("token");
    if (!token) {
        window.location.href = "/Login.html";
        return;
    }

    const response = await fetch("http://127.0.0.1:8001/account", {
        headers: { "Authorization": `Bearer ${token}` }
    });

    if (response.ok) {
        const userData = await response.json();
        document.querySelector("h3").textContent = 
            `${userData.last_name} ${userData.first_name} ${userData.father_name || ""}`;
        document.querySelector("p").textContent = userData.university;
    } else {
        window.location.href = "/Login.html";
    }
});