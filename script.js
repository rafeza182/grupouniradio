<script>
    let startY = 0;
    let isRefreshing = false;

    document.addEventListener("touchstart", (e) => {
        if (window.scrollY === 0) {
            startY = e.touches[0].pageY;
        }
    });

    document.addEventListener("touchmove", (e) => {
        if (window.scrollY === 0 && e.touches[0].pageY > startY + 100 && !isRefreshing) {
            isRefreshing = true;
            location.reload(); // Recarga la página al detectar el gesto
        }
    });

    document.addEventListener("touchend", () => {
        isRefreshing = false;
    });
</script>
</body>
