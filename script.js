const password = "mitthemliga123";

// Kontrollera om användaren redan är autentiserad
if(sessionStorage.getItem("authed") === "true"){
    document.body.style.display = "block"; // Visa sidan
} else {
    const userPass = prompt("Ange lösenord för att komma åt sidan:");
    if(userPass === password){
        sessionStorage.setItem("authed","true");
        document.body.style.display = "block"; // Visa sidan
    } else {
        // Fel lösenord → visa bara meddelande
        document.body.innerHTML = "<h1>Åtkomst nekad</h1><p>Du har inte tillgång till denna sida.</p>";
        document.body.style.display = "block";
    }
}
