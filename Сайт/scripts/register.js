document.querySelector(".login-btn").addEventListener("click", async (e) => {
    e.preventDefault(); 

    const userData = {
        last_name: document.querySelector(".last-name").value,
        first_name: document.querySelector(".first-name").value,
        father_name: document.querySelector(".father-name").value,
        email: document.querySelector(".emaill").value,
        university: document.querySelector(".education").value,
        password: document.querySelector(".pass1").value
    };


    if (document.querySelector(".pass1").value !== document.querySelector(".pass2").value) {
        alert("Пароли не совпадают!");
        return;
    }

    try {
        const response = await fetch("http://127.0.0.1:8001/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(userData)
        });

        if (response.ok) {
            alert("Регистрация успешна! Теперь войдите.");
            window.location.href = "Login.html"; 
        } else {
            const errorData = await response.json();
            alert(`Ошибка: ${errorData.detail || "Неизвестная ошибка"}`);
        }
    } catch (error) {
        alert("Ошибка сети. Проверь подключение.");
    }
});