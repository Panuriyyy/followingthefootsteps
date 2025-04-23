document.querySelector(".login-btn").addEventListener("click", async (e) => {
    e.preventDefault();

    const userData = {
        email: document.querySelector(".emaill").value,
        password: document.querySelector(".passwword").value
    };

    try {
        const response = await fetch("http://127.0.0.1:8001/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(userData)
        });

        if (response.ok) {
            const { access_token } = await response.json();
            localStorage.setItem("token", access_token); // Сохраняем токен
            window.location.href = "Account.html"; // Переходим в личный кабинет
        } else {
            alert("Неверный email или пароль!");
        }
    } catch (error) {
        alert("Ошибка сети. Проверь подключение.");
    }
});