try {
    throw new Error("Deu um problema no codigo");
} catch (e) {
    console.log(e.name + ": " + e.message);
}