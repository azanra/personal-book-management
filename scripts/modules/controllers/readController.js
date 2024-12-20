class ReadController {
    static detailController(detailBtn) {
        detailBtn.addEventListener("click", () => {
            const containerId = detailBtn.parentNode.id;
            console.log(containerId);
        })
    }
}

export {ReadController};