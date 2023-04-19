// Para ingresar al token - de crecacion de usuarios
const getConfig = () => ({
    headers: { 
        Authorization: `Bearer ${localStorage.getItem("token")}` 
    }
})

export default getConfig;

// Corregir getConfig